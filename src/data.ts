export const personalInfo = {
  name: "Marcus Vinicius Silva Conceição",
  role: "Fullstack Software Engineer",
  about: "Desenvolvedor Full Stack especializado na modernização de sistemas legados, arquiteturas baseadas em Microservices e orquestração de containers. Foco contínuo em soluções escaláveis com Java e Angular.",
  location: "Salvador, BA",
  phone: "(71) 99302-0123",
  email: "marcusvinconceicao@gmail.com",
  github: "https://github.com/ItsAMeMarcus",
  linkedin: "https://linkedin.com/in/marcus-vinicius-silva-conceicao",
};

export const skills = {
  backend: ["Java 17+", "Spring Boot", "Python", "FastAPI", "Django", "Node.js", "Microservices"],
  frontend: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vue.js", "React.js"],
  dataCloud: ["SQL", "PostgreSQL", "AWS (S3, EC2)", "Docker", "Kubernetes", "MongoDB"],
  toolsDevOps: ["Git", "GitLab CI", "Jenkins", "Linux", "Kafka", "n8n"],
};

export const experience = [
  {
    company: "AyaBese",
    role: "Desenvolvedor Full Stack",
    period: "02/2026 - Presente",
    location: "Salvador, BA",
    description: [
      "Modernização de sistemas para clientes iterando com Python (Django) e Vue.js, garantindo alto nível de UX.",
      "Engenharia de backend e integrações complexas via APIs REST com serviços de IA (nuvem e self-hosted).",
      "Estudos de viabilidade técnica e arquitetural, equilibrando performance e budget."
    ],
    tech: ["Python", "Vue.js", "APIs REST", "IAaaS"]
  },
  {
    company: "Serpro",
    role: "Desenvolvedor Full Stack Estagiário",
    period: "03/2024 - 03/2026",
    location: "Salvador, BA",
    description: [
      "Desenvolvimento de sistemas governamentais críticos utilizando Java (Spring Boot/Quarkus) e Angular.",
      "Refatoração de interfaces complexas com TypeScript e Angular Material, cortando tempo médio de operação.",
      "Modelagem de dados e versionamento de schemas rigorosos em PostgreSQL.",
      "Engenharia reversa e sustentação de legados acoplados, aplicando Clean Code e S.O.L.I.D."
    ],
    tech: ["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "Docker"]
  },
  {
    company: "Bisnez",
    role: "Desenvolvedor Mobile e Backend",
    period: "03/2022 - 11/2022",
    location: "Salvador, BA",
    description: [
      "Construção de APIs REST performáticas em Node.js/Express para fluxo contínuo de dados em tempo real.",
      "Implementação de um motor de Deep Linking robusto com Firebase, vitalizando o marketing orgânico.",
      "Centralização inteligente de push notifications no backend, isolando as lógicas pesadas do app Flutter."
    ],
    tech: ["Node.js", "Express", "Firebase", "Flutter"]
  }
];

export const education = {
  institution: "IFBA - Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
  degree: "Análise e Desenvolvimento de Sistemas",
  period: "02/2026",
  location: "Salvador, BA",
  description: "Foco profundo em Engenharia de Software, Estrutura de Dados, Microservices e Sistemas Distribuídos."
};

export const projects = [
  {
    title: "Watch Party",
    description: "Plataforma interativa para consumo simultâneo de mídia com amigos. Focada em sincronização em tempo real de vídeos, sistema de chat integrado e salas privadas.",
    technologies: ["JavaScript", "Sockets", "Node.js"],
    link: "https://github.com/ItsAMeMarcus/watch-party",
    year: "2024",
    featured: true,
  },
  {
    title: "VibeSearchEngine",
    description: "Motor primário de busca baseado em sentimentos e tags contextuais, extraindo resultados que correspondem de forma semântica à métrica da 'vibe' do usuário.",
    technologies: ["Python", "FastAPI", "Machine Learning"],
    link: "https://github.com/ItsAMeMarcus/VibeSearchEngine",
    year: "2024",
    featured: true,
  },
  {
    title: "Mecanismo de Busca Acadêmico com IA",
    description: "Backend complexo para extração profunda (Crawlers/ETL) e busca semântica em PDFs acadêmicos. Orquestração de agentes independentes utilizando o framework CrewAI.",
    technologies: ["Python", "FastAPI", "CrewAI", "Qdrant", "Docker"],
    link: "https://github.com/ItsAMeMarcus/TrabalhoConclusaoCurso",
    year: "2026",
    featured: true,
    imagePlaceholder: "TCC Presentation"
  },
  {
    title: "API Spring Boot",
    description: "Implementação robusta de API RESTful utilizando o ecossistema Spring. Focada em boas práticas, injeção de dependências e segurança para microsserviços.",
    technologies: ["Java", "Spring Boot", "REST", "JPA"],
    link: "https://github.com/ItsAMeMarcus/SpringBoot",
    year: "2023",
    featured: false
  },
  {
    title: "Angular Buzzfeed Clone",
    description: "Clone interativo e responsivo da plataforma Buzzfeed feito em Angular. Demonstra o uso avançado de components dinâmicos, rotas stateful e design system.",
    technologies: ["Angular", "TypeScript", "SCSS", "HTML5"],
    link: "https://github.com/ItsAMeMarcus/angular-buzzfeed",
    year: "2024",
    featured: false
  }
];
