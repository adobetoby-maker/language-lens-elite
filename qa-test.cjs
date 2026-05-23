/**
 * Language Threshold – End-to-End QA Script
 * Playwright (Node) – Desktop 1440×900
 */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE = "http://localhost:8080";
const SHOTS_DIR = "/tmp/qa-shots";
if (!fs.existsSync(SHOTS_DIR)) fs.mkdirSync(SHOTS_DIR, { recursive: true });

const issues = [];
let screenshotIndex = 0;

function log(msg) {
  console.log("[QA] " + msg);
}
function bug(severity, title, detail) {
  issues.push({ severity, title, detail });
  console.log(`\n  *** ${severity}: ${title}\n      ${detail}`);
}

async function shot(page, name) {
  const file = path.join(SHOTS_DIR, `${String(screenshotIndex++).padStart(2, "0")}-${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  log(`Screenshot → ${file}`);
  return file;
}

async function waitFor(page, selector, timeout = 8000) {
  try {
    await page.waitForSelector(selector, { timeout });
    return true;
  } catch {
    return false;
  }
}

async function collectConsoleErrors(page) {
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push("UNCAUGHT: " + err.message));
  return errors;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    // Clear storage to simulate a new user
    storageState: undefined,
  });
  // Block Supabase to simulate offline/guest mode cleanly (optional – comment out if causing issues)
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push("UNCAUGHT: " + err.message));

  // ─────────────────────────────────────────────────────────
  // 1. INITIAL PAGE LOAD
  // ─────────────────────────────────────────────────────────
  log("\n=== 1. INITIAL PAGE LOAD ===");
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);
  await shot(page, "initial-load");

  const pageTitle = await page.title();
  log(`Page title: "${pageTitle}"`);

  // Onboarding wizard check
  const onboardingSelectors = [
    '[data-testid="onboarding"]',
    ".onboarding",
    "text=Welcome",
    "text=Choose your language",
    "text=Select a language",
    "text=Get Started",
    "text=Pick a language",
    '[class*="onboard"]',
    '[class*="wizard"]',
    '[class*="modal"]',
    "dialog",
  ];
  let onboardingFound = false;
  for (const sel of onboardingSelectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1000 })) {
        log(`Onboarding found via selector: ${sel}`);
        onboardingFound = true;
        break;
      }
    } catch {}
  }
  if (!onboardingFound) {
    bug(
      "High",
      "No onboarding wizard on first load",
      "Expected an onboarding modal or language picker for new users – none detected",
    );
  }

  // Language picker
  const langPickerSelectors = [
    'select[name*="lang"]',
    'select[id*="lang"]',
    '[data-testid*="language"]',
    '[class*="language-pick"]',
    "text=Japanese",
    "text=Korean",
    "text=Spanish",
    '[class*="lang-select"]',
    '[class*="LanguagePicker"]',
  ];
  let langPickerFound = false;
  for (const sel of langPickerSelectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1000 })) {
        log(`Language picker found via: ${sel}`);
        langPickerFound = true;
        break;
      }
    } catch {}
  }
  if (!langPickerFound) {
    bug(
      "High",
      "Language picker not visible on load",
      "Could not find any language selection element on initial page",
    );
  }

  // ─────────────────────────────────────────────────────────
  // 2. TOP NAV – TABS
  // ─────────────────────────────────────────────────────────
  log("\n=== 2. TOP NAV / TABS ===");
  await shot(page, "topnav");

  // Gather all visible tab-like buttons/links
  const navText = await page.evaluate(() => {
    const items = [];
    document
      .querySelectorAll(
        'nav a, nav button, [role="tab"], [class*="tab"] button, [class*="Tab"] button',
      )
      .forEach((el) => {
        const txt = el.textContent?.trim();
        if (txt && txt.length < 40) items.push(txt);
      });
    return [...new Set(items)];
  });
  log("Nav items found: " + JSON.stringify(navText));

  const expectedTabs = ["Reader", "Grammar", "Speak", "Mission", "Module", "Kana"];
  for (const tab of expectedTabs) {
    const found = navText.some((t) => t.toLowerCase().includes(tab.toLowerCase()));
    if (!found) {
      // also try page-wide search
      const el = page.locator(`text=${tab}`).first();
      let visible = false;
      try {
        visible = await el.isVisible({ timeout: 1000 });
      } catch {}
      if (!visible) {
        bug(
          "High",
          `Tab "${tab}" not found in nav`,
          `Expected a "${tab}" tab in the top navigation`,
        );
      }
    }
  }

  // ─────────────────────────────────────────────────────────
  // 3. MODULES TAB
  // ─────────────────────────────────────────────────────────
  log("\n=== 3. MODULES TAB ===");

  // Try clicking the Modules tab
  let modulesTabClicked = false;
  const modulesTabCandidates = [
    "text=Modules",
    "text=Module",
    '[data-tab="modules"]',
    '[data-tab="module"]',
    'button:has-text("Modules")',
    'a:has-text("Modules")',
  ];
  for (const sel of modulesTabCandidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click();
        await page.waitForTimeout(1500);
        modulesTabClicked = true;
        log(`Clicked modules tab via: ${sel}`);
        break;
      }
    } catch {}
  }

  await shot(page, "modules-tab");

  if (!modulesTabClicked) {
    bug("High", "Modules tab not clickable", "Could not locate or click any Modules tab element");
  } else {
    // Check for module cards
    const moduleCardSelectors = [
      '[class*="module-card"]',
      '[class*="ModuleCard"]',
      '[class*="lesson-card"]',
      '[data-testid*="module"]',
      ".card",
      '[class*="card"]',
    ];
    let cardsFound = false;
    for (const sel of moduleCardSelectors) {
      const count = await page.locator(sel).count();
      if (count > 0) {
        log(`Module cards found: ${count} via ${sel}`);
        cardsFound = true;
        break;
      }
    }
    if (!cardsFound) {
      bug(
        "High",
        "No module cards rendered in Modules tab",
        "After clicking Modules tab, no card elements found",
      );
    }

    // Try clicking Activate on first module card
    const activateCandidates = [
      'button:has-text("Activate")',
      "text=Activate",
      'button:has-text("Start")',
      'button:has-text("Begin")',
    ];
    let activateClicked = false;
    for (const sel of activateCandidates) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 2000 })) {
          await el.click();
          await page.waitForTimeout(1500);
          activateClicked = true;
          log(`Clicked Activate via: ${sel}`);
          break;
        }
      } catch {}
    }
    if (!activateClicked) {
      bug(
        "Medium",
        'No "Activate" button found on module cards',
        "Expected Activate button on at least one module card",
      );
    }
    await shot(page, "modules-activate");
  }

  // ─────────────────────────────────────────────────────────
  // 4. READER TAB
  // ─────────────────────────────────────────────────────────
  log("\n=== 4. READER TAB ===");
  const readerCandidates = [
    "text=Reader",
    'button:has-text("Reader")',
    'a:has-text("Reader")',
    '[data-tab="reader"]',
  ];
  let readerClicked = false;
  for (const sel of readerCandidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click();
        await page.waitForTimeout(2000);
        readerClicked = true;
        log(`Clicked Reader tab via: ${sel}`);
        break;
      }
    } catch {}
  }
  await shot(page, "reader-tab");

  if (!readerClicked) {
    bug("High", "Reader tab not clickable", "Could not locate or click the Reader tab");
  } else {
    // Library bar
    const libraryBarSelectors = [
      '[class*="library-bar"]',
      '[class*="LibraryBar"]',
      '[class*="lesson-bar"]',
      '[data-testid*="library"]',
      '[class*="sidebar"]',
      '[class*="Sidebar"]',
    ];
    let libraryBarFound = false;
    for (const sel of libraryBarSelectors) {
      if ((await page.locator(sel).count()) > 0) {
        libraryBarFound = true;
        log(`Library bar found via: ${sel}`);
        break;
      }
    }
    if (!libraryBarFound) {
      bug(
        "Medium",
        "Library bar not visible in Reader",
        "Expected a library/lesson bar when Reader tab is active",
      );
    }

    // Lesson nav bar (Prev/Next dots from module activation)
    const lessonNavSelectors = [
      '[class*="lesson-nav"]',
      '[class*="LessonNav"]',
      '[class*="progress-dots"]',
      '[class*="dot"]',
      'button:has-text("Prev")',
      'button:has-text("Next")',
      '[aria-label*="previous"]',
      '[aria-label*="next"]',
      '[class*="chapter"]',
      '[class*="Chapter"]',
    ];
    let lessonNavFound = false;
    for (const sel of lessonNavSelectors) {
      const count = await page.locator(sel).count();
      if (count > 0) {
        lessonNavFound = true;
        log(`Lesson nav found: ${count} via ${sel}`);
        break;
      }
    }
    if (!lessonNavFound) {
      bug(
        "High",
        "Lesson nav bar (Prev/Next dots) not shown after module activation",
        "After activating a module, Reader should show lesson navigation dots/Prev/Next",
      );
    }

    // Content loads
    const contentSelectors = [
      '[class*="parallel"]',
      '[class*="reader-content"]',
      '[class*="ReaderContent"]',
      '[class*="text-content"]',
      '[class*="passage"]',
      "article",
    ];
    let contentFound = false;
    for (const sel of contentSelectors) {
      if ((await page.locator(sel).count()) > 0) {
        contentFound = true;
        log(`Reader content found via: ${sel}`);
        break;
      }
    }
    if (!contentFound) {
      bug("High", "Reader content area empty", "No readable text content found in Reader tab");
    }

    // Word card click test
    const clickableTextSelectors = [
      '[class*="clickable"]',
      '[class*="ClickableText"]',
      '[class*="word"]',
      "ruby",
      "span[data-word]",
      ".token",
    ];
    let wordCardTested = false;
    for (const sel of clickableTextSelectors) {
      const els = page.locator(sel);
      const count = await els.count();
      if (count > 0) {
        try {
          await els.first().click({ timeout: 2000 });
          await page.waitForTimeout(1000);
          // Check if a word card/tooltip appeared
          const cardSel =
            '[class*="word-card"], [class*="WordCard"], [class*="tooltip"], [class*="Tooltip"], [role="dialog"], [role="tooltip"]';
          const cardVisible = (await page.locator(cardSel).count()) > 0;
          if (!cardVisible) {
            bug(
              "Medium",
              "Word card did not open on text click",
              `Clicked a "${sel}" element but no word card/tooltip appeared`,
            );
          } else {
            log("Word card opened successfully");
          }
          wordCardTested = true;
        } catch {}
        break;
      }
    }
    if (!wordCardTested) {
      bug(
        "Low",
        "No clickable text tokens found in Reader",
        "Could not test word card – no clickable word elements found",
      );
    }
  }

  // ─────────────────────────────────────────────────────────
  // 5. MISSION MAP (Missionary tab)
  // ─────────────────────────────────────────────────────────
  log("\n=== 5. MISSION MAP ===");
  const missionCandidates = [
    "text=Mission",
    "text=Missionary",
    'button:has-text("Mission")',
    'a:has-text("Mission")',
    '[data-tab="mission"]',
  ];
  let missionClicked = false;
  for (const sel of missionCandidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click();
        await page.waitForTimeout(2000);
        missionClicked = true;
        log(`Clicked Mission tab via: ${sel}`);
        break;
      }
    } catch {}
  }
  await shot(page, "mission-tab");

  if (!missionClicked) {
    bug(
      "High",
      "Mission/Missionary tab not clickable",
      "Could not locate or click the Mission tab",
    );
  } else {
    // Map renders
    const mapSelectors = [
      '[class*="map"]',
      '[class*="Map"]',
      "canvas",
      "svg",
      '[data-testid*="map"]',
      '[class*="mission-map"]',
    ];
    let mapFound = false;
    for (const sel of mapSelectors) {
      if ((await page.locator(sel).count()) > 0) {
        mapFound = true;
        log(`Map element found via: ${sel}`);
        break;
      }
    }
    if (!mapFound) {
      bug("High", "Mission map does not render", "No map/canvas/svg found in Mission tab");
    }

    // "Add your mission" button – should work without sign-in
    const addMissionSelectors = [
      "text=Add your mission",
      'button:has-text("Add")',
      "text=Add Mission",
      'button:has-text("Add your")',
      '[class*="add-mission"]',
    ];
    let addMissionFound = false;
    for (const sel of addMissionSelectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 2000 })) {
          addMissionFound = true;
          await el.click();
          await page.waitForTimeout(1500);
          await shot(page, "mission-add-clicked");
          // Check if sign-in wall appeared (BUG condition)
          const signInWallSels = [
            "text=Sign in",
            "text=Log in",
            "text=Sign up",
            '[class*="auth"]',
            '[class*="login"]',
            '[class*="signin"]',
          ];
          let signInWallFound = false;
          for (const wsel of signInWallSels) {
            try {
              const wel = page.locator(wsel).first();
              if (await wel.isVisible({ timeout: 1000 })) {
                signInWallFound = true;
                log(`Sign-in wall appeared after Add Mission: ${wsel}`);
                break;
              }
            } catch {}
          }
          if (signInWallFound) {
            bug(
              "Critical",
              '"Add your mission" still requires sign-in (regression)',
              'After clicking "Add your mission", a sign-in/auth wall appeared – this was supposed to be fixed',
            );
          } else {
            log("Add Mission clicked – no sign-in wall (correct)");
          }
          break;
        }
      } catch {}
    }
    if (!addMissionFound) {
      bug(
        "High",
        '"Add your mission" button not found on Mission map',
        'Expected an "Add your mission" button on the mission map page',
      );
    }
  }

  // ─────────────────────────────────────────────────────────
  // 6. GRAMMAR STUDIO
  // ─────────────────────────────────────────────────────────
  log("\n=== 6. GRAMMAR STUDIO ===");
  const grammarCandidates = [
    "text=Grammar",
    'button:has-text("Grammar")',
    'a:has-text("Grammar")',
    '[data-tab="grammar"]',
    "text=Grammar Studio",
  ];
  let grammarClicked = false;
  for (const sel of grammarCandidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click();
        await page.waitForTimeout(2000);
        grammarClicked = true;
        log(`Clicked Grammar tab via: ${sel}`);
        break;
      }
    } catch {}
  }
  await shot(page, "grammar-tab");

  if (!grammarClicked) {
    bug("High", "Grammar Studio tab not clickable", "Could not locate or click the Grammar tab");
  } else {
    // Language selector works
    const langSelectorSels = [
      "select",
      '[class*="language-select"]',
      '[class*="LanguageSelect"]',
      '[role="combobox"]',
      '[class*="dropdown"]',
    ];
    let langSelectorFound = false;
    for (const sel of langSelectorSels) {
      if ((await page.locator(sel).count()) > 0) {
        langSelectorFound = true;
        log(`Language selector found in Grammar via: ${sel}`);
        break;
      }
    }
    if (!langSelectorFound) {
      bug(
        "Medium",
        "No language selector in Grammar Studio",
        "Expected a language selector dropdown/combo in Grammar Studio",
      );
    }

    // Content loads
    const grammarContentSels = [
      '[class*="grammar"]',
      '[class*="Grammar"]',
      "table",
      '[class*="rule"]',
      '[class*="exercise"]',
      '[class*="lesson"]',
    ];
    let grammarContentFound = false;
    for (const sel of grammarContentSels) {
      if ((await page.locator(sel).count()) > 0) {
        grammarContentFound = true;
        log(`Grammar content found via: ${sel}`);
        break;
      }
    }
    if (!grammarContentFound) {
      bug(
        "High",
        "Grammar Studio shows no content",
        "No grammar content/exercises found after switching to Grammar tab",
      );
    }
  }

  // ─────────────────────────────────────────────────────────
  // 7. SPEAK & LEARN
  // ─────────────────────────────────────────────────────────
  log("\n=== 7. SPEAK & LEARN ===");
  const speakCandidates = [
    "text=Speak",
    'button:has-text("Speak")',
    'a:has-text("Speak")',
    '[data-tab="speak"]',
  ];
  let speakClicked = false;
  for (const sel of speakCandidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click();
        await page.waitForTimeout(2000);
        speakClicked = true;
        log(`Clicked Speak tab via: ${sel}`);
        break;
      }
    } catch {}
  }
  await shot(page, "speak-tab");

  if (!speakClicked) {
    bug("High", "Speak & Learn tab not clickable", "Could not locate or click the Speak tab");
  } else {
    const micSelectors = [
      'button[aria-label*="mic"]',
      'button[aria-label*="Mic"]',
      '[class*="mic"]',
      '[class*="Mic"]',
      'svg[class*="mic"]',
      'button:has-text("Record")',
      'button:has-text("Speak")',
      '[data-testid*="mic"]',
    ];
    let micFound = false;
    for (const sel of micSelectors) {
      if ((await page.locator(sel).count()) > 0) {
        micFound = true;
        log(`Mic button found via: ${sel}`);
        break;
      }
    }
    if (!micFound) {
      bug(
        "Medium",
        "No microphone button in Speak & Learn",
        "Expected a mic/record button in the Speak tab",
      );
    }
  }

  // ─────────────────────────────────────────────────────────
  // 8. KANA PAD (only when Japanese selected)
  // ─────────────────────────────────────────────────────────
  log("\n=== 8. KANA PAD ===");
  // First switch to Japanese if possible
  const japaneseSelectors = [
    "text=Japanese",
    'option[value*="ja"]',
    'option[value*="japanese"]',
    '[data-lang="ja"]',
  ];
  let japaneseSelected = false;
  for (const sel of japaneseSelectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click();
        await page.waitForTimeout(1000);
        japaneseSelected = true;
        log(`Japanese selected via: ${sel}`);
        break;
      }
    } catch {}
  }

  // Check Kana Pad tab visibility
  const kanaCandidates = [
    "text=Kana",
    "text=Kana Pad",
    'button:has-text("Kana")',
    'a:has-text("Kana")',
    '[data-tab="kana"]',
  ];
  let kanaTabFound = false;
  for (const sel of kanaCandidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        kanaTabFound = true;
        log(`Kana Pad tab visible via: ${sel}`);
        if (japaneseSelected) {
          await el.click();
          await page.waitForTimeout(1500);
          await shot(page, "kana-pad");
        }
        break;
      }
    } catch {}
  }
  if (!kanaTabFound && japaneseSelected) {
    bug(
      "High",
      "Kana Pad tab not visible when Japanese is selected",
      "Expected the Kana Pad tab to appear when Japanese is the active language",
    );
  } else if (!kanaTabFound && !japaneseSelected) {
    bug(
      "Low",
      "Could not verify Kana Pad (could not select Japanese)",
      "Japanese language selection failed so Kana Pad visibility could not be tested",
    );
  }

  // ─────────────────────────────────────────────────────────
  // 9. LIBRARY DRAWER
  // ─────────────────────────────────────────────────────────
  log("\n=== 9. LIBRARY DRAWER ===");
  // Try opening the library – often a button in the reader bar or a sidebar toggle
  const libraryCandidates = [
    "text=Library",
    'button:has-text("Library")',
    'a:has-text("Library")',
    '[data-testid*="library"]',
    '[class*="library-btn"]',
    '[aria-label*="Library"]',
  ];
  let libraryOpened = false;
  for (const sel of libraryCandidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click();
        await page.waitForTimeout(1500);
        libraryOpened = true;
        log(`Library opened via: ${sel}`);
        break;
      }
    } catch {}
  }
  await shot(page, "library-drawer");

  if (!libraryOpened) {
    bug(
      "Medium",
      "Library drawer could not be opened",
      "Could not find or click a Library button/trigger",
    );
  } else {
    // Language filter pills
    const pillSelectors = [
      '[class*="pill"]',
      '[class*="Pill"]',
      '[class*="chip"]',
      '[class*="filter"]',
      '[role="tab"]',
    ];
    let pillsFound = false;
    for (const sel of pillSelectors) {
      const count = await page.locator(sel).count();
      if (count > 1) {
        pillsFound = true;
        log(`Filter pills found: ${count} via ${sel}`);
        break;
      }
    }
    if (!pillsFound) {
      bug(
        "Medium",
        "No language filter pills in Library drawer",
        "Expected filter pills (Japanese / Korean / Spanish etc.) in the Library",
      );
    }

    // Entries listed
    const entrySelectors = [
      '[class*="library-entry"]',
      '[class*="LibraryEntry"]',
      '[class*="entry"]',
      "li",
      '[class*="list-item"]',
    ];
    let entriesFound = false;
    for (const sel of entrySelectors) {
      const count = await page.locator(sel).count();
      if (count > 0) {
        entriesFound = true;
        log(`Library entries found: ${count} via ${sel}`);
        break;
      }
    }
    if (!entriesFound) {
      bug(
        "Medium",
        "Library drawer shows no entries",
        "No content entries found inside the Library drawer",
      );
    }
  }

  // ─────────────────────────────────────────────────────────
  // 10. DASHBOARD
  // ─────────────────────────────────────────────────────────
  log("\n=== 10. DASHBOARD ===");
  const dashboardCandidates = [
    "text=Dashboard",
    'button:has-text("Dashboard")',
    'a:has-text("Dashboard")',
    '[data-tab="dashboard"]',
  ];
  let dashboardClicked = false;
  for (const sel of dashboardCandidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click();
        await page.waitForTimeout(2000);
        dashboardClicked = true;
        log(`Clicked Dashboard via: ${sel}`);
        break;
      }
    } catch {}
  }
  await shot(page, "dashboard");

  if (!dashboardClicked) {
    bug("Medium", "Dashboard tab not found", "Could not locate or click a Dashboard tab");
  } else {
    // XP bar
    const xpSelectors = [
      '[class*="xp"]',
      '[class*="XP"]',
      '[class*="progress-bar"]',
      '[class*="ProgressBar"]',
      '[aria-label*="XP"]',
      "text=XP",
      '[class*="experience"]',
    ];
    let xpFound = false;
    for (const sel of xpSelectors) {
      if ((await page.locator(sel).count()) > 0) {
        xpFound = true;
        log(`XP bar found via: ${sel}`);
        break;
      }
    }
    if (!xpFound) {
      bug(
        "Medium",
        "XP bar not visible on Dashboard",
        "Expected an XP progress bar on the Dashboard",
      );
    }

    // Streak counter
    const streakSelectors = [
      '[class*="streak"]',
      '[class*="Streak"]',
      "text=streak",
      "text=Streak",
      '[data-testid*="streak"]',
      "text=🔥",
    ];
    let streakFound = false;
    for (const sel of streakSelectors) {
      if ((await page.locator(sel).count()) > 0) {
        streakFound = true;
        log(`Streak found via: ${sel}`);
        break;
      }
    }
    if (!streakFound) {
      bug(
        "Medium",
        "Streak counter not visible on Dashboard",
        "Expected a streak counter on the Dashboard",
      );
    }
  }

  // ─────────────────────────────────────────────────────────
  // 11. CONSOLE ERRORS SUMMARY
  // ─────────────────────────────────────────────────────────
  log("\n=== 11. CONSOLE ERRORS ===");
  if (consoleErrors.length === 0) {
    log("No console errors detected.");
  } else {
    consoleErrors.forEach((err, i) => {
      log(`  Console error #${i + 1}: ${err.substring(0, 300)}`);
      bug("Medium", `Console error: ${err.substring(0, 80)}`, err.substring(0, 300));
    });
  }

  // ─────────────────────────────────────────────────────────
  // FINAL REPORT
  // ─────────────────────────────────────────────────────────
  log("\n\n========================================");
  log("         QA REPORT SUMMARY");
  log("========================================");
  const bySeverity = { Critical: [], High: [], Medium: [], Low: [] };
  issues.forEach((i) => (bySeverity[i.severity] || []).push(i));
  for (const [sev, list] of Object.entries(bySeverity)) {
    if (list.length === 0) continue;
    console.log(`\n--- ${sev} (${list.length}) ---`);
    list.forEach((item, idx) => {
      console.log(`  ${idx + 1}. ${item.title}`);
      console.log(`     → ${item.detail}`);
    });
  }
  console.log(`\nTotal issues: ${issues.length}`);
  console.log(`Screenshots saved to: ${SHOTS_DIR}`);

  await browser.close();
})();
