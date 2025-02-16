import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"
import Link from "next/link"

//======================================
export const ButtonAnimation = () => {
  return (
    <Link href="/files/resume.pdf" target="_blank" className="w-full">
      <Button
        className={cn(
          "relative overflow-hidden border shadow group w-full",
          // light mode
          "border-zinc-300 bg-emerald-500 text-zinc-50",
          // dark mode
          "dark:border-zinc-300 dark:text-zinc-50 dark:bg-emerald-500"
        )}
      >
        <span className="absolute inset-0 rounded-sm flex items-center justify-center size-full duration-700 ease-[cubic-bezier(0.50,0.20,0,1)] -translate-x-full group-hover:translate-x-0 bg-emerald-600 dark:bg-zinc-100 text-zinc-100">
          <DownloadIcon size={16} />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full transition-all duration-500 ease-out transform group-hover:translate-x-full ">
          Baixar currículo
        </span>
        <span className="relative invisible">Baixar currículo</span>
      </Button>
    </Link>
  )
}
