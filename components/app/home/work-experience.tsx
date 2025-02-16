import Image from "next/image"

import { ExperienceModel } from "@/app/config/experiences"
import { calcDuration, formatDate } from "@/lib/date"

interface WorkExperienceCardProps {
  data: ExperienceModel
}

export async function WorkExperienceCard({ data }: WorkExperienceCardProps) {
  const {
    company,
    role,
    startDate: rawStartDate,
    endDate: rawEndDate,
    image,
  } = data

  const startDate = new Date(rawStartDate)
  const endDate = rawEndDate ? new Date(rawEndDate) : undefined
  const duration = calcDuration(startDate, endDate)

  return (
    <div className="flex gap-4">
      <div className="rounded-full h-11 aspect-square flex justify-center items-center ring-1 bg-muted/50 ring-muted-foreground/40 p-1">
        <Image
          src={image}
          width={40}
          height={40}
          alt={`${company} logo`}
          className="rounded-full aspect-square opacity-90"
        />
      </div>
      <dl className="flex flex-col gap-x-2 w-full">
        <dt className="sr-only">{company}</dt>
        <dd className="w-full flex-none text-sm font-medium">{company}</dd>
        <dt className="sr-only">{role}</dt>
        <dd className="text-xs text-muted-foreground">{role}</dd>
        <dd className="text-xs text-muted-foreground/80 flex">
          <time className="mt-auto capitalize">
            {formatDate(startDate, !!endDate)} –{" "}
            {!endDate ? "Atualmente" : formatDate(endDate)} •{" "}
            {duration.years > 0 && `${duration.years} ano(s)`}{" "}
            {duration.months > 0 && `${duration.months} mês(es)`}
          </time>
        </dd>
      </dl>
    </div>
  )
}
