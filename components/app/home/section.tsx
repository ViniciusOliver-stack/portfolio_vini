import { techsBadge } from "@/app/config/techs-badge"
import { RotateWords } from "@/components/animation/rotate-words"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import CardAbout from "./card-about"
import { ExperiencesGrid } from "./experiences-grid"
import { experiencesList } from "@/app/config/experiences"
import { FadeIn } from "@/components/animation/fade-in"
import { ButtonAnimation } from "@/components/animation/button-animation"

export default function SectionHome() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl lg:text-4xl">Vinicius S. Oliveira</h1>
        <RotateWords text="Desenvolvedor" words={["Fullstack", "RPA"]} />
      </div>

      <ul>
        <li className="flex items-center gap-1 text-sm text-gray-500">
          Assistente Desenvolvedor Pleno
          <Link
            href="https://www.melius.com"
            target="_blank"
            className="text-emerald-500 flex items-center gap-0.5 hover:underline"
          >
            Melius Software
            <ArrowUpRight size={14} />
          </Link>
        </li>
        <li className="flex items-center gap-1 text-sm text-gray-500">
          Graduado pela
          <Link
            href="https://www.melius.com"
            target="_blank"
            className="text-emerald-500 flex items-center gap-0.5 hover:underline"
          >
            UNIFACS
            <ArrowUpRight size={14} />
          </Link>
        </li>
      </ul>

      <ul className="flex flex-wrap gap-1">
        {techsBadge.map((tech) => {
          return (
            <li key={tech.name}>
              <Badge variant="secondary" className="rounded-md">
                {tech.name}
              </Badge>
            </li>
          )
        })}
      </ul>

      <div className="mt-8" />
      <CardAbout />
      <div className="grid xl:grid-cols-2 gap-[inherit]">
        <FadeIn duration={0.5} delay={0.1} className="card flex flex-col gap-6">
          <ExperiencesGrid
            title="Experiências"
            experiencesList={experiencesList.filter(
              ({ type }) => type === "work"
            )}
          />
          <ButtonAnimation />
        </FadeIn>
        <FadeIn duration={0.5} delay={0.1} className="card flex flex-col gap-6">
          <ExperiencesGrid
            title="Educação"
            experiencesList={experiencesList.filter(
              ({ type }) => type === "educational"
            )}
          />
        </FadeIn>
      </div>
    </section>
  )
}
