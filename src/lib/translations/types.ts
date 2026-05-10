export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}

export interface Translations {
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    letsTalk: string;
  };

  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    viewWork: string;
    getInTouch: string;
    scroll: string;
  };

  featuredProjects: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    description: string;
    viewAllProjects: string;
    viewLive: string;
    viewProject: string;
  };

  services: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    description: string;
    items: ServiceItem[];
  };

  about: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    quote: string;
    intro: string;
    paragraph1: string;
    paragraph2: string;
    coreTechnologies: string;
    stats: StatItem[];
  };

  contact: {
    sectionNumber: string;
    sectionLabel: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    startConversation: string;
    sayHello: string;
    location: string;
    switzerland: string;
    availableWorldwide: string;
    email: string;
    getInTouchArrow: string;
    website: string;
  };

  footer: {
    madeIn: string;
    switzerland: string;
    allRightsReserved: string;
  };

  projectsPage: {
    back: string;
    sectionLabel: string;
    projectCount: string;
    heading: string;
    description: string;
    noProjects: string;
    viewLive: string;
    viewDetails: string;
    categories: {
      all: string;
      web: string;
      app: string;
      tool: string;
    };
  };

  projectDetail: {
    notFound: string;
    backToHome: string;
    back: string;
    year: string;
    category: string;
    status: string;
    live: string;
    private: string;
    privateNote: string;
    visitLive: string;
    nextProject: string;
    screenshots: string;
    expand: string;
    close: string;
    previous: string;
    next: string;
  };
}
