import { MissionaryQuickStart } from "@/components/grammar/MissionaryQuickStart";

/**
 * Dedicated tab for the LDS Missionary module — surfaces the Quick Start,
 * mission map, family package, and curated commitment phrases on its own
 * page so Grammar Studio stays focused on grammar.
 */
export function MissionaryHome() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <MissionaryQuickStart />
    </div>
  );
}
