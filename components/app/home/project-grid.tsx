import { ProjectModel } from "@/app/config/projects"
import { FadeIn } from "@/components/animation/fade-in"
import { ProjectCard } from "./project-card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProjectsGridProps {
  projectsList: ProjectModel[]
  title?: string
  showOnlyHighlighted?: boolean
  category?: keyof typeof import("@/app/config/projects").projectsCategories
}

export function ProjectsGrid({
  projectsList,
  title = "Projetos",
  showOnlyHighlighted = false,
  category,
}: ProjectsGridProps) {
  // Filtrar projetos baseado nos parâmetros
  const filteredProjects = projectsList
    .filter((project) => {
      if (showOnlyHighlighted && !project.highlight) return false
      if (category && project.category !== category) return false
      return true
    })
    .sort((a, b) => {
      // Destacados primeiro
      if (a.highlight && !b.highlight) return -1
      if (!a.highlight && b.highlight) return 1
      return 0
    })

  return (
    <section className="flex flex-col gap-8">
      <FadeIn startOnScrollIntersect delay={0.1} duration={0.4}>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold leading-none tracking-tight text-2xl">
            {title}
          </h2>
          {filteredProjects.length > 0 && (
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-emerald-500 transition-all"
            >
              <span className="flex items-center gap-1">
                Ver todos <ChevronRight size={18} />
              </span>
            </Link>
          )}
        </div>
      </FadeIn>

      {filteredProjects.length > 0 ? (
        <div className="flex flex-col gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`project-${project.id}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      ) : (
        <FadeIn startOnScrollIntersect delay={0.2} duration={0.4}>
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Nenhum projeto encontrado para os filtros selecionados.
            </p>
          </div>
        </FadeIn>
      )}
    </section>
  )
}
