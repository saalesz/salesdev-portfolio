/* ASSETS */
import TemplateMyService from "../Assets/Projetos/MyserviceTemplate.webp";
import TemplateAlphaDevs from "../Assets/Projetos/AlphadevsTemplate.webp";
import TemplateDropIA from "../Assets/Projetos/DropIATemplate.webp";

export const projectsData = [
  {
    id: 1,
    title: "My Service",
    year: "2023",
    description: "Plataforma web para gerenciamento de serviços. Une uma interface de alta usabilidade a uma arquitetura Front-end moderna, focando na performance e na eficiência do usuário.",
    template: TemplateMyService,
    linkLabel: "Visite o site",
    link: "https://app-myservice.vercel.app",
    ballons: ["Reactjs", "UI/UX Design"],
  },
  {
    id: 2,
    title: "AlphaDev's",
    year: "2025",
    description: "Landing page corporativa focada em conversão. Desenvolvida com componentes reutilizáveis e design minimalista, priorizando uma navegação fluida e foco no mercado tech.",
    template: TemplateAlphaDevs,
    linkLabel: "Visite o site",
    link: "https://alphadevs.vercel.app",
    ballons: ["Reactjs", "UI/UX Design"],
  },
  {
    id: 3,
    title: "DropIA",
    year: "2026",
    description: "Landing page para conscientização e monitoramento do consumo hídrico de IA. Traduz métricas complexas de infraestrutura em dados visuais inteligíveis, gamificados e focados em sustentabilidade.",
    template: TemplateDropIA,
    linkLabel: "Visite o site",
    link: "https://dropia-sooty.vercel.app",
    ballons: ["HTML", "JavaScript", "UI/UX Design"],
  },
];