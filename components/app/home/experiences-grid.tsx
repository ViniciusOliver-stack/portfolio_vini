import { ExperienceModel } from "@/app/config/experiences"
import { FadeIn } from "@/components/animation/fade-in"
import { WorkExperienceCard } from "./work-experience"

interface ExperiencesGridProps {
  experiencesList: ExperienceModel[]
  title?: string
}

export function ExperiencesGrid({
  experiencesList,
  title,
}: ExperiencesGridProps) {
  return (
    <ol className="flex flex-col h-full gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold leading-none tracking-tight text-xl">
          {title}
        </h1>
      </div>
      {experiencesList
        .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
        .sort((a, b) => (a.highlight && !b.highlight ? -1 : 1))
        .map((experienceData, index) => (
          <FadeIn
            key={`company-${experienceData.company}-${index}`}
            delay={0.2 + 0.1 * index}
            duration={0.4}
            startOnScrollIntersect
            as="li"
          >
            <WorkExperienceCard data={experienceData} />
          </FadeIn>
        ))}
    </ol>
  )
}
