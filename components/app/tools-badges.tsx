/* eslint-disable @typescript-eslint/no-explicit-any */
import { uses } from "@/app/config/stack"
import { FadeIn } from "../animation/fade-in"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

uses.map((title, items) => {
  console.log(title.items)
  console.log(items)
})

export default function FerramentasBadges() {
  return (
    <div className="container max-w-4xl flex flex-col h-full justify-center gap-6">
      {uses.map((category) => (
        <section
          id={category.title.toLowerCase()}
          key={category.title}
          className="flex flex-col gap-4"
        >
          <FadeIn
            as="h2"
            className="font-bold text-xl sm:text-2xl"
            delay={0.1}
            duration={0.5}
            startOnScrollIntersect
          >
            <p className="font-bold text-xl sm:text-2xl capitalize text-zinc-700">
              {category.title}
            </p>
          </FadeIn>

          <FadeIn
            as="ul"
            delay={0.1}
            duration={0.5}
            to="top"
            startOnScrollIntersect
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2"
          >
            {category.items.map((item: any, index: number) => (
              <div key={index}>
                <Link
                  href={item.link}
                  target="_blank"
                  className={cn(
                    "flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors",
                    "focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring hover:bg-emerald-500/80 hover:text-white transition-all duration-100"
                  )}
                >
                  <div
                    className={cn(
                      "p-2 flex items-center justify-center rounded-lg relative overflow-hidden",
                      item.invert && "dark:invert"
                    )}
                  >
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="z-10"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </div>
            ))}
          </FadeIn>
        </section>
      ))}
    </div>
  )
}
