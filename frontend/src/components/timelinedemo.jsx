import { Timeline } from "@/components/ui/timeline"

export default function TimelineDemo() {
  const data = [
    {
      title: "Step 1",
      content: (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-blue-600 md:text-xl">Assessment</h3>
          <p className="mb-4 text-sm font-normal leading-relaxed text-neutral-600 md:text-base">
            Understand goals, fitness level, and lifestyle.
          </p>
          <ul className="space-y-2 text-sm text-neutral-800 md:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Goal, schedule, and habit audit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Movement screening & fitness snapshot</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Lifestyle, sleep, and stress review</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-blue-600 md:text-xl">Custom Plan</h3>
          <p className="mb-4 text-sm font-normal leading-relaxed text-neutral-600 md:text-base">
            Build personalized workouts and nutrition based on science.
          </p>
          <ul className="space-y-2 text-sm text-neutral-800 md:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Training split tailored to resources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Macronutrient and meal structure guidance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Milestones with progressive overload</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-blue-600 md:text-xl">Implementation & Tracking</h3>
          <p className="mb-4 text-sm font-normal leading-relaxed text-neutral-600 md:text-base">
            Guide workouts, track progress, and adjust as needed.
          </p>
          <ul className="space-y-2 text-sm text-neutral-800 md:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Coached workouts with notes and velocity cues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Weekly progress review & habit metrics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Adjustments based on feedback and recovery</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-blue-600 md:text-xl">Support & Education</h3>
          <p className="mb-4 text-sm font-normal leading-relaxed text-neutral-600 md:text-base">
            Provide form checks, habit guidance, and science-backed explanations.
          </p>
          <ul className="space-y-2 text-sm text-neutral-800 md:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>On-demand form reviews and cues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Habit coaching with actionable checklists</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>Science-backed explainers so you understand why</span>
            </li>
          </ul>
        </div>
      ),
    },
  ]
  return (
    <div className="min-h-screen py-12 ">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-neutral-200 p-8 md:p-12">
        <Timeline data={data} />
      </div>
    </div>
  )
}
