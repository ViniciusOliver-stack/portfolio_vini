import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app/sidebar/app-sidebar"
import { Separator } from "@radix-ui/react-separator"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Vini Oliveira | Desenvolvedor Fullstack",
  description:
    "Desenvolvedor Fullstack especializado em ReactJS, NextJS, TypeScript, JavaScript, NodeJS, PostgreSQL e Python. Transformando ideias em aplicações de alto desempenho.",
  keywords: [
    "Vinicius Santos Oliveira",
    "Desenvolvedor Fullstack",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "JavaScript",
    "NodeJS",
    "PostgreSQL",
    "Python",
    "Desenvolvimento Web",
    "Portfólio",
  ],
  authors: [
    {
      name: "Vinicius Santos Oliveira",
    },
  ],
  openGraph: {
    title: "Vinicius Santos Oliveira | Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack especializado em ReactJS, NextJS, TypeScript, JavaScript, NodeJS, PostgreSQL e Python. Conheça meu portfólio e projetos.",
    url: "https://vini.oliveiratechs.com/",
    type: "website",
    locale: "pt_BR",
    siteName: "Portfólio Vinicius Santos Oliveira",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-[80%] mx-auto`}
      >
        <SidebarProvider>
          <AppSidebar />

          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <span>Olá, Seja Bem-vindo!</span>
              </div>
            </header>
            <main className="flex min-h-screen flex-col mt-8">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
