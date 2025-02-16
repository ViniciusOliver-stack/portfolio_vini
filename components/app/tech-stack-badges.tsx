import { cn } from "@/lib/utils"

import { Badge } from "../ui/badge"
import { uses } from "@/app/config/stack"
import { FadeIn } from "../animation/fade-in"

interface TechStackBadgesProps {
  className?: string
  limit?: number
}

export function TechStackBadges({
  className,
  limit = 7,
}: TechStackBadgesProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {uses.slice(0, limit).map((category) => (
        <div key={category.title} className="flex flex-col">
          <h3 className="text-sm font-semibold">{category.title}</h3>
          <FadeIn>
            {category.items.map((item: any, index: number) => (
              <Badge key={index} variant="subtle">
                {item.name}{" "}
                {/* Certifique-se de que `item.name` ou outra propriedade existe */}
              </Badge>
            ))}
          </FadeIn>
        </div>
      ))}
    </div>
  )
}
