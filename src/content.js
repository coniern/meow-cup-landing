import projectGridImage from "../images/ChatGPT Image 2026年6月8日 12_17_03.png";
import heroImage from "../images/ChatGPT Image 2026年6月8日 12_18_43.png";
import detailImage from "../images/ChatGPT Image 2026年6月8日 12_25_13.png";
import frontImage from "../images/ChatGPT Image 2026年6月7日 16_20_57.png";
import glazeImage from "../images/ChatGPT Image 2026年6月7日 16_22_20.png";
import markImage from "../images/ChatGPT Image 2026年6月7日 16_27_49.png";

export const siteMeta = {
  name: "Tongxue Xiao",
  role: "Full-Stack Developer / AI Application Engineer",
  email: "2325826552@qq.com",
  github: "https://github.com/coniern",
  tagline: "Full-stack systems, AI-facing products, and portfolio-grade execution.",
  intro:
    "I build software from interface to backend, then keep going until the repository, documentation, and product presentation are strong enough to stand on their own.",
};

export const heroContent = {
  stamp: "Portfolio / 2026",
  kicker: "Full-Stack + AI",
  title: ["Build the product.", "Shape the system.", "Package the work."],
  subtitle:
    "My work sits between engineering delivery, interaction design, repository cleanup, and AI application framing. I care about what ships, how it feels, and how clearly it can be understood.",
  tags: [
    "React / Vue",
    "Java / Spring Boot",
    "AI workflow integration",
    "Repository cleanup",
  ],
  mainImage: heroImage,
  sideImage: detailImage,
  sideLabel: "Current Direction",
  sideBody:
    "Portfolio websites, management systems, frontend interaction work, and AI-oriented product positioning.",
};

export const navigationLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const bentoCards = [
  {
    id: "bento-stack",
    eyebrow: "Stack",
    title: "Frontend, backend, and delivery all in one profile.",
    body:
      "I move between interface structure, API design, business workflows, and final repository polish without treating them like separate jobs.",
    style: "large",
  },
  {
    id: "bento-ai",
    eyebrow: "AI",
    title: "AI is handled as product capability, not decoration.",
    body:
      "I focus on how LLM features fit into real user flows: prompt framing, workflow logic, interface placement, and implementation pragmatics.",
    style: "medium",
  },
  {
    id: "bento-craft",
    eyebrow: "Craft",
    title: "Projects should read well before anyone runs them.",
    body:
      "README quality, structure clarity, and code presentation matter. I spend time turning rough repositories into understandable work.",
    style: "medium",
  },
  {
    id: "bento-product",
    eyebrow: "Product",
    title: "I think in user-facing systems, not isolated tasks.",
    body:
      "That means considering hierarchy, interaction rhythm, business flow, and how the whole experience holds together.",
    style: "wide",
  },
];

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "React",
      "Vue 3",
      "Vite",
      "JavaScript",
      "TypeScript",
      "GSAP",
      "Responsive layout",
      "Element Plus",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "JWT",
      "MyBatis Plus",
      "MySQL",
      "Service structure",
    ],
  },
  {
    id: "ai",
    title: "AI / Workflow",
    items: [
      "Prompt design",
      "LLM integration",
      "Workflow automation",
      "Prototype acceleration",
      "AI content systems",
      "Product framing",
    ],
  },
];

export const flowingProjects = [
  {
    id: "flow-meow-cup",
    label: "01",
    title: "Meow Cup Landing",
    meta: "React / GSAP / Campaign Page",
    description:
      "A visual product site reshaped into a portfolio-grade interactive landing page with stronger hierarchy and cleaner code structure.",
    image: heroImage,
    position: "50% 50%",
    repo: "https://github.com/coniern/meow-cup-landing",
  },
  {
    id: "flow-thesis",
    label: "02",
    title: "Thesis Management System",
    meta: "Vue 3 / Spring Boot / Full Stack",
    description:
      "A real workflow-oriented graduation thesis platform spanning admin, teacher, and student roles.",
    image: projectGridImage,
    position: "50% 50%",
    repo: "https://github.com/coniern/Thesis-management-system",
  },
  {
    id: "flow-javaweb",
    label: "03",
    title: "Project Management Platform",
    meta: "Java / Spring Boot / JSP",
    description:
      "A Java project platform prototype used to show controller structure, module grouping, and repository cleanup work.",
    image: frontImage,
    position: "50% 50%",
    repo: "https://github.com/coniern/project-JavaWeb-system",
  },
  {
    id: "flow-ml",
    label: "04",
    title: "Regression Practice",
    meta: "Python / NumPy / ML Basics",
    description:
      "A machine learning fundamentals project rebuilt into a cleaner and more presentable learning repository.",
    image: glazeImage,
    position: "54% 52%",
    repo: "https://github.com/coniern/linear-regression-practice",
  },
];

export const resumeSections = [
  {
    id: "profile",
    title: "Profile",
    lines: [
      "Full-stack developer with AI application interests and strong repository-level engineering discipline.",
      "Comfortable moving across interface work, backend systems, project cleanup, and portfolio presentation.",
    ],
  },
  {
    id: "roles",
    title: "Target Roles",
    lines: [
      "Full-Stack Developer",
      "AI Application Engineer",
      "Frontend Engineer with product focus",
      "Generalist engineer in startup teams",
    ],
  },
  {
    id: "value",
    title: "What I Bring",
    lines: [
      "Cleaner execution than raw prototypes",
      "Better project presentation than typical school repositories",
      "A useful mix of engineering, interface sense, and AI-facing curiosity",
    ],
  },
];

export const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "2325826552@qq.com",
    href: "mailto:2325826552@qq.com",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/coniern",
    href: "https://github.com/coniern",
  },
  {
    id: "resume",
    label: "Resume",
    value: "Chinese resume draft",
    href: "/RESUME_FULLSTACK_AI_CN.md",
  },
];

export const additionalProjects = [
  {
    id: "graduation-modular",
    title: "Graduation Thesis Management System",
    description:
      "A larger modular thesis platform with separated system, notification, document, gateway, and thesis-related modules.",
    repo: "https://github.com/coniern/Graduation-Thesis-Management-System",
    image: projectGridImage,
  },
  {
    id: "ml-practice",
    title: "Linear / Logistic Regression Practice",
    description:
      "NumPy-based machine learning exercises rewritten into clearer and more presentable learning projects.",
    repo: "https://github.com/coniern/linear-regression-practice",
    image: glazeImage,
  },
];

export const galleryCards = [
  {
    id: "gallery-hero",
    title: "Interface craft",
    image: heroImage,
    position: "50% 50%",
    kind: "tall",
  },
  {
    id: "gallery-grid",
    title: "System thinking",
    image: projectGridImage,
    position: "50% 50%",
    kind: "wide",
  },
  {
    id: "gallery-detail",
    title: "Attention to detail",
    image: glazeImage,
    position: "54% 52%",
    kind: "tall",
  },
  {
    id: "gallery-mark",
    title: "Identity sense",
    image: markImage,
    position: "50% 50%",
    kind: "small",
    contain: true,
  },
];
