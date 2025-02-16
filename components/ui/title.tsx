import Link from "next/link"

interface TitleProps {
  title: string
  subtitle?: string
  link?: string
}

export default function Title({ title, subtitle, link }: TitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center gap-1">
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        {link && (
          <Link
            href={link}
            className="text-sm text-gray-500 hover:text-gray-700"
            target="_blank"
          >
            {link}
          </Link>
        )}
      </div>
    </div>
  )
}
