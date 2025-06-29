"use client"

import * as React from "react"
import {
  FolderCodeIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavSocials } from "./nav-socials"
// import { NavUser } from "./nav-user"

import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Vinicius Oliveira",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Início",
      url: "/",
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "Projetos",
      url: "/projects",
      icon: FolderCodeIcon,
    },
    {
      title: "Tecnologias e Ferramentas",
      url: "/stack",
      icon: SquareTerminal,
    },
  ],
  projects: [
    {
      name: "Github",
      url: "https://github.com/ViniciusOliver-stack",
      icon: GithubIcon,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/viniciussantos-oliveira/",
      icon: LinkedinIcon,
    },
    {
      name: "Email",
      url: "mailto:vinicius.so.contato@gmail.com",
      icon: MailIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSocials projects={data.projects} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
