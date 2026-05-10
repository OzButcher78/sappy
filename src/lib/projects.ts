export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  subtitleDe?: string;
  description: string;
  descriptionDe?: string;
  image: string;
  screenshots?: string[];
  tags: string[];
  tagsDe?: string[];
  year: string;
  url?: string;
  status?: "private";
  category: "web" | "app" | "tool";
  featured: boolean;
}

export const projects: Project[] = [
  // === Featured (in display order) ===
  {
    slug: "keto-coach",
    title: "Keto Coach",
    subtitle: "AI-Powered Keto Diet Companion",
    subtitleDe: "KI-gestützter Begleiter für die Keto-Diät",
    description:
      "A personal web app — desktop and mobile — built to make starting and sticking to a Keto diet effortless. Snap a photo of any meal and Keto Coach instantly tells you whether it fits the diet, what to avoid, and the macro breakdown — all contextualized against your daily targets. Get tailored breakfast, lunch, dinner, or snack ideas based on what's left in your fridge and your remaining macro headroom. Log meals with auto-estimated calories, net carbs, protein, and fat, then track gains, achievements, and weekly progress. When the scale stalls, the 'Diagnose my week' tool reviews your last 7 days and ranks the most likely causes with concrete next steps. Currently a private app — built for myself, but I may open it up if there's interest.",
    descriptionDe:
      "Eine persönliche Web-App — für Desktop und mobile Geräte —, die ich entwickelt habe, um den Einstieg in die Keto-Diät und das Durchhalten so einfach wie möglich zu machen. Ein Foto deiner Mahlzeit reicht — Keto Coach sagt dir sofort, ob das Essen zur Diät passt, welche Bestandteile zu meiden sind, und liefert die Makro-Aufschlüsselung, alles im Kontext deiner Tageswerte. Erhalte massgeschneiderte Ideen für Frühstück, Mittag- oder Abendessen sowie Snacks, basierend auf dem Inhalt deines Kühlschranks und deinem verbleibenden Makro-Spielraum. Erfasse Mahlzeiten mit automatisch geschätzten Kalorien, Netto-Kohlenhydraten, Protein und Fett und verfolge Fortschritte, Erfolge und Wochenstatistiken. Wenn die Waage stillsteht, analysiert das «Woche diagnostizieren»-Tool deine letzten 7 Tage und priorisiert die wahrscheinlichsten Ursachen mit konkreten Schritten. Derzeit eine private App — für mich selbst entwickelt, bei Interesse möglicherweise öffentlich zugänglich.",
    image: "/images/keto/dash.jpg",
    screenshots: [
      "/images/keto/dash.jpg",
      "/images/keto/dash2.jpg",
      "/images/keto/analyse1.jpg",
      "/images/keto/analyse2.jpg",
      "/images/keto/whattoeat1.jpg",
      "/images/keto/whattoeat2.jpg",
      "/images/keto/log1.jpg",
      "/images/keto/log2.jpg",
      "/images/keto/settings.jpg",
    ],
    tags: ["AI", "Health", "Nutrition", "Web App", "Private"],
    tagsDe: ["KI", "Gesundheit", "Ernährung", "Web-App", "Privat"],
    year: "2026",
    status: "private",
    category: "app",
    featured: true,
  },
  {
    slug: "iasre-japan",
    title: "IASRE Japan",
    subtitle: "Japanese PDR Expo",
    subtitleDe: "Japanische PDR-Messe",
    description:
      "Web platform for the Japanese edition of the international PDR expo. Featuring bilingual content, event schedules, and exhibitor management for the Asian market.",
    descriptionDe:
      "Webplattform für die japanische Ausgabe der internationalen PDR-Messe. Mit zweisprachigen Inhalten, Veranstaltungsplänen und Ausstellerverwaltung für den asiatischen Markt.",
    image: "/images/iasre-japan.jpg",
    tags: ["Events", "International", "PDR"],
    tagsDe: ["Veranstaltungen", "International", "PDR"],
    year: "2023",
    url: "https://www.iasre-japan.com/",
    category: "web",
    featured: true,
  },
  {
    slug: "pdrkalk-website",
    title: "PDR Kalk",
    subtitle: "Product Website for PDR Software",
    subtitleDe: "Produktwebsite für PDR-Software",
    description:
      "Marketing website for PDR Kalk — a damage assessment and invoicing application for PDR technicians. Showcases features, screenshots, pricing, and multi-language support. Built to convert visitors into licensed users.",
    descriptionDe:
      "Marketingwebsite für PDR Kalk — eine Schadenskalkulations- und Rechnungsanwendung für PDR-Techniker. Präsentiert Funktionen, Screenshots, Preise und Mehrsprachigkeit. Entwickelt, um Besucher in lizenzierte Nutzer zu verwandeln.",
    image: "/images/pdrkalkweb.jpg",
    tags: ["Web Design", "Product Page", "PDR"],
    tagsDe: ["Webdesign", "Produktseite", "PDR"],
    year: "2025",
    url: "https://www.pdrkalk.com",
    category: "web",
    featured: true,
  },
  {
    slug: "pdrtools",
    title: "Swiss PDR Tools",
    subtitle: "E-Commerce Platform",
    subtitleDe: "E-Commerce-Plattform",
    description:
      "Specialized e-commerce platform for paintless dent repair tools and equipment. Features product catalog, secure checkout, and inventory management.",
    descriptionDe:
      "Spezialisierte E-Commerce-Plattform für Werkzeuge und Ausrüstung zur lackschadenfreien Dellenreparatur. Mit Produktkatalog, sicherem Checkout und Lagerverwaltung.",
    image: "/images/pdrtools.jpg",
    tags: ["E-Commerce", "Inventory", "Payments"],
    tagsDe: ["E-Commerce", "Lagerverwaltung", "Zahlungen"],
    year: "2023",
    url: "https://www.pdrtools.com/",
    category: "tool",
    featured: true,
  },
  {
    slug: "mathe-meister",
    title: "Mathe Meister",
    subtitle: "Educational Math App",
    subtitleDe: "Lern-App für Mathematik",
    description:
      "An interactive mathematics learning application designed to make math education engaging and accessible. Features adaptive difficulty, progress tracking, and gamified learning experiences.",
    descriptionDe:
      "Eine interaktive Mathematik-Lernapp, die Matheunterricht spannend und zugänglich macht. Mit adaptivem Schwierigkeitsgrad, Fortschrittsverfolgung und spielerischem Lernerlebnis.",
    image: "/images/app-mathe-meister.jpg",
    tags: ["Mobile App", "Education", "Gamification"],
    tagsDe: ["Mobile App", "Bildung", "Gamification"],
    year: "2024",
    url: "https://meister.sappy.ch/",
    category: "app",
    featured: true,
  },
  {
    slug: "clever-ausbeulen",
    title: "Clever-Ausbeulen",
    subtitle: "Paintless Dent Repair Service",
    subtitleDe: "Lackschadenfreie Dellenreparatur",
    description:
      "Professional web presence for a paintless dent repair specialist. Showcasing services, expertise, and customer results with a clean, conversion-focused design.",
    descriptionDe:
      "Professioneller Webauftritt für einen Spezialisten für lackschadenfreie Dellenreparatur. Präsentation von Dienstleistungen, Fachwissen und Kundenergebnissen mit klarem, konversionsorientiertem Design.",
    image: "/images/clever.jpg",
    tags: ["Web Design", "Service Business", "PDR"],
    tagsDe: ["Webdesign", "Dienstleistung", "PDR"],
    year: "2024",
    url: "https://cleverausbeulen.ch/",
    category: "web",
    featured: true,
  },
  {
    slug: "autoausbeulen",
    title: "Autoausbeulen",
    subtitle: "Auto Body Repair Service",
    subtitleDe: "Karosseriereparatur-Service",
    description:
      "Digital presence for a premium auto body repair service specializing in paintless dent removal. Features before/after galleries, online quoting, and service area coverage.",
    descriptionDe:
      "Digitaler Auftritt für einen Premium-Karosseriereparatur-Service, spezialisiert auf lackschadenfreie Dellenentfernung. Mit Vorher/Nachher-Galerien, Online-Offerten und Einzugsgebiet-Übersicht.",
    image: "/images/autoausbeulen.jpg",
    tags: ["Web Design", "Service Business", "SEO"],
    tagsDe: ["Webdesign", "Dienstleistung", "SEO"],
    year: "2023",
    url: "https://autoausbeulen.ch",
    category: "web",
    featured: true,
  },
  {
    slug: "retro-game",
    title: "Retro Game",
    subtitle: "Father & Son Arcade Project",
    subtitleDe: "Vater-Sohn-Arcade-Projekt",
    description:
      "A retro-style browser game built together with my son. Best experienced on tablets or desktop — load it up and jump straight in. A fun side project blending nostalgia with modern web tech.",
    descriptionDe:
      "Ein Retro-Browserspiel, das ich zusammen mit meinem Sohn entwickelt habe. Am besten auf Tablets oder Desktop — einfach laden und losspielen. Ein Spassprojekt, das Nostalgie mit moderner Webtechnologie verbindet.",
    image: "/images/kidapp.jpg",
    tags: ["Game", "Retro", "Browser"],
    tagsDe: ["Spiel", "Retro", "Browser"],
    year: "2024",
    url: "https://kid.sappy.ch/",
    category: "app",
    featured: true,
  },
  {
    slug: "weltmeister",
    title: "Weltmeister",
    subtitle: "Continent & Ocean Quiz for Kids",
    subtitleDe: "Kontinente- & Ozeane-Quiz für Kinder",
    description:
      "A playful educational app built for my daughter to prepare for her continent test. Kids explore an interactive world map, discover fun facts about all continents and oceans, then test their knowledge in a quiz to earn points and climb the highscore. No ads — free for all kids.",
    descriptionDe:
      "Eine spielerische Lern-App, die ich für meine Tochter entwickelt habe, um sich auf ihren Kontinente-Test vorzubereiten. Kinder erkunden eine interaktive Weltkarte, entdecken spannende Fakten über alle Kontinente und Ozeane und testen ihr Wissen im Quiz, um Punkte zu sammeln und in die Highscore-Liste aufzusteigen. Keine Werbung — kostenlos für alle Kinder.",
    image: "/images/weltmeister.jpg",
    tags: ["Education", "Kids", "Quiz", "Free"],
    tagsDe: ["Bildung", "Kinder", "Quiz", "Kostenlos"],
    year: "2026",
    url: "https://welt.sappy.ch",
    category: "app",
    featured: true,
  },
  // === Non-featured ===
  {
    slug: "pdrkalk",
    title: "PDR Kalk",
    subtitle: "Damage Assessment & Invoicing Software",
    subtitleDe: "Schadenskalkulation & Rechnungssoftware",
    description:
      "A desktop application built for PDR technicians to digitalise hail and parking damage estimates, work reports, and invoicing. Features live calculations based on Swiss insurance matrices, batch invoicing, photo integration into PDF reports, address book management, and multi-language support (DE/FR/IT/EN). Fully offline with local data storage — no cloud, no subscription required. Built to save 30–60 minutes per job.",
    descriptionDe:
      "Eine Desktop-Anwendung für PDR-Techniker zur Digitalisierung von Hagel- und Parkschadenkalkulationen, Arbeitsberichten und Rechnungen. Mit Live-Berechnungen basierend auf Schweizer Versicherungsmatrizen, Sammelrechnungen, Fotointegration in PDF-Berichte, Adressverwaltung und Mehrsprachigkeit (DE/FR/IT/EN). Vollständig offline mit lokaler Datenspeicherung — kein Cloud-Abo nötig. Spart 30–60 Minuten pro Auftrag.",
    image: "/images/pdrkalkapp.jpg",
    tags: ["Desktop App", "PDR", "Invoicing", "Swiss Insurance"],
    tagsDe: ["Desktop-App", "PDR", "Rechnungsstellung", "Schweizer Versicherung"],
    year: "2025",
    url: "https://www.pdrkalk.com",
    category: "app",
    featured: false,
  },
  {
    slug: "masterfixpdr",
    title: "MasterFix PDR",
    subtitle: "Professional Dent Repair Platform",
    subtitleDe: "Professionelle Dellenreparatur-Plattform",
    description:
      "A comprehensive web platform for a professional paintless dent repair service. Built with modern web technologies featuring booking systems, service showcases, and customer management.",
    descriptionDe:
      "Eine umfassende Webplattform für einen professionellen Dellenreparatur-Service. Mit modernen Webtechnologien, Buchungssystem, Leistungsübersicht und Kundenverwaltung.",
    image: "/images/masterfixpdr.jpg",
    tags: ["Web Development", "Booking System", "CMS"],
    tagsDe: ["Webentwicklung", "Buchungssystem", "CMS"],
    year: "2024",
    url: "https://masterfixpdr.se/",
    category: "web",
    featured: false,
  },
  {
    slug: "dentag",
    title: "Dentagon PDR Australia",
    subtitle: "Australian PDR Website",
    subtitleDe: "Australische PDR-Website",
    description:
      "Professional web platform for an Australian paintless dent repair service. Features service showcases, booking integration, and regional targeting for the Australian market.",
    descriptionDe:
      "Professionelle Webplattform für einen australischen Dellenreparatur-Service. Mit Leistungsübersicht, Buchungsintegration und regionaler Ausrichtung auf den australischen Markt.",
    image: "/images/dentag.jpg",
    tags: ["Web Design", "PDR", "International"],
    tagsDe: ["Webdesign", "PDR", "International"],
    year: "2023",
    url: "https://www.dentag.com.au/",
    category: "web",
    featured: false,
  },
  {
    slug: "sciuto",
    title: "Sciuto Drücktechnik",
    subtitle: "Swiss PDR Specialist",
    subtitleDe: "Schweizer PDR-Spezialist",
    description:
      "Professional web presence for a Swiss paintless dent repair specialist. Clean, modern design showcasing expert craftsmanship and precision repair services.",
    descriptionDe:
      "Professioneller Webauftritt für einen Schweizer Spezialisten für lackschadenfreie Dellenreparatur. Klares, modernes Design mit Fokus auf Handwerkskunst und Präzisionsreparatur.",
    image: "/images/sciuto.jpg",
    tags: ["Web Design", "PDR", "Swiss"],
    tagsDe: ["Webdesign", "PDR", "Schweiz"],
    year: "2023",
    url: "https://sciuto-drücktechnik.ch/",
    category: "web",
    featured: false,
  },
  {
    slug: "straehl",
    title: "Strähl Drücktechnik",
    subtitle: "Swiss PDR Specialist",
    subtitleDe: "Schweizer PDR-Spezialist",
    description:
      "Corporate website for a Swiss paintless dent repair specialist. Modern aesthetics with clear communication of services and conversion optimization.",
    descriptionDe:
      "Firmenwebsite für einen Schweizer Spezialisten für lackschadenfreie Dellenreparatur. Modernes Design mit klarer Leistungskommunikation und Konversionsoptimierung.",
    image: "/images/straehl.jpg",
    tags: ["Corporate", "Web Design", "PDR"],
    tagsDe: ["Firmenpräsenz", "Webdesign", "PDR"],
    year: "2023",
    url: "https://www.straehl-druecktechnik.ch/",
    category: "web",
    featured: false,
  },
  {
    slug: "iasre",
    title: "IASRE Germany",
    subtitle: "The Biggest PDR Expo in EU",
    subtitleDe: "Die grösste PDR-Messe in der EU",
    description:
      "Web platform for Europe's largest paintless dent repair expo and trade show. Multi-language support with event management, exhibitor showcases, and registration features.",
    descriptionDe:
      "Webplattform für Europas grösste Messe für lackschadenfreie Dellenreparatur. Mehrsprachig mit Eventmanagement, Ausstellerpräsentationen und Anmeldefunktionen.",
    image: "/images/iasre.jpg",
    tags: ["Events", "Multi-language", "PDR"],
    tagsDe: ["Veranstaltungen", "Mehrsprachig", "PDR"],
    year: "2023",
    url: "https://www.iasre.com/",
    category: "web",
    featured: false,
  },
  {
    slug: "homehuahin",
    title: "Home Hua Hin",
    subtitle: "Luxury Property Showcase",
    subtitleDe: "Luxus-Immobilienpräsentation",
    description:
      "An elegant single-property website for a luxury two-residence tropical estate in Hua Hin, Thailand. Features a cinematic hero section, property gallery, location guide, and booking inquiry system — designed to sell privacy, space, and lifestyle.",
    descriptionDe:
      "Eine elegante Einzelobjekt-Website für ein tropisches Luxusanwesen mit zwei Residenzen in Hua Hin, Thailand. Mit cinematischer Hero-Sektion, Immobiliengalerie, Standortführer und Buchungsanfrage — gestaltet, um Privatsphäre, Raum und Lifestyle zu verkaufen.",
    image: "/images/homehuahin.jpg",
    tags: ["Real Estate", "Web Design", "International"],
    tagsDe: ["Immobilien", "Webdesign", "International"],
    year: "2025",
    url: "https://www.homehuahin.com/",
    category: "web",
    featured: false,
  },
  {
    slug: "whatdents",
    title: "What Dents?",
    subtitle: "Damage Assessment Tool",
    subtitleDe: "Schadensbewertungs-Tool",
    description:
      "An AI-powered damage assessment tool for automotive dent analysis. Upload photos and receive instant repair estimates.",
    descriptionDe:
      "Ein KI-gestütztes Schadensbewertungs-Tool für die Analyse von Fahrzeugdellen. Fotos hochladen und sofort Reparaturkostenschätzungen erhalten.",
    image: "/images/whatdents.jpg",
    tags: ["AI", "Assessment", "Automotive"],
    tagsDe: ["KI", "Bewertung", "Automobil"],
    year: "2024",
    url: "https://www.whatdents.co.uk/",
    category: "web",
    featured: false,
  },
  {
    slug: "erna",
    title: "ERNA",
    subtitle: "Professional Drycleaning",
    subtitleDe: "Professionelle Textilreinigung",
    description:
      "Professional web presence for a dry cleaning service. Clean, modern design with service information, pricing, and location details.",
    descriptionDe:
      "Professioneller Webauftritt für eine Textilreinigung. Klares, modernes Design mit Serviceinformationen, Preisen und Standortdetails.",
    image: "/images/erna.jpg",
    tags: ["Web Design", "Service Business", "Local"],
    tagsDe: ["Webdesign", "Dienstleistung", "Lokal"],
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
