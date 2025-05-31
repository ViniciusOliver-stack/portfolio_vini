export const projectsCategories = {
  frontend: "Front-end",
  backend: "Back-end",
  automation: "Automação",
  fullstack: "Fullstack",
} as const

// Tipos para as categorias (incluindo "all" para filtros)
export type FilterCategory = "all" | keyof typeof projectsCategories

// Mapeamento das categorias para labels
export const categoryLabels: Record<FilterCategory, string> = {
  all: "Tudo",
  frontend: "Frontend",
  backend: "Backend",
  automation: "Automação",
  fullstack: "Fullstack",
}

// Cores para cada categoria
export const categoryColors: Record<FilterCategory, string> = {
  all: "bg-emerald-100 text-emerald-800",
  frontend: "bg-blue-100 text-blue-800",
  backend: "bg-orange-100 text-orange-800",
  automation: "bg-purple-100 text-purple-800",
  fullstack: "bg-gradient-to-r from-blue-100 to-orange-100 text-gray-800",
}

export type ProjectModel = {
  id: string
  name: string
  projectUrl?: string
  sourceUrl?: string
  shortDescription: string
  description?: string
  imagePreviewUrl: string
  categories: (keyof typeof projectsCategories)[] // Array de categorias
  highlight?: boolean
  // Propriedades específicas para o expandable card
  detailedContent?: () => React.ReactNode
  githubLink?: string
  projectLink?: string
}

