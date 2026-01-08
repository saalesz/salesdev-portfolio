/* ASSETS */
import LogoMyService from "../Assets/Projetos/My Service/Icon.svg";
import TemplateMyService from "../Assets/Projetos/My Service/Template.png";
import LogoAlphaDevs from "../Assets/Projetos/AlphaDevs/Icon.svg";
import TemplateAlphaDevs from "../Assets/Projetos/AlphaDevs/Template.png";

export const projectsData = [
  {
    id: 1,
    title: "My Service",
    bgColor: "#0E6AC7",
    description: "TCC de Front-End e UI/UX focado em usabilidade e tecnologias web modernas.",
    logo: LogoMyService,
    template: TemplateMyService,
    linkLabel: "Visite o site",
    link: "https://app-myservice.vercel.app",
  },
  {
    id: 2,
    title: "AlphaDev's",
    bgColor: "#FA75F8",
    description: "Simulação empresarial: Front-End e UI/UX com foco prático no mercado.",
    logo: LogoAlphaDevs,
    template: TemplateAlphaDevs,
    linkLabel: "Visite o site",
    link: "https://app-myservice.vercel.app",
  },
  {
    id: 3,
    title: "Links Page",
    bgColor: "#003fff",
    description: "Página de links com foco em organização e experiência do usuário (UX).",
    logo: LogoAlphaDevs, // Exemplo reutilizando
    template: TemplateAlphaDevs,
    linkLabel: "Ver Repositório",
    link: "https://github.com",
  },
];