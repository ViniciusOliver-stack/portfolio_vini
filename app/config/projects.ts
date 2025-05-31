export const projectsCategories = {
  frontend: "Front-end",
  backend: "Back-end",
};

export type ProjectModel = {
  id: string;
  name: string;
  projectUrl?: string;
  sourceUrl?: string;
  shortDescription?: string;
  description?: string;
  imagePreviewUrl: string;
  category: keyof typeof projectsCategories;
  highlight?: boolean;
};

export const projectsList: ProjectModel[] = [
  {
    id: "rubnik",
    name: "Rubnik",
    projectUrl: "https://rubnik.com/",
    imagePreviewUrl: "/images/projects/rubnik-thumbnail.png",
    category: "frontend",
    shortDescription: "Rubnik é seu agente de IA multi-modelo que automatiza o WhatsApp com Gemini, OpenAI e mais, para atendimento, vendas e suporte simples, poderoso e acessível.",
    highlight: true,
  },
  {
    id: "transportino",
    name: "Transportino",
    projectUrl: "https://transportino.com",
    imagePreviewUrl: "/images/projects/easy-aluga.png",
    category: "frontend",
    shortDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    highlight: true,
  },
  {
    id: "me-conta-sua-historia",
    name: "Me conta a sua história?",
    projectUrl: "https://the-stone-currency.vercel.app",
    imagePreviewUrl: "/images/projects/stone-currency.png",
    category: "frontend",
    shortDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    highlight: true,
  },
  {
    id: "big-lanches",
    name: "Big Lanches",
    projectUrl: "https://i.imgur.com/PdfU1ek.png",
    imagePreviewUrl: "https://i.imgur.com/PdfU1ek.png",
    category: "frontend",
    shortDescription: "Big Lanches é uma aplicação real que digitaliza pedidos via cardápio online, calcula a entrega e envia tudo direto pro WhatsApp — simples, rápido e em uso diário pela lanchonete.",
    highlight: true,
  },
  {
    id: "podcastr",
    name: "Podcastr",
    projectUrl: "https://the-podcastr.vercel.app",
    sourceUrl: "https://github.com/ericknathan/podcastr",
    imagePreviewUrl: "/images/projects/podcastr.png",
    category: "frontend",
  },
  {
    id: "devify",
    name: "Devify",
    projectUrl: "https://devify-music.vercel.app",
    sourceUrl: "https://github.com/ericknathan/devify",
    imagePreviewUrl: "/images/projects/devify.png",
    category: "frontend",
  },
  {
    id: "codeleap-network",
    name: "Codeleap Network",
    projectUrl: "https://thecodeleapnetwork.vercel.app",
    sourceUrl: "https://github.com/ericknathan/codeleap-network",
    imagePreviewUrl: "/images/projects/codeleap-network.png",
    category: "frontend",
  },
  {
    id: "igtimer",
    name: "Ig.timer",
    projectUrl: "https://igtimer.vercel.app",
    sourceUrl: "https://github.com/ericknathan/ig.timer",
    imagePreviewUrl: "/images/projects/igtimer.png",
    category: "frontend",
  },
  {
    id: "four-dev",
    name: "4Dev",
    projectUrl: "https://fourdev.vercel.app",
    sourceUrl: "https://github.com/ericknathan/react-clean-architecture",
    imagePreviewUrl: "/images/projects/four-dev.png",
    category: "frontend",
    highlight: true,
  },
  {
    id: "foodie",
    name: "Foodie",
    projectUrl: "https://ericknathan.github.io/foodie",
    sourceUrl: "https://github.com/ericknathan/foodie",
    imagePreviewUrl: "/images/projects/foodie.png",
    category: "frontend",
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    projectUrl: "https://ericknathan.github.io/tic-tac-toe",
    sourceUrl: "https://github.com/ericknathan/tic-tac-toe",
    imagePreviewUrl: "/images/projects/tic-tac-toe.png",
    category: "frontend",
  },
  {
    id: "happy",
    name: "Happy",
    projectUrl: "https://projeto-happy.ericknathan.repl.co/",
    sourceUrl: "https://github.com/ericknathan/Projeto-Happy",
    imagePreviewUrl: "/images/projects/happy.png",
    category: "frontend",
  },
  {
    id: "e-survey",
    name: "Clean Architecture API",
    sourceUrl: "https://github.com/ericknathan/node-clean-architecture",
    imagePreviewUrl: "/images/projects/e-survey.png",
    category: "backend",
  },
  {
    id: "rentx",
    name: "RentX API",
    sourceUrl: "https://github.com/ericknathan/rentx-backend",
    imagePreviewUrl: "/images/projects/rentx.png",
    category: "backend",
  },
  {
    id: "nest-rabbitmq",
    name: "NestJS Microservices Example",
    sourceUrl: "https://github.com/ericknathan/nestjs-microservices-example",
    imagePreviewUrl: "/images/projects/nest-rabbitmq.png",
    category: "backend",
  },
];
