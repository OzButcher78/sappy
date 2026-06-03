export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  subtitleDe?: string;
  description: string;
  descriptionDe?: string;
  /** Concrete capabilities / what was built — rendered as a bulleted highlight list on the detail page. */
  features?: string[];
  featuresDe?: string[];
  image: string;
  screenshots?: string[];
  tags: string[];
  tagsDe?: string[];
  year: string;
  url?: string;
  status?: "private";
  /** Industry segment — used to surface automotive/PDR work on the /auto landing page. */
  industry?: "automotive";
  category: "web" | "app";
  featured: boolean;
}

// Short, human-friendly label for the project type — drives the Website/App
// badge on project cards. Same word reads fine in EN and DE for most, so we
// keep a per-locale map for the one that differs.
export const CATEGORY_LABELS: Record<
  Project["category"],
  { en: string; de: string }
> = {
  web: { en: "Website", de: "Website" },
  app: { en: "App", de: "App" },
};

export const projects: Project[] = [
  // === Featured (in display order) ===
  {
    slug: "keto-coach",
    title: "Keto Coach",
    subtitle: "AI-Powered Keto Diet Companion",
    subtitleDe: "KI-gestützter Begleiter für die Keto-Diät",
    description:
      "A smart AI companion for the Keto diet. It logs your weight and meals every day and tracks your progress over time — and it can analyse a photo of any food to instantly reveal its nutritional data, then add it straight to your daily diet if you eat it. Genuinely smart and informative for anyone living keto. Available on request.",
    descriptionDe:
      "Ein smarter KI-Begleiter für die Keto-Diät. Die App erfasst täglich Gewicht und Mahlzeiten und verfolgt deinen Fortschritt. Sie analysiert das Foto beliebiger Speisen, zeigt sofort deren Nährwerte an und fügt sie bei Verzehr automatisch deiner Tagesbilanz hinzu. Smart und informativ für alle, die Keto leben. Auf Anfrage verfügbar.",
    features: [
      "AI food-photo analysis",
      "Instant nutritional data",
      "Auto-adds eaten meals to your log",
      "Daily weight & meal tracking",
      "Progress tracking over time",
      "Smart meal suggestions",
    ],
    featuresDe: [
      "KI-Foto-Analyse von Speisen",
      "Sofortige Nährwerte",
      "Verzehrtes wird automatisch erfasst",
      "Tägliches Gewichts- & Mahlzeiten-Tracking",
      "Fortschritt über die Zeit",
      "Smarte Mahlzeitvorschläge",
    ],
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
      "A full-stack event platform for the Japanese PDR expo — handling ticket sales, sponsorships, and exhibitor registrations end-to-end. Built for conversion, bilingual from the ground up, and ready to scale across the Asian market.",
    descriptionDe:
      "Eine vollständige Event-Plattform für die japanische PDR-Expo — mit Ticketverkauf, Sponsoring und Ausstellerregistrierung von A bis Z. Konversionsstark, zweisprachig und auf den asiatischen Markt ausgerichtet.",
    features: [
      "Online ticketing with conditional forms",
      "Countdown-gated booking regions",
      "Stock-controlled merch sales",
      "Automated payments for tickets, exhibitors & sponsors",
      "Scannable wallet tickets at reception",
      "Bilingual (Japanese / English)",
      "SEO-optimised, high-conversion design",
    ],
    featuresDe: [
      "Online-Ticketing mit bedingten Formularen",
      "Countdown-gesteuerte Buchungsregionen",
      "Lagergesteuerter Merchandise-Verkauf",
      "Automatisierte Zahlungen für Tickets, Aussteller & Sponsoren",
      "Scanbare Wallet-Tickets am Empfang",
      "Zweisprachig (Japanisch / Englisch)",
      "SEO-optimiertes, konversionsstarkes Design",
    ],
    image: "/images/iasre-japan.jpg",
    tags: ["Online Ticketing", "Registration Countdown", "E-Commerce"],
    tagsDe: ["Online-Ticketing", "Anmelde-Countdown", "E-Commerce"],
    year: "2026",
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
      "A conversion-focused product website for PDR Kalk — the damage-assessment and invoicing app built for PDR technicians. Dieter designed and built both the software and the site that sells it.",
    descriptionDe:
      "Eine conversionstarke Produktwebsite für PDR Kalk — die Schadensbewertungs- und Rechnungs-App für PDR-Techniker. Dieter hat sowohl die Software als auch die Website, die sie verkauft, konzipiert und gebaut.",
    features: [
      "Damage assessment & invoicing app",
      "Windows + Android versions",
      "Multi-language support",
      "Pricing & licensing showcase",
      "Screenshot-driven feature presentation",
      "Built to convert visitors to users",
    ],
    featuresDe: [
      "Schadensbewertung & Rechnungsstellung",
      "Windows + Android Versionen",
      "Mehrsprachige Unterstützung",
      "Preise & Lizenzen präsentiert",
      "Screenshot-gestützte Funktionsdarstellung",
      "Auf Conversion optimiert",
    ],
    image: "/images/pdrkalkweb.jpg",
    tags: ["Web Design", "Digital Product", "Multi-Language"],
    tagsDe: ["Webdesign", "Digitales Produkt", "Mehrsprachig"],
    year: "2026",
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
      "Swiss PDR Tools is a full e-commerce platform built to sell paintless dent repair equipment worldwide — from product catalog to secure checkout and professional invoicing, everything runs on custom-built infrastructure.",
    descriptionDe:
      "Swiss PDR Tools ist eine vollständige E-Commerce-Plattform für den weltweiten Verkauf von Ausbeulwerkzeug — vom Produktkatalog bis zur sicheren Kasse und professioneller Rechnungsstellung, alles auf massgeschneiderter Infrastruktur.",
    features: [
      "Worldwide e-commerce sales",
      "Weight-based shipping options",
      "Inventory & stock control",
      "Custom invoice generation plugin",
      "Secure checkout",
    ],
    featuresDe: [
      "Weltweiter Online-Verkauf",
      "Gewichtsbasierte Versandoptionen",
      "Lager- und Bestandskontrolle",
      "Massgeschneidertes Rechnungs-Plugin",
      "Sichere Kasse",
    ],
    image: "/images/pdrtools.jpg",
    tags: ["Web Design", "E-Commerce", "Payments"],
    tagsDe: ["Webdesign", "E-Commerce", "Zahlungen"],
    year: "2023",
    url: "https://www.pdrtools.com/",
    category: "web",
    featured: true,
  },
  {
    slug: "mathe-meister",
    title: "Mathe Meister",
    subtitle: "Educational Math App",
    subtitleDe: "Lern-App für Mathematik",
    description:
      "Mathe Meister is an interactive math learning app built for schools — ad-free, adaptive, and designed to make students want to practise. Gamified progress keeps learners engaged while teachers stay in control.",
    descriptionDe:
      "Mathe Meister ist eine interaktive Mathe-Lern-App für Schulen — werbefrei, adaptiv und so gestaltet, dass Schülerinnen und Schüler freiwillig üben. Gamifizierte Fortschritte halten die Motivation hoch.",
    features: [
      "Adaptive difficulty levels",
      "Progress tracking",
      "Gamified learning",
      "Ad-free school environment",
    ],
    featuresDe: [
      "Adaptive Schwierigkeitsgrade",
      "Fortschritts-Tracking",
      "Gamifiziertes Lernen",
      "Werbefreie Schulumgebung",
    ],
    image: "/images/app-mathe-meister.jpg",
    tags: ["Used in Schools", "No Ads", "Education"],
    tagsDe: ["In Schulen im Einsatz", "Werbefrei", "Bildung"],
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
      "Clever-Ausbeulen needed a web presence that converts visitors into customers — so we built one around their expertise and real results. Clean, focused design that turns a specialist service into an easy yes.",
    descriptionDe:
      "Clever-Ausbeulen brauchte einen Webauftritt, der Besucher zu Kunden macht — darum haben wir ihn konsequent auf ihre Expertise und echte Resultate ausgerichtet. Klares, fokussiertes Design, das aus einem Spezialangebot ein einfaches Ja macht.",
    features: [
      "Conversion-focused service showcase",
      "Expertise & results presentation",
      "Clean, professional design",
      "Mobile-ready layout",
    ],
    featuresDe: [
      "Conversion-fokussierte Leistungsdarstellung",
      "Expertise- & Ergebnispräsentation",
      "Klares, professionelles Design",
      "Mobil-optimiertes Layout",
    ],
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
      "A conversion-focused website for a premium paintless dent removal service — built to turn local search traffic into booked jobs.",
    descriptionDe:
      "Eine conversion-starke Website für einen Premium-Autoausbeul-Service — gebaut, um lokalen Suchverkehr in gebuchte Aufträge zu verwandeln.",
    features: [
      "Before/after gallery",
      "Online quote request",
      "Service-area coverage",
      "SEO-optimised structure",
    ],
    featuresDe: [
      "Vorher/Nachher-Galerie",
      "Online-Offertanfrage",
      "Servicegebiet-Übersicht",
      "SEO-optimierte Struktur",
    ],
    image: "/images/autoausbeulen.jpg",
    tags: ["Web Design", "Service Business", "SEO"],
    tagsDe: ["Webdesign", "Dienstleistung", "SEO"],
    year: "2021",
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
      "A retro arcade game built with my son — load it in your browser and play instantly, no install needed. Proof that modern web tech can deliver genuine nostalgia.",
    descriptionDe:
      "Ein Retro-Arcade-Game, das ich gemeinsam mit meinem Sohn gebaut habe — im Browser laden und sofort spielen, ohne Installation. Modernes Web-Handwerk im Dienst echter Nostalgie.",
    features: [
      "Instant browser-based play",
      "Tablet & desktop optimised",
      "Retro arcade aesthetic",
      "Zero install, zero friction",
    ],
    featuresDe: [
      "Sofort im Browser spielbar",
      "Optimiert für Tablet & Desktop",
      "Klassisches Arcade-Design",
      "Kein Install, kein Aufwand",
    ],
    image: "/images/kidapp.jpg",
    tags: ["Game", "Retro", "Browser"],
    tagsDe: ["Spiel", "Retro", "Browser"],
    year: "2025",
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
      "A no-ads educational app built for real kids, not ad networks. Explore an interactive world map, discover continent and ocean facts, then prove it in a scored quiz.",
    descriptionDe:
      "Eine werbefreie Lern-App, gebaut für echte Kinder. Kontinente und Ozeane auf einer interaktiven Weltkarte entdecken, Fakten lernen und im Quiz Punkte sammeln.",
    features: [
      "Interactive world map",
      "Continent & ocean facts",
      "Knowledge quiz with scoring",
      "Highscore leaderboard",
      "Zero ads, free for kids",
    ],
    featuresDe: [
      "Interaktive Weltkarte",
      "Fakten zu Kontinenten & Ozeanen",
      "Wissensquiz mit Punkten",
      "Highscore-Rangliste",
      "Werbefrei und kostenlos",
    ],
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
      "PDR Kalk turns hail and parking-damage jobs into finished invoices in minutes — not hours. A fully offline desktop app built around Swiss insurance matrices, so PDR technicians spend time on cars, not paperwork.",
    descriptionDe:
      "PDR Kalk verwandelt Hagel- und Parkschäden in wenigen Minuten in fertige Rechnungen. Die vollständig offline nutzbare Desktop-App basiert auf Schweizer Versicherungsmatrizen — damit Techniker Zeit am Auto statt am Schreibtisch verbringen.",
    features: [
      "Swiss insurance matrix calculations",
      "Batch invoicing",
      "Photo integration in PDF reports",
      "Address-book management",
      "Multi-language (DE/FR/IT/EN)",
      "Fully offline — no subscription",
      "Saves 30–60 min per job",
    ],
    featuresDe: [
      "Schweizer Versicherungsmatrizen live",
      "Sammelrechnungen auf Knopfdruck",
      "Fotos direkt in PDF-Berichte",
      "Adressbuchverwaltung integriert",
      "Mehrsprachig (DE/FR/IT/EN)",
      "Vollständig offline — kein Abo",
      "30–60 Min. Ersparnis pro Auftrag",
    ],
    image: "/images/pdrkalkapp.jpg",
    tags: ["Desktop App", "PDR", "Invoicing", "Swiss Insurance"],
    tagsDe: ["Desktop-App", "PDR", "Rechnungsstellung", "Schweizer Versicherung"],
    year: "2026",
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
      "A complete web platform built for a professional paintless dent repair business — showcasing services, capturing bookings, and managing customers in one place.",
    descriptionDe:
      "Eine vollständige Web-Plattform für einen professionellen Beulendoktor-Betrieb — mit Service-Präsentation, Online-Buchung und Kundenverwaltung an einem Ort.",
    features: [
      "Online booking system",
      "Service showcase",
      "Customer management",
      "Professional service platform",
    ],
    featuresDe: [
      "Online-Buchungssystem",
      "Service-Präsentation",
      "Kundenverwaltung",
      "Professionelle Serviceplattform",
    ],
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
      "A professional web platform built to win local paintless dent repair jobs across Australia — service showcases, booking integration, and regional targeting all in one.",
    descriptionDe:
      "Eine professionelle Web-Plattform, die Aufträge für australischen Paintless Dent Repair gewinnt — mit Service-Übersichten, Buchungsintegration und regionalem Targeting.",
    features: [
      "Service showcase & portfolio",
      "Online booking integration",
      "Australian regional targeting",
      "Mobile-optimised layout",
    ],
    featuresDe: [
      "Service-Showcase & Portfolio",
      "Online-Buchungsintegration",
      "Regionales Targeting Australien",
      "Mobil-optimiertes Layout",
    ],
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
      "Sciuto Drücktechnik needed a web presence that earns trust before the phone rings. The result: a sharp, modern site that puts Swiss precision and craftsmanship front and center.",
    descriptionDe:
      "Sciuto Drücktechnik brauchte einen Webauftritt, der Vertrauen weckt, bevor das Telefon klingelt. Das Ergebnis: eine klare, moderne Website, die Schweizer Präzision und Handwerkskunst in den Vordergrund stellt.",
    features: [
      "Clean, conversion-focused design",
      "Expert craftsmanship showcased",
      "Precision repair services highlighted",
      "Modern Swiss PDR web presence",
    ],
    featuresDe: [
      "Klares, konversionsorientiertes Design",
      "Handwerkskunst im Mittelpunkt",
      "Präzisionsreparaturen überzeugend präsentiert",
      "Moderner Webauftritt für Schweizer PDR",
    ],
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
      "Strähl Drücktechnik needed a website that works as hard as their technicians. The result: a modern corporate site built to turn first-time visitors into booked customers.",
    descriptionDe:
      "Strähl Drücktechnik brauchte eine Website, die so hart arbeitet wie ihre Techniker. Das Ergebnis: ein moderner Firmenauftritt, der Erstbesucher in gebuchte Kunden verwandelt.",
    features: [
      "Modern corporate web presence",
      "Clear service communication",
      "Conversion-optimised layout",
      "Clean, professional aesthetics",
    ],
    featuresDe: [
      "Moderner Firmenauftritt",
      "Klare Leistungskommunikation",
      "Konversionsoptimiertes Layout",
      "Klares, professionelles Design",
    ],
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
      "Europe's largest PDR trade show needed a web platform worthy of its scale — so we built one. Event management, exhibitor showcases, and multi-language registration, all in one place.",
    descriptionDe:
      "Europas grösste PDR-Messe brauchte eine Webplattform auf ihrem Niveau — also haben wir eine gebaut. Eventmanagement, Ausstellerpräsentationen und mehrsprachige Anmeldung, alles an einem Ort.",
    features: [
      "Europe's largest PDR expo",
      "Exhibitor showcase pages",
      "Event registration system",
      "Multi-language support",
      "Trade show event management",
    ],
    featuresDe: [
      "Grösste PDR-Messe Europas",
      "Ausstellerpräsentationen",
      "Veranstaltungsanmeldung",
      "Mehrsprachige Oberfläche",
      "Eventmanagement für Messen",
    ],
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
      "A cinematic showcase site for a luxury two-residence tropical estate in Hua Hin — built to turn browsers into booking inquiries.",
    descriptionDe:
      "Eine cinematische Showcase-Website für ein luxuriöses Zwei-Residenz-Anwesen in Hua Hin — gebaut, um Interessenten zu Buchungsanfragen zu machen.",
    features: [
      "Cinematic hero section",
      "Full property gallery",
      "Location & lifestyle guide",
      "Booking inquiry system",
      "Privacy & space storytelling",
    ],
    featuresDe: [
      "Cinematische Hero-Section",
      "Vollständige Immobilien-Galerie",
      "Standort- & Lifestyle-Guide",
      "Buchungsanfrage-System",
      "Privatsphäre & Raum im Fokus",
    ],
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
      "What Dents? turns a smartphone photo into an instant repair estimate — no workshop visit needed. AI-powered dent analysis that gives automotive businesses and their customers answers in seconds.",
    descriptionDe:
      "What Dents? verwandelt ein Smartphone-Foto in eine sofortige Reparaturkostenschätzung — ohne Werkstattbesuch. KI-gestützte Delle-Analyse liefert Antworten in Sekunden.",
    features: [
      "Photo upload & instant analysis",
      "AI-powered dent detection",
      "Instant repair estimates",
      "No workshop visit required",
    ],
    featuresDe: [
      "Foto-Upload & Sofortanalyse",
      "KI-gestützte Dellenerkennung",
      "Sofortige Reparaturkostenschätzung",
      "Kein Werkstattbesuch nötig",
    ],
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
      "A polished web presence built to turn local searches into booked drop-offs. ERNA's site puts services, pricing, and location front and centre — everything a customer needs to choose them.",
    descriptionDe:
      "Ein professioneller Webauftritt, der aus lokalen Suchanfragen Neukunden macht. Dienstleistungen, Preise und Standort — alles, was ein Kunde braucht, um sich für ERNA zu entscheiden.",
    features: [
      "Clean, modern design",
      "Service overview & pricing",
      "Location & contact details",
      "Mobile-optimised layout",
    ],
    featuresDe: [
      "Klares, modernes Design",
      "Leistungsübersicht & Preise",
      "Standort & Kontaktinfos",
      "Mobil optimiertes Layout",
    ],
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

// Real, live automotive / PDR projects, curated and ordered for the /auto
// landing proof row (strongest visual + most recognizable first). A curated
// slug list keeps full control over which sites appear and in what order
// without touching every project. Phase 2 may switch this to an
// `industry === "automotive"` filter backed by a dedicated grid UI.
const AUTOMOTIVE_SLUGS = [
  "clever-ausbeulen",
  "autoausbeulen",
  "sciuto",
  "straehl",
  "masterfixpdr",
  "dentag",
  "iasre-japan",
  "pdrtools",
  "pdrkalk-website",
  "whatdents",
] as const;

export function getAutomotiveProjects(): Project[] {
  return AUTOMOTIVE_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter((p): p is Project => Boolean(p));
}
