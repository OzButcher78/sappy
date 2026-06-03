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
        title: "Webentwicklung / IT-Support",
        description:
          "Individuell gestaltete, hochperformante Websites — responsiv, schnell und handwerklich perfekt. Die elegante 1-Seiten-Website mit Markendesign, Animationen, Formularen sowie Impressum & Datenschutz gibt es ab CHF 2'000. Kleine mehrseitige Websites ab CHF 3'000. Grosse Websites mit Shop, Zahlungssystemen, Mehrsprachigkeit und individuellen Plugins ab CHF 5'000. Dazu zuverlässiger IT-Support — Hosting, E-Mail-Einrichtung, Wartung und Fehlerbehebung ab CHF 120/Stunde.",
        capabilities: [
          "1-Seite: ab CHF 2'000",
          "Mehrseitig: ab CHF 3'000",
          "Mit Shop: ab CHF 5'000",
          "Hosting & Wartung",
          "IT-Support: ab CHF 120/h",
        ],
      },
      {
        number: "02",
        title: "Applikationen",
        description:
          "Design und Entwicklung massgeschneiderter Anwendungen und Plugins, die Geschäftsprozesse automatisieren und Arbeitsabläufe verbessern. Vom Konzept bis zur Bereitstellung — wir bauen Werkzeuge, die zu Ihrem Unternehmen passen. Einfache Apps & Plugins ab CHF 3'000, massgeschneiderte Anwendungen ab CHF 8'000.",
        capabilities: [
          "WordPress Plugins",
          "E-Comm Plugins",
          "Web-Apps",
          "Lokale Offline-Apps",
        ],
      },
      {
        number: "03",
        title: "KI & Automatisierung",
        description:
          "Heute kommt kaum eine Dienstleistung ohne KI aus — und wer weiss, wie man sie richtig einsetzt, verschafft sich einen echten Vorsprung. Ich habe ein natürliches Gespür für KI-Systeme und arbeite versiert mit den führenden Modellen — insbesondere OpenAI und Anthropic. Ich verbinde KI über API-Schnittstellen mit Websites, Apps und Datenbanken, automatisiere wiederkehrende Abläufe und mache Ihre Projekte so schneller und intelligenter — von KI-Funktionen wie Bildanalyse und Chatbots bis hin zu massgeschneiderter Automatisierung und Integration.",
        capabilities: [
          "OpenAI",
          "Anthropic",
          "API-Integration",
          "Automatisierung",
          "KI-Funktionen",
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
      "Ich bin Dieter Balmer — Schweizer Unternehmer, Auto-Enthusiast und Erfinder aus Leidenschaft, der seit 1987 programmiert.",
    paragraph1:
      "Angefangen hat alles 1987 an einem der ersten IBM-PCs. Mit zehn Jahren brachte ich mir das Programmieren selbst bei — neugierig genug, dass mein Vater mir bald Privatunterricht ermöglichte — und später lernte ich Informatik und Programmieren in der Schule. Mitte der 1990er-Jahre steckte ich tief in Bulletin Boards und IRC-Kanälen — mit siebzehn betreute ich einen grossen, aktiven IRC-Kanal in Perth, Australien — und als das Internet aufkam, war ich von Anfang an vorne mit dabei und baute Websites von Hand in reinem HTML. Mit den sich ständig wandelnden Standards des Webs entwickle ich mich seither weiter.",
    paragraph2:
      "Seit 1998 führe ich mehrere eigene Unternehmen — ich entwerfe und fertige professionelle PDR-Werkzeuge und Zubehör für die Autobranche und verkaufe sowohl digitale Designs als auch fertige Produkte an Kunden weltweit. Daneben entwickle ich laufend innovative digitale Anwendungen, Webplattformen und Software.",
    paragraph3:
      "Wo andere verschiedene Welten sehen — Technik, Werkstatt, Web — sehe ich denselben Antrieb: Präzision, Problemlösung und das Streben nach einem makellosen Ergebnis.",
    coreTechnologies: "Kerntechnologien",
    stats: [
      { value: "87+", label: "Projekte realisiert" },
      { value: "30+", label: "Jahre Erfahrung" },
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
    categories: { all: "alle", web: "web", app: "app" },
  },

  projectDetail: {
    notFound: "Projekt nicht gefunden",
    backToHome: "Zurück zur Startseite",
    back: "Zurück",
    keyFeatures: "Funktionen & Highlights",
    year: "Jahr",
    category: "Kategorie",
    status: "Status",
    live: "Live",
    private: "Privat",
    privateNote: "Diese App ist derzeit privat und nicht öffentlich zugänglich — auf Anfrage verfügbar.",
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
