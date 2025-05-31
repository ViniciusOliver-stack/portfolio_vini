"use client"
import Image from "next/image"
import React, { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from "@/hooks/use-outside-click"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowUpRightIcon, GithubIcon } from "lucide-react"
import {
  projectsList,
  ProjectModel,
  FilterCategory,
  categoryLabels,
  categoryColors,
} from "@/app/config/projects"

export default function ExpandableCardGridDemo() {
  const [active, setActive] = useState<ProjectModel | boolean | null>(null)
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all")
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  // Função para evitar propagação de eventos
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Filtrar projetos baseado na categoria selecionada
  const filteredProjects = projectsList.filter((project) => {
    if (activeFilter === "all") return true
    return project.categories.includes(activeFilter)
  })

  return (
    <div className="mb-8">
      {/* Sistema de Filtros */}
      <div className="flex flex-wrap gap-2 mb-8 mt-8 justify-start">
        {(Object.keys(categoryLabels) as FilterCategory[]).map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(category)}
            className={`
              rounded-full px-4 py-2 transition-all duration-200
              ${
                activeFilter === category
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md"
                  : "hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300"
              }
            `}
          >
            {categoryLabels[category]}
          </Button>
        ))}
      </div>

      {/* Modal de detalhes do projeto */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[900px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <Image
                  priority
                  width={1906}
                  height={920}
                  src={active.imagePreviewUrl}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="flex flex-col overflow-hidden">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.shortDescription}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.shortDescription}
                    </motion.p>

                    {/* Badges das categorias no modal */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {active.categories.map((category) => (
                        <span
                          key={category}
                          className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${categoryColors[category]}`}
                        >
                          {categoryLabels[category]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4 flex-grow overflow-hidden">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base max-h-60 md:max-h-96 overflow-y-auto pr-2 flex flex-col items-start gap-4 dark:text-neutral-400"
                  >
                    {active.detailedContent ? (
                      active.detailedContent()
                    ) : (
                      <p>{active.description || active.shortDescription}</p>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Grid de projetos com animação */}
      <motion.ul
        layout
        className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.name}
              layoutId={`card-${project.name}-${id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(project)}
              className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer card"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${project.name}-${id}`}>
                  <Image
                    width={1906}
                    height={920}
                    src={project.imagePreviewUrl}
                    alt={project.name}
                    className="object-cover w-full rounded-lg transition-all duration-300"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <motion.h3
                    layoutId={`title-${project.name}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${project.shortDescription}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {project.shortDescription}
                  </motion.p>

                  {/* Badges das categorias */}
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${categoryColors[category]}`}
                      >
                        {categoryLabels[category]}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {(project.projectLink || project.projectUrl) && (
                      <Button
                        className="rounded-lg w-fit bg-emerald-500 hover:bg-emerald-600"
                        asChild
                        onClick={handleButtonClick}
                      >
                        <Link
                          href={project.projectLink || project.projectUrl!}
                          target="_blank"
                          className="flex items-center gap-2 text-white w-fit"
                          onClick={handleButtonClick}
                        >
                          <ArrowUpRightIcon size={18} /> Visitar
                        </Link>
                      </Button>
                    )}

                    {(project.githubLink || project.sourceUrl) && (
                      <Button
                        className="w-fit rounded-lg"
                        asChild
                        onClick={handleButtonClick}
                      >
                        <Link
                          href={project.githubLink || project.sourceUrl!}
                          target="_blank"
                          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white w-fit"
                          onClick={handleButtonClick}
                        >
                          <GithubIcon size={18} /> Código Fonte
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Mensagem quando não há projetos */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            Nenhum projeto encontrado para a categoria{" "}
            {categoryLabels[activeFilter]}.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}
