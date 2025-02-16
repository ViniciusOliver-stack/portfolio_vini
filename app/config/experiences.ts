type ExperienceDate = `${number}-${number}-${number}`;
export type ExperienceModel = {
  company: string;
  role?: string;
  startDate: ExperienceDate;
  endDate?: ExperienceDate;
  image: string;
  type: "work" | "educational";
  highlight?: boolean;
};

export const experiencesList: ExperienceModel[] = [
  {
    company: "Melius Software",
    role: "Assistente Desenvolvedor Pleno",
    startDate: "2024-08-01",
    image: "/images/experiences/melius.jpg",
    type: "work",
    highlight: true,
  },
  {
    company: "Meu IOT",
    role: "Desenvolvedor Front-end",
    startDate: "2023-10-01",
    endDate: "2024-04-01",
    image: "/images/experiences/meu-iot.svg",
    type: "work",
  },
  {
    company: "Symplus",
    role: "Desenvolvedor Fullstack",
    startDate: "2022-06-01",
    endDate: "2024-03-01",
    image: "/images/experiences/pagtel.png",
    type: "work",
  },
  {
    company: "Senai",
    startDate: "2021-01-01",
    endDate: "2022-06-30",
    image: "/images/experiences/senai.png",
    type: "educational",
  },
  {
    company: "FIAP",
    startDate: "2023-01-01",
    image: "/images/experiences/fiap.png",
    type: "educational",
  },
  {
    company: "Rocketseat",
    startDate: "2021-11-01",
    endDate: "2022-11-01",
    image: "/images/experiences/rocketseat.png",
    type: "educational",
  },
];