import type { Translations } from "./types";

const en: Translations = {
  nav: {
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    letsTalk: "Let's Talk",
  },

  hero: {
    titleLine1: "Digital",
    titleLine2: "Craftsmanship",
    subtitle:
      "Digital portfolio of an IT enthusiast — from web design and web apps to CAD modelling and 3D printing projects.",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
    scroll: "Scroll",
  },

  featuredProjects: {
    sectionNumber: "01",
    sectionLabel: "Selected Work",
    heading: "Featured Projects",
    description:
      "A curated selection of digital products and experiences, each crafted with precision and purpose.",
    viewAllProjects: "View All Projects",
    viewLive: "View Live",
    viewProject: "View Project",
  },

  services: {
    sectionNumber: "02",
    sectionLabel: "What I Do",
    heading: "Services",
    description:
      "End-to-end digital solutions — from initial concept to deployed product, with Swiss precision at every step.",
    items: [
      {
        number: "01",
        title: "Web Development",
        description:
          "High-performance websites, custom-built with modern frameworks. From corporate sites to complex platforms — responsive, fast, and beautifully crafted. Stand out! Prices starting from 2,000 EUR.",
        capabilities: [
          "E-Commerce",
          "Events",
          "AI Integration",
          "Responsive",
          "State of the Art",
        ],
      },
      {
        number: "02",
        title: "Applications",
        description:
          "Design and development of custom applications and plugins that automate and streamline business processes and improve workflow. From concept to deployment, we build tools that work the way your business does.",
        capabilities: [
          "WordPress Plugins",
          "E-Comm Plugins",
          "Web Apps",
          "Local Offline Apps",
        ],
      },
      {
        number: "03",
        title: "IT Support",
        description:
          "Reliable technical support covering web hosting, email setup, and PC setup and troubleshooting. Ongoing maintenance and updates for commercial websites. Starting prices from 100 CHF/hour.",
        capabilities: [
          "Web Hosting",
          "Web Setup & Maintenance",
          "Computer Support & Troubleshooting",
        ],
      },
      {
        number: "04",
        title: "Design & Prototyping",
        description:
          "Bring ideas to life using CAD software to create precision 3D models and produce rapid prototypes with state-of-the-art 3D printing machines. From concept to physical product, fast.",
        capabilities: [
          "Autodesk",
          "Fusion 360",
          "CAD",
          "3D Printing",
          "Prototyping",
        ],
      },
    ],
  },

  about: {
    sectionNumber: "03",
    sectionLabel: "About",
    heading: "The Craftsman",
    quote:
      "An enthusiast sees possibility where others see complexity.",
    intro:
      "I'm Dieter Balmer — Swiss entrepreneur, automotive enthusiast, and self-taught developer since 1988.",
    paragraph1:
      "I taught myself to code in BASIC at the age of 10. That early curiosity evolved into a lifelong passion for building things — from digital products and web platforms to hands-on craftsmanship in the automotive world.",
    paragraph2:
      "Today I run my own businesses as a specialist in Paintless Dent Repair (PDR) and as a designer and manufacturer of professional PDR tools and accessories — sold to technicians around the world. Alongside that, I continue to design and develop software, apps, and digital experiences. Where others see different worlds, I see the same drive — precision, problem-solving, and the pursuit of a flawless finish.",
    coreTechnologies: "Core Technologies",
    stats: [
      { value: "50+", label: "Projects Delivered" },
      { value: "8+", label: "Years Experience" },
      { value: "100%", label: "Swiss Quality" },
    ],
  },

  contact: {
    sectionNumber: "04",
    sectionLabel: "Contact",
    headingLine1: "Let's build",
    headingLine2: "something great.",
    description:
      "Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your digital vision to life.",
    startConversation: "Start a Conversation",
    sayHello: "Say Hello",
    location: "Location",
    switzerland: "Switzerland",
    availableWorldwide: "Available worldwide",
    email: "Email",
    getInTouchArrow: "Get in Touch",
    website: "Website",
  },

  footer: {
    madeIn: "Made in",
    switzerland: "Switzerland",
    allRightsReserved: "All rights reserved.",
  },

  projectsPage: {
    back: "Back",
    sectionLabel: "Archive",
    projectCount: "Projects",
    heading: "All Projects",
    description:
      "A complete collection of digital products, websites, and experiences — each built with care and attention to detail.",
    noProjects: "No projects in this category yet.",
    viewLive: "View Live",
    viewDetails: "View Details",
    categories: { all: "all", web: "web", app: "app", tool: "tool" },
  },

  projectDetail: {
    notFound: "Project Not Found",
    backToHome: "Back to Home",
    back: "Back",
    year: "Year",
    category: "Category",
    status: "Status",
    live: "Live",
    visitLive: "Visit Live Project",
    nextProject: "Next Project",
  },
};

export default en;
