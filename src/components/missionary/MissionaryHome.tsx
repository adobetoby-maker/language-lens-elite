import { MissionaryQuickStart } from "@/components/grammar/MissionaryQuickStart";
import { MissionaryLessonReader } from "@/components/missionary/MissionaryLessonReader";

/**
 * Dedicated tab for the LDS Missionary module — surfaces the deep clickable
 * lesson reader (all 5 PMG discussions with inline reflection prompts and
 * end-of-section quizzes), the Quick Start, mission map, family package,
 * and curated commitment phrases on its own page.
 */
export function MissionaryHome() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <MissionaryLessonReader />
      <MissionaryQuickStart />
    </div>
  );
}
