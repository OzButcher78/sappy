import type { Translations } from "./types";

const de: Translations = {
  nav: {
    work: "Projekte",
    services: "Leistungen",
    about: "Über mich",
    contact: "Kontakt",
    letsTalk: "Kontakt",
  },

  hero: {
    titleLine1: "Digitale",
    titleLine2: "Handwerkskunst",
    subtitle:
      "Digitales Portfolio eines IT-Enthusiasten — von Webdesign und Web-Apps bis hin zu CAD-Modellierung und 3D-Druck-Projekten.",
    viewWork: "Projekte ansehen",
    getInTouch: "Kontakt aufnehmen",
    scroll: "Scrollen",
  },

  featuredProjects: {
    sectionNumber: "01",
    sectionLabel: "Ausgewählte Arbeiten",
    heading: "Ausgewählte Projekte",
    description:
      "Eine kuratierte Auswahl digitaler Produkte und Erlebnisse — jedes mit Präzision und Sorgfalt entwickelt.",
    viewAllProjects: "Alle Projekte anzeigen",
    viewLive: "Live ansehen",
    viewProject: "Projekt ansehen",
  },

  services: {
    sectionNumber: "02",
    sectionLabel: "Was ich mache",
    heading: "Leistungen",
    description:
      "Ganzheitliche digitale Lösungen — vom ersten Konzept bis zum fertigen Produkt, mit Schweizer Präzision in jedem Schritt.",
    items: [
      {
        number: "01",
        title: "Webentwicklung",
        description:
          "Hochperformante Websites, massgeschneidert mit modernen Frameworks. Von Firmenwebseiten bis zu komplexen Plattformen — responsiv, schnell und handwerklich perfekt umgesetzt. Heben Sie sich ab! Preise ab 2'000 EUR.",
        capabilities: [
          "E-Commerce",
          "Events",
          "KI-Integration",
          "Responsiv",
          "Modernste Technik",
        ],
      },
      {
        number: "02",
        title: "Applikationen",
        description:
          "Design und Entwicklung massgeschneiderter Anwendungen und Plugins, die Geschäftsprozesse automatisieren und Arbeitsabläufe verbessern. Vom Konzept bis zur Bereitstellung — wir bauen Werkzeuge, die zu Ihrem Unternehmen passen.",
        capabilities: [
          "WordPress Plugins",
          "E-Comm Plugins",
          "Web-Apps",
          "Lokale Offline-Apps",
        ],
      },
      {
        number: "03",
        title: "IT-Support",
        description:
          "Zuverlässiger technischer Support für Webhosting, E-Mail-Einrichtung sowie PC-Setup und Fehlerbehebung. Laufende Wartung und Updates für kommerzielle Websites. Preise ab 100 CHF/Stunde.",
        capabilities: [
          "Webhosting",
          "Web-Einrichtung & Wartung",
          "Computer-Support & Fehlerbehebung",
        ],
      },
      {
        number: "04",
        title: "Design & Prototyping",
        description:
          "Ideen zum Leben erwecken mit CAD-Software für präzise 3D-Modelle und schnelle Prototypenfertigung mit modernsten 3D-Druckern. Vom Konzept zum physischen Produkt, schnell und effizient.",
        capabilities: [
          "Autodesk",
          "Fusion 360",
          "CAD",
          "3D-Druck",
          "Prototyping",
        ],
      },
    ],
  },

  about: {
    sectionNumber: "03",
    sectionLabel: "Über mich",
    heading: "Der Handwerker",
    quote:
      "Ein Enthusiast sieht Möglichkeiten, wo andere Komplexität sehen.",
    intro:
      "Ich bin Dieter Balmer — Schweizer Unternehmer, Auto-Enthusiast und Autodidakt im Programmieren seit 1988.",
    paragraph1:
      "Mit 10 Jahren habe ich mir selbst das Programmieren in BASIC beigebracht. Diese frühe Neugier entwickelte sich zu einer lebenslangen Leidenschaft für das Erschaffen — von digitalen Produkten und Webplattformen bis hin zu handwerklicher Arbeit in der Automobilwelt.",
    paragraph2:
      "Heute führe ich meine eigenen Unternehmen als Spezialist für lackschadenfreie Dellenreparatur (PDR) und als Designer und Hersteller professioneller PDR-Werkzeuge und Zubehör — verkauft an Techniker weltweit. Daneben entwerfe und entwickle ich weiterhin Software, Apps und digitale Erlebnisse. Wo andere verschiedene Welten sehen, sehe ich denselben Antrieb — Präzision, Problemlösung und das Streben nach einem makellosen Ergebnis.",
    coreTechnologies: "Kerntechnologien",
    stats: [
      { value: "50+", label: "Projekte realisiert" },
      { value: "8+", label: "Jahre Erfahrung" },
      { value: "100%", label: "Schweizer Qualität" },
    ],
  },

  contact: {
    sectionNumber: "04",
    sectionLabel: "Kontakt",
    headingLine1: "Lassen Sie uns",
    headingLine2: "etwas Grossartiges bauen.",
    description:
      "Sie haben ein Projekt im Sinn? Ich freue mich darauf, davon zu hören. Lassen Sie uns besprechen, wie wir Ihre digitale Vision verwirklichen können.",
    startConversation: "Gespräch starten",
    sayHello: "Hallo sagen",
    location: "Standort",
    switzerland: "Schweiz",
    availableWorldwide: "Weltweit verfügbar",
    email: "E-Mail",
    getInTouchArrow: "Kontakt aufnehmen",
    website: "Webseite",
  },

  footer: {
    madeIn: "Hergestellt in der",
    switzerland: "Schweiz",
    allRightsReserved: "Alle Rechte vorbehalten.",
  },

  projectsPage: {
    back: "Zurück",
    sectionLabel: "Archiv",
    projectCount: "Projekte",
    heading: "Alle Projekte",
    description:
      "Eine vollständige Sammlung digitaler Produkte, Websites und Erlebnisse — jedes mit Sorgfalt und Liebe zum Detail entwickelt.",
    noProjects: "Noch keine Projekte in dieser Kategorie.",
    viewLive: "Live ansehen",
    viewDetails: "Details ansehen",
    categories: { all: "alle", web: "web", app: "app", tool: "tool" },
  },

  projectDetail: {
    notFound: "Projekt nicht gefunden",
    backToHome: "Zurück zur Startseite",
    back: "Zurück",
    year: "Jahr",
    category: "Kategorie",
    status: "Status",
    live: "Live",
    private: "Privat",
    privateNote: "Diese App ist derzeit privat und nicht öffentlich zugänglich.",
    visitLive: "Live-Projekt besuchen",
    nextProject: "Nächstes Projekt",
    screenshots: "Screenshots",
    expand: "Vergrössern",
    close: "Schliessen",
    previous: "Vorheriges Bild",
    next: "Nächstes Bild",
  },
};

export default de;
