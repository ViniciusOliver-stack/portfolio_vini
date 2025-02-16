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
    startDate: "2023-10-01",
    image: "/images/experiences/melius.jpg",
    type: "work",
    highlight: true,
  },
  {
    company: "Meu IOT",
    role: "Desenvolvedor Front-end",
    startDate: "2023-04-01",
    endDate: "2023-11-01",
    image: "/images/experiences/meu-iot.svg",
    type: "work",
  },
  {
    company: "Rubnik",
    role: "CEO | Desenvolvedor Fullstack",
    startDate: "2024-08-01",
    image: "/images/experiences/rubnik.svg",
    type: "work",
  },
  {
    company: "Alura",
    startDate: "2021-01-01",
    endDate: "2022-06-30",
    image: "/images/experiences/alura.png",
    type: "educational",
  },
  {
    company: "UNIFCAS - Universidade de Salvador",
    startDate: "2020-03-01",
    endDate: "2024-03-01",
    image: "/images/experiences/unifacs.jpg",
    type: "educational",
  },
  {
    company: "Rocketseat",
    startDate: "2022-06-01",
    endDate: "2024-01-01",
    image: "/images/experiences/rocketseat.jpg",
    type: "educational",
  },
];