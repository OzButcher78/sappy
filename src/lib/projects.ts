export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  url?: string;
  category: "web" | "app" | "tool";
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "pdrkalk",
    title: "PDR Kalk",
    subtitle: "Damage Assessment & Invoicing Software",
    description:
      "A desktop application built for PDR technicians to digitalise hail and parking damage estimates, work reports, and invoicing. Features live calculations based on Swiss insurance matrices, batch invoicing, photo integration into PDF reports, address book management, and multi-language support (DE/FR/IT/EN). Fully offline with local data storage — no cloud, no subscription required. Built to save 30–60 minutes per job.",
    image: "/images/pdrkalkapp.jpg",
    tags: ["Desktop App", "PDR", "Invoicing", "Swiss Insurance"],
    year: "2025",
    url: "https://www.pdrkalk.com",
    category: "app",
    featured: true,
  },
  {
    slug: "masterfixpdr",
    title: "MasterFix PDR",
    subtitle: "Professional Dent Repair Platform",
    description:
      "A comprehensive web platform for a professional paintless dent repair service. Built with modern web technologies featuring booking systems, service showcases, and customer management.",
    image: "/images/masterfixpdr.jpg",
    tags: ["Web Development", "Booking System", "CMS"],
    year: "2024",
    url: "https://masterfixpdr.se/",
    category: "web",
    featured: true,
  },
  {
    slug: "mathe-meister",
    title: "Mathe Meister",
    subtitle: "Educational Math App",
    description:
      "An interactive mathematics learning application designed to make math education engaging and accessible. Features adaptive difficulty, progress tracking, and gamified learning experiences.",
    image: "/images/app-mathe-meister.jpg",
    tags: ["Mobile App", "Education", "Gamification"],
    year: "2024",
    url: "https://meister.sappy.ch/",
    category: "app",
    featured: true,
  },
  {
    slug: "retro-game",
    title: "Retro Game",
    subtitle: "Father & Son Arcade Project",
    description:
      "A retro-style browser game built together with my son. Best experienced on tablets or desktop — load it up and jump straight in. A fun side project blending nostalgia with modern web tech.",
    image: "/images/kidapp.jpg",
    tags: ["Game", "Retro", "Browser"],
    year: "2024",
    url: "https://kid.sappy.ch/",
    category: "app",
    featured: true,
  },
  {
    slug: "autoausbeulen",
    title: "Autoausbeulen",
    subtitle: "Auto Body Repair Service",
    description:
      "Digital presence for a premium auto body repair service specializing in paintless dent removal. Features before/after galleries, online quoting, and service area coverage.",
    image: "/images/autoausbeulen.jpg",
    tags: ["Web Design", "Service Business", "SEO"],
    year: "2023",
    url: "https://autoausbeulen.ch",
    category: "web",
    featured: true,
  },
  {
    slug: "clever-ausbeulen",
    title: "Clever-Ausbeulen",
    subtitle: "Paintless Dent Repair Service",
    description:
      "Professional web presence for a paintless dent repair specialist. Showcasing services, expertise, and customer results with a clean, conversion-focused design.",
    image: "/images/clever.jpg",
    tags: ["Web Design", "Service Business", "PDR"],
    year: "2024",
    url: "https://cleverausbeulen.ch/",
    category: "web",
    featured: true,
  },
  {
    slug: "dentag",
    title: "Dentagon PDR Australia",
    subtitle: "Australian PDR Website",
    description:
      "Professional web platform for an Australian paintless dent repair service. Features service showcases, booking integration, and regional targeting for the Australian market.",
    image: "/images/dentag.jpg",
    tags: ["Web Design", "PDR", "International"],
    year: "2023",
    url: "https://www.dentag.com.au/",
    category: "web",
    featured: false,
  },
  {
    slug: "sciuto",
    title: "Sciuto Drücktechnik",
    subtitle: "Swiss PDR Specialist",
    description:
      "Professional web presence for a Swiss paintless dent repair specialist. Clean, modern design showcasing expert craftsmanship and precision repair services.",
    image: "/images/sciuto.jpg",
    tags: ["Web Design", "PDR", "Swiss"],
    year: "2023",
    url: "https://sciuto-drücktechnik.ch/",
    category: "web",
    featured: false,
  },
  {
    slug: "straehl",
    title: "Strähl Drücktechnik",
    subtitle: "Swiss PDR Specialist",
    description:
      "Corporate website for a Swiss paintless dent repair specialist. Modern aesthetics with clear communication of services and conversion optimization.",
    image: "/images/straehl.jpg",
    tags: ["Corporate", "Web Design", "PDR"],
    year: "2023",
    url: "https://www.straehl-druecktechnik.ch/",
    category: "web",
    featured: false,
  },
  {
    slug: "iasre",
    title: "IASRE Germany",
    subtitle: "The Biggest PDR Expo in EU",
    description:
      "Web platform for Europe's largest paintless dent repair expo and trade show. Multi-language support with event management, exhibitor showcases, and registration features.",
    image: "/images/iasre.jpg",
    tags: ["Events", "Multi-language", "PDR"],
    year: "2023",
    url: "https://www.iasre.com/",
    category: "web",
    featured: false,
  },
  {
    slug: "iasre-japan",
    title: "IASRE Japan",
    subtitle: "Japanese PDR Expo",
    description:
      "Web platform for the Japanese edition of the international PDR expo. Featuring bilingual content, event schedules, and exhibitor management for the Asian market.",
    image: "/images/iasre-japan.jpg",
    tags: ["Events", "International", "PDR"],
    year: "2023",
    url: "https://www.iasre-japan.com/",
    category: "web",
    featured: false,
  },
  {
    slug: "pdrtools",
    title: "Swiss PDR Tools",
    subtitle: "E-Commerce Platform",
    description:
      "Specialized e-commerce platform for paintless dent repair tools and equipment. Features product catalog, secure checkout, and inventory management.",
    image: "/images/pdrtools.jpg",
    tags: ["E-Commerce", "Inventory", "Payments"],
    year: "2023",
    url: "https://www.pdrtools.com/",
    category: "tool",
    featured: false,
  },
  {
    slug: "homehuahin",
    title: "Home Hua Hin",
    subtitle: "Luxury Property Showcase",
    description:
      "An elegant single-property website for a luxury two-residence tropical estate in Hua Hin, Thailand. Features a cinematic hero section, property gallery, location guide, and booking inquiry system — designed to sell privacy, space, and lifestyle.",
    image: "/images/homehuahin.jpg",
    tags: ["Real Estate", "Web Design", "International"],
    year: "2025",
    url: "https://www.homehuahin.com/",
    category: "web",
    featured: false,
  },
  {
    slug: "whatdents",
    title: "What Dents?",
    subtitle: "Damage Assessment Tool",
    description:
      "An AI-powered damage assessment tool for automotive dent analysis. Upload photos and receive instant repair estimates.",
    image: "/images/whatdents.jpg",
    tags: ["AI", "Assessment", "Automotive"],
    year: "2024",
    url: "https://www.whatdents.co.uk/",
    category: "web",
    featured: true,
  },
  {
    slug: "erna",
    title: "ERNA",
    subtitle: "Professional Drycleaning",
    description:
      "Professional web presence for a dry cleaning service. Clean, modern design with service information, pricing, and location details.",
    image: "/images/erna.jpg",
    tags: ["Web Design", "Service Business", "Local"],
    year: "2022",
    url: "https://www.erna.hr/",
    category: "web",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
