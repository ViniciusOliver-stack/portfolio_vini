"use client"
import Image from "next/image"
import React, { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from "@/hooks/use-outside-click"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowUpRightIcon, GithubIcon } from "lucide-react"

export default function ExpandableCardGridDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  )
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

  return (
    <>
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
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[900px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={1906}
                  height={920}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="flex flex-col overflow-hidden">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
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
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={1906}
                  height={920}
                  src={card.src}
                  alt={card.title}
                  className="object-cover w-full rounded-lg transition-all duration-300"
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.projectLink && (
                    <Button
                      className="rounded-lg w-fit bg-emerald-500 hover:bg-emerald-600"
                      asChild
                      onClick={handleButtonClick}
                    >
                      <Link
                        href={card.projectLink}
                        target="_blank"
                        className="flex items-center gap-2 text-white w-fit"
                        onClick={handleButtonClick}
                      >
                        <ArrowUpRightIcon size={18} /> Visitar
                      </Link>
                    </Button>
                  )}

                  {card.githubLink && (
                    <Button
                      className="w-fit rounded-lg"
                      asChild
                      onClick={handleButtonClick}
                    >
                      <Link
                        href={card.githubLink}
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
      </ul>
    </>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
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

// Adicionei projectLink e githubLink para cada card
const cards = [
  {
    description:
      "Rubnik é seu agente de IA multi-modelo que automatiza o WhatsApp com Gemini, OpenAI e mais, para atendimento, vendas e suporte simples, poderoso e acessível.",
    title: "Rubnik",
    src: "https://i.imgur.com/TyPnFmZ.png",
    ctaText: "Rubnik",
    ctaLink: "https://rubnik.com/",
    projectLink: "https://rubnik.com/",
    content: () => {
      return (
        <p>
          O Rubnik é uma plataforma inovadora que integra os principais modelos
          de Inteligência Artificial do mercado —{" "}
          <span className="font-medium">
            como Gemini, OpenAI, Anthropic, entre outros
          </span>{" "}
          — em um único ambiente intuitivo e acessível. Com poucos cliques, o
          usuário pode escolher o modelo ideal e configurar agentes inteligentes
          para automatizar conversas no WhatsApp, gerando interações
          personalizadas e eficazes com seus clientes.{" "}
          <span className="font-medium">
            Seja no Suporte ao Cliente, Vendas, SDR, ou demais setores da sua
            empresa
          </span>
          , o Rubnik atua como um verdadeiro parceiro virtual, pronto para
          escalar a comunicação e gerar resultados reais.
          <p className="py-4">
            <p className="font-medium"> 💬 Principais Diferenciais:</p>
            <ol className="list-disc">
              <li>• Escolha dinâmica entre diferentes modelos de IA</li>
              <li>• Integração direta com o WhatsApp</li>
              <li>• Interface simples e de fácil configuração</li>
              <li>• Ideal para pequenas, médias e grandes empresas</li>
              <li>• Automação inteligente com preço acessível</li>
            </ol>
          </p>
          O Rubnik foi pensado para democratizar o acesso à IA conversacional,
          entregando potência tecnológica com simplicidade e economia.
        </p>
      )
    },
  },
  {
    description:
      "Big Lanches é uma aplicação real que digitaliza pedidos via cardápio online, calcula a entrega e envia tudo direto pro WhatsApp — simples, rápido e em uso diário pela lanchonete.",
    title: "Big Lanches",
    src: "https://i.imgur.com/PdfU1ek.png",
    ctaText: "Big Lanches",
    ctaLink: "https://ui.aceternity.com/templates",
    projectLink: "https://big-lanches-msio.vercel.app/",
    // Sem githubLink para este projeto
    content: () => {
      return (
        <p>
          O <span className="font-medium">Big Lanches</span> é uma aplicação web
          desenvolvida para a lanchonete real de mesmo nome, com o objetivo de
          modernizar o atendimento e facilitar o processo de pedidos.
          <div className="py-4">
            <p className="font-medium">
              Com um design simples e funcional, o cliente pode:
            </p>
            <ol>
              <li>• Acessar o cardápio digital;</li>
              <li>• Escolher os itens desejados;</li>
              <li>• Calcular automaticamente a taxa de entrega;</li>
              <li>
                • Finalizar o pedido com envio direto para o WhatsApp da
                lanchonete;
              </li>
              <li>
                • Optar pelo pagamento na entrega, mantendo a experiência
                prática e acessível.
              </li>
            </ol>
          </div>
          <div className="mt-2">
            <p className="font-medium">🚀 Aplicação em produção e uso real</p>
            <p>
              A aplicação se encontra ativa e em uso diário pela empresa Big
              Lanches, atendendo pedidos reais e otimizando o atendimento ao
              cliente.
            </p>
          </div>
          <div className="mt-4">
            <p className="font-medium">
              🤝 Desenvolvimento colaborativo com Git
            </p>

            <div>
              Este projeto foi desenvolvido em parceria com outro desenvolvedor,
              com foco no uso de:
              <ul>
                <li>Branches organizadas por funcionalidades;</li>
                <li>Commits semânticos e bem estruturados;</li>
                <li>
                  Fluxo de trabalho com pull requests e revisão de código;
                </li>
                <li>
                  Aprendizado prático em colaboração, versionamento e Git
                  Workflow.
                </li>
              </ul>
              <p className="italic">
                O Big Lanches vai além de um projeto de portfólio — é uma
                solução real em produção, combinando tecnologia acessível com
                impacto direto no dia a dia de uma empresa.
              </p>
            </div>
          </div>
        </p>
      )
    },
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    // Sem projectLink para este projeto
    githubLink: "https://github.com/user/metallica-project",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      )
    },
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    projectLink: "https://himesh-reshammiya.com/",
    githubLink: "https://github.com/user/aap-ka-suroor",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      )
    },
  },
]
