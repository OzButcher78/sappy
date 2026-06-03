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
        title: "Web Development / IT Support",
        description:
          "Custom-built, high-performance websites — responsive, fast and beautifully crafted. The elegant one-page site with brand design, animations, forms plus legal pages starts at CHF 2,000. Small multi-page sites from CHF 3,000. Large websites with shop, payment systems, multiple languages and custom plugins from CHF 5,000. Plus reliable ongoing IT support — hosting, email setup, maintenance and troubleshooting from CHF 120/hour.",
        capabilities: [
          "1 page: from CHF 2,000",
          "Multi-page: from CHF 3,000",
          "With shop: from CHF 5,000",
          "Hosting & Maintenance",
          "IT Support: from CHF 120/h",
        ],
      },
      {
        number: "02",
        title: "Applications",
        description:
          "Design and development of custom applications and plugins that automate and streamline business processes and improve workflow. From concept to deployment, we build tools that work the way your business does. Simple apps & plugins from CHF 3,000; custom applications from CHF 8,000.",
        capabilities: [
          "WordPress Plugins",
          "E-Comm Plugins",
          "Web Apps",
          "Local Offline Apps",
        ],
      },
      {
        number: "03",
        title: "AI & Automation",
        description:
          "These days, what service doesn't touch AI? Knowing how to implement it well is what gives you a real edge. I have a natural feel for AI systems and work fluently with today's leading models — OpenAI and Anthropic in particular. I connect AI to websites, apps and databases via API, automate repetitive workflows, and use it to make your projects faster and smarter — from AI-powered features like photo analysis and chatbots to bespoke automation and integration.",
        capabilities: [
          "OpenAI",
          "Anthropic",
          "API Integration",
          "Automation",
          "AI-Powered Features",
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
      "I'm Dieter Balmer — Swiss entrepreneur, automotive enthusiast, and an inventor at heart who has been writing code since 1987.",
    paragraph1:
      "It started on one of the first IBM PCs in 1987. I taught myself to program at the age of ten — curious enough that my father soon arranged private lessons — and later studied computer science and programming in high school. By the mid-1990s I was deep in bulletin boards and IRC channels — at seventeen I was running a large, active IRC channel in Perth, Australia — and as the internet began to emerge, I was right at the forefront, building websites by hand in plain HTML. I've kept adapting to the web's ever-changing standards ever since.",
    paragraph2:
      "Since 1998 I've run several of my own businesses — designing and manufacturing professional PDR tools and accessories for the automotive trade, and selling both digital designs and finished products to customers worldwide. Alongside that I keep building innovative digital applications, web platforms, and software.",
    paragraph3:
      "Where others see different worlds — engineering, the workshop, the web — I see the same drive: precision, problem-solving, and the pursuit of a flawless finish.",
    coreTechnologies: "Skills & Tools",
    stats: [
      { value: "87+", label: "Projects Delivered" },
      { value: "30+", label: "Years Experience" },
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
    categories: { all: "all", web: "web", app: "app" },
  },

  projectDetail: {
    notFound: "Project Not Found",
    backToHome: "Back to Home",
    back: "Back",
    keyFeatures: "Key Features",
    year: "Year",
    category: "Category",
    status: "Status",
    live: "Live",
    private: "Private",
    privateNote: "This app is currently private and not publicly accessible — available on request.",
    visitLive: "Visit Live Project",
    nextProject: "Next Project",
    screenshots: "Screenshots",
    expand: "Expand",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
  },
};

export default en;