export const projectsList: ProjectModel[] = [
  {
    id: "rubnik",
    name: "Rubnik",
    projectUrl: "https://rubnik.com/",
    projectLink: "https://rubnik.com/",
    imagePreviewUrl: "/images/projects/rubnik-thumbnail.png",
    categories: ["frontend", "backend", "fullstack"],
    shortDescription:
      "Rubnik é seu agente de IA multi-modelo que automatiza o WhatsApp com Gemini, OpenAI e mais, para atendimento, vendas e suporte simples, poderoso e acessível.",
    highlight: true,
    detailedContent: () => (
      <p>
        O Rubnik é uma plataforma inovadora que integra os principais modelos de
        Inteligência Artificial do mercado —{" "}
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
        , o Rubnik atua como um verdadeiro parceiro virtual, pronto para escalar
        a comunicação e gerar resultados reais.
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
    ),
  },
  {
    id: "big-lanches",
    name: "Big Lanches",
    projectUrl: "https://big-lanches-msio.vercel.app/",
    projectLink: "https://big-lanches-msio.vercel.app/",
    imagePreviewUrl: "/images/projects/big-lanches-thumbnail.png",
    categories: ["frontend"],
    shortDescription:
      "Big Lanches é uma aplicação real que digitaliza pedidos via cardápio online, calcula a entrega e envia tudo direto pro WhatsApp — simples, rápido e em uso diário pela lanchonete.",
    highlight: true,
    detailedContent: () => (
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
              • Optar pelo pagamento na entrega, mantendo a experiência prática
              e acessível.
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
      </p>
    ),
  },
  {
    id: "transportino",
    name: "Transportino",
    projectUrl: "https://transportino.com",
    projectLink: "https://transportino.com",
    imagePreviewUrl: "/images/projects/easy-aluga.png",
    categories: ["frontend"],
    shortDescription:
      "Plataforma de gestão de transportes e logística com interface moderna e funcionalidades avançadas.",
    highlight: true,
    detailedContent: () => (
      <p>
        O <span className="font-medium">Transportino</span> é uma plataforma
        completa para gestão de transportes e logística, desenvolvida com foco
        na eficiência e usabilidade.
        <div className="py-4">
          <p className="font-medium">🚚 Principais funcionalidades:</p>
          <ol>
            <li>• Gestão completa de frota</li>
            <li>• Rastreamento em tempo real</li>
            <li>• Otimização de rotas</li>
            <li>• Relatórios detalhados</li>
            <li>• Interface responsiva e intuitiva</li>
          </ol>
        </div>
      </p>
    ),
  },
  {
    id: "me-conta-sua-historia",
    name: "Me conta a sua história?",
    projectUrl: "https://the-stone-currency.vercel.app",
    projectLink: "https://the-stone-currency.vercel.app",
    imagePreviewUrl: "/images/projects/stone-currency.png",
    categories: ["frontend"],
    shortDescription:
      "Projeto interativo e educativo sobre histórias e narrativas pessoais.",
    highlight: true,
    detailedContent: () => (
      <p>
        Projeto interativo que convida usuários a compartilhar suas histórias
        pessoais de forma criativa e envolvente.
        <div className="py-4">
          <p className="font-medium">📖 Características:</p>
          <ol>
            <li>• Interface intuitiva para narrativas</li>
            <li>• Design responsivo e acessível</li>
            <li>• Experiência de usuário cuidadosamente planejada</li>
          </ol>
        </div>
      </p>
    ),
  },
  {
    id: "clean-architecture-api",
    name: "Clean Architecture API",
    sourceUrl: "https://github.com/ericknathan/node-clean-architecture",
    githubLink: "https://github.com/ericknathan/node-clean-architecture",
    imagePreviewUrl: "/images/projects/e-survey.png",
    categories: ["backend"],
    shortDescription:
      "API Node.js robusta seguindo princípios de Clean Architecture com autenticação JWT, validação avançada e documentação completa.",
    detailedContent: () => (
      <p>
        Esta API foi desenvolvida seguindo os princípios da{" "}
        <span className="font-medium">Clean Architecture</span>, garantindo alta
        qualidade, testabilidade e manutenibilidade do código.
        <div className="py-4">
          <p className="font-medium">🏗️ Características principais:</p>
          <ol>
            <li>
              • Separação clara entre camadas (Entities, Use Cases, Controllers)
            </li>
            <li>• Testes unitários e de integração com alta cobertura</li>
            <li>• Autenticação JWT segura</li>
            <li>• Validação robusta de dados</li>
            <li>• Documentação OpenAPI/Swagger</li>
            <li>• Tratamento centralizado de erros</li>
          </ol>
        </div>
        <p>
          Ideal para projetos que exigem escalabilidade e arquitetura bem
          estruturada.
        </p>
      </p>
    ),
  },
  {
    id: "autobot-monitor",
    name: "AutoBot Monitor",
    sourceUrl: "https://github.com/user/autobot",
    githubLink: "https://github.com/user/autobot",
    imagePreviewUrl:
      "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=AutoBot",
    categories: ["automation", "backend"],
    shortDescription:
      "Bot de automação Python que monitora APIs, processa dados e envia relatórios automaticamente via email e Slack.",
    detailedContent: () => (
      <p>
        O <span className="font-medium">AutoBot Monitor</span> é uma solução de
        automação desenvolvida em Python para monitoramento contínuo de sistemas
        e APIs.
        <div className="py-4">
          <p className="font-medium">🤖 Funcionalidades:</p>
          <ol>
            <li>• Monitoramento de APIs e serviços web</li>
            <li>• Processamento automático de dados</li>
            <li>• Envio de relatórios por email</li>
            <li>• Integração com Slack para alertas</li>
            <li>• Agendamento de tarefas com Cron</li>
            <li>• Dashboard web para visualização</li>
          </ol>
        </div>
        <p>
          Perfeito para automatizar tarefas repetitivas e manter sistemas sob
          monitoramento constante.
        </p>
      </p>
    ),
  },
  {
    id: "podcastr",
    name: "Podcastr",
    projectUrl: "https://the-podcastr.vercel.app",
    projectLink: "https://the-podcastr.vercel.app",
    sourceUrl: "https://github.com/ericknathan/podcastr",
    githubLink: "https://github.com/ericknathan/podcastr",
    imagePreviewUrl: "/images/projects/podcastr.png",
    categories: ["frontend"],
    shortDescription:
      "Plataforma moderna para reprodução de podcasts com interface elegante e funcionalidades avançadas.",
  },
  {
    id: "devify",
    name: "Devify",
    projectUrl: "https://devify-music.vercel.app",
    projectLink: "https://devify-music.vercel.app",
    sourceUrl: "https://github.com/ericknathan/devify",
    githubLink: "https://github.com/ericknathan/devify",
    imagePreviewUrl: "/images/projects/devify.png",
    categories: ["frontend"],
    shortDescription:
      "Aplicação de música com design inspirado no Spotify, desenvolvida para desenvolvedores.",
  },
  {
    id: "codeleap-network",
    name: "Codeleap Network",
    projectUrl: "https://thecodeleapnetwork.vercel.app",
    projectLink: "https://thecodeleapnetwork.vercel.app",
    sourceUrl: "https://github.com/ericknathan/codeleap-network",
    githubLink: "https://github.com/ericknathan/codeleap-network",
    imagePreviewUrl: "/images/projects/codeleap-network.png",
    categories: ["frontend"],
    shortDescription:
      "Rede social para desenvolvedores compartilharem conhecimento e experiências.",
  },
  {
    id: "igtimer",
    name: "Ig.timer",
    projectUrl: "https://igtimer.vercel.app",
    projectLink: "https://igtimer.vercel.app",
    sourceUrl: "https://github.com/ericknathan/ig.timer",
    githubLink: "https://github.com/ericknathan/ig.timer",
    imagePreviewUrl: "/images/projects/igtimer.png",
    categories: ["frontend"],
    shortDescription:
      "Aplicação de timer pomodoro com design moderno e funcionalidades de produtividade.",
  },
  {
    id: "four-dev",
    name: "4Dev",
    projectUrl: "https://fourdev.vercel.app",
    projectLink: "https://fourdev.vercel.app",
    sourceUrl: "https://github.com/ericknathan/react-clean-architecture",
    githubLink: "https://github.com/ericknathan/react-clean-architecture",
    imagePreviewUrl: "/images/projects/four-dev.png",
    categories: ["frontend"],
    shortDescription:
      "Aplicação React seguindo Clean Architecture para pesquisas e enquetes.",
    highlight: true,
  },
  {
    id: "foodie",
    name: "Foodie",
    projectUrl: "https://ericknathan.github.io/foodie",
    projectLink: "https://ericknathan.github.io/foodie",
    sourceUrl: "https://github.com/ericknathan/foodie",
    githubLink: "https://github.com/ericknathan/foodie",
    imagePreviewUrl: "/images/projects/foodie.png",
    categories: ["frontend"],
    shortDescription:
      "Aplicação para descoberta e avaliação de restaurantes e pratos.",
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    projectUrl: "https://ericknathan.github.io/tic-tac-toe",
    projectLink: "https://ericknathan.github.io/tic-tac-toe",
    sourceUrl: "https://github.com/ericknathan/tic-tac-toe",
    githubLink: "https://github.com/ericknathan/tic-tac-toe",
    imagePreviewUrl: "/images/projects/tic-tac-toe.png",
    categories: ["frontend"],
    shortDescription:
      "Jogo da velha clássico com interface moderna e animações suaves.",
  },
  {
    id: "happy",
    name: "Happy",
    projectUrl: "https://projeto-happy.ericknathan.repl.co/",
    projectLink: "https://projeto-happy.ericknathan.repl.co/",
    sourceUrl: "https://github.com/ericknathan/Projeto-Happy",
    githubLink: "https://github.com/ericknathan/Projeto-Happy",
    imagePreviewUrl: "/images/projects/happy.png",
    categories: ["frontend"],
    shortDescription:
      "Plataforma para conectar pessoas a casas de cuidados infantis.",
  },
  {
    id: "rentx",
    name: "RentX API",
    sourceUrl: "https://github.com/ericknathan/rentx-backend",
    githubLink: "https://github.com/ericknathan/rentx-backend",
    imagePreviewUrl: "/images/projects/rentx.png",
    categories: ["backend"],
    shortDescription:
      "API completa para sistema de aluguel de carros com autenticação e gestão de reservas.",
  },
  {
    id: "nest-rabbitmq",
    name: "NestJS Microservices Example",
    sourceUrl: "https://github.com/ericknathan/nestjs-microservices-example",
    githubLink: "https://github.com/ericknathan/nestjs-microservices-example",
    imagePreviewUrl: "/images/projects/nest-rabbitmq.png",
    categories: ["backend"],
    shortDescription:
      "Exemplo prático de arquitetura de microserviços usando NestJS e RabbitMQ.",
  },
]
