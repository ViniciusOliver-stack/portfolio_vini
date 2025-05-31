import { ProjectModel } from "@/app/config/projects"
import { FadeIn } from "@/components/animation/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  project: ProjectModel
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { id, imagePreviewUrl, name, sourceUrl, projectUrl, shortDescription } =
    project

  return (
    <FadeIn
      startOnScrollIntersect
      to={index % 2 === 0 ? "left" : "right"}
      delay={0.1 * index}
      id={`project-${id}`}
      className="flex gap-4 group flex-col-reverse items-center lg:flex-row lg:odd:flex-row-reverse"
      duration={0.4}
    >
      <div className="flex justify-between flex-col w-full lg:w-1/2 lg:group-odd:text-end lg:group-odd:items-end h-full lg:min-h-[200px]">
        <div className="flex flex-col gap-1 lg:group-odd:items-end">
          <h3 className="text-lg font-bold">{name}</h3>
          {shortDescription && (
            <p className="text-base text-muted-foreground line-clamp-3 lg:line-clamp-4">
              {shortDescription}
            </p>
          )}
        </div>
        <footer className="flex  xs:flex-row items-center gap-2 w-full xs:w-fit mt-4 lg:mt-0 lg:group-odd:justify-end">
          {projectUrl && (
            <Button
              asChild
              className="text-center w-full xs:w-fit bg-emerald-500 hover:bg-emerald-600"
            >
              <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight size={16} className="mr-2" />
                Ver Projeto
              </Link>
            </Button>
          )}
          {sourceUrl && (
            <Button
              asChild
              variant="outline"
              className="text-center w-full xs:w-fit"
            >
              <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Código
              </Link>
            </Button>
          )}
        </footer>
      </div>

      <div className="w-full lg:w-1/2">
        <Image
          src={imagePreviewUrl}
          alt={`Preview do projeto ${name}`}
          className="dark:border-none border rounded-lg w-full h-fit aspect-video shadow-2xl shadow-primary/10 object-cover"
          width={1280}
          height={720}
          priority={index < 2} // Otimização para os primeiros projetos
        />
      </div>
    </FadeIn>
  )
}
