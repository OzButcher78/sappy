// Self-contained content for the /auto lead-generation landing page.
//
// This is intentionally separate from the client-side i18n context
// (src/lib/i18n.tsx): the /auto hero must be SERVER-RENDERED for fast first
// paint on cold mobile ad traffic, so it cannot read from the `useI18n` hook
// (which only runs in client components). Keeping the copy in a plain,
// strongly-typed module lets both server and client components import it
// directly. The shape is bilingual-ready — wrap in `Record<Locale, ...>`
// in Phase 2 to add an English mirror.

export interface LandingFaqItem {
  q: string;
  a: string;
}

export interface LandingStep {
  number: string;
  title: string;
  body: string;
}

export interface LandingStat {
  value: string;
  label: string;
}

export interface LandingPricingTier {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  /** Visually emphasized "most popular" tier. */
  highlight?: boolean;
}

export interface LandingContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    cta: string;
  };
  hero: {
    h1: string;
    sub: string;
    cta: string;
    trust: string[];
    thumbsLabel: string;
  };
  problem: {
    heading: string;
    body: string;
    pains: { title: string; body: string }[];
  };
  proof: {
    heading: string;
    insider: string;
    stats: LandingStat[];
    viewLive: string;
  };
  how: {
    heading: string;
    sub: string;
    steps: LandingStep[];
  };
  pricing: {
    heading: string;
    body: string;
    note: string;
    cta: string;
    tiers: LandingPricingTier[];
  };
  faq: {
    heading: string;
    items: LandingFaqItem[];
  };
  finalCta: {
    heading: string;
    sub: string;
  };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    website: string;
    websitePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    error: string;
    privacyNote: string;
    privacyLink: string;
    directLabel: string;
  };
  mobileBar: {
    cta: string;
  };
  footer: {
    tagline: string;
    portfolio: string;
    impressum: string;
    datenschutz: string;
    rights: string;
  };
}

export const landing: LandingContent = {
  meta: {
    title: "Neue Website für Ihren Autobetrieb — in rund 3 Wochen online | Sappy",
    description:
      "Moderne, schnelle Websites für die Autobranche — Garagen, Mechaniker, Tuning, Folierung, Detailing, Scheibentönung und mehr. Von einem Entwickler, der die Branche selbst kennt. Kostenloses 15-Minuten-Gespräch anfragen.",
  },
  nav: {
    cta: "Gespräch anfragen",
  },
  hero: {
    h1: "Eine neue Website, die Ihrem Betrieb mehr Kunden bringt.",
    sub: "Moderne, schnelle Websites für die Autobranche — von Garagen, Mechanikern und Karosseriebetrieben über Tuning, Folierung und Scheibentönung bis zu Detailing- und Dellenprofis. In rund 3 Wochen online, von jemandem, der Ihre Branche selbst kennt.",
    cta: "Kostenloses 15-Minuten-Gespräch anfragen",
    trust: [
      "Fixpreis ohne Überraschungen",
      "Schweizer Qualität",
      "Antwort innert 24 h",
    ],
    thumbsLabel: "Ein kleiner Auszug aus realen Projekten für die Autobranche:",
  },
  problem: {
    heading: "Eine veraltete Website kostet Sie jeden Monat Aufträge.",
    body: "Ihre Kunden beurteilen Ihren Betrieb heute zuerst online — nicht vor Ort. Lädt Ihre Website langsam, lässt sie sich auf dem Handy kaum bedienen oder sieht sie aus wie vor zehn Jahren, klicken potenzielle Kunden weiter zum nächsten Anbieter. Die meisten Besucher entscheiden in wenigen Sekunden, ob sie bleiben.",
    pains: [
      {
        title: "Zu langsam",
        body: "Lädt die Seite nicht sofort, ist der Kunde wieder weg, bevor er Ihr Angebot überhaupt gesehen hat.",
      },
      {
        title: "Nicht fürs Handy gemacht",
        body: "Über die Hälfte sucht vom Smartphone aus. Eine Seite, die dort nicht funktioniert, verliert genau diese Kunden.",
      },
      {
        title: "Wirkt nicht vertrauenswürdig",
        body: "Ein veralteter Auftritt lässt selbst den besten Betrieb unprofessionell wirken — und Vertrauen entscheidet über den Auftrag.",
      },
    ],
  },
  proof: {
    heading: "Ich kenne Ihre Branche — von innen.",
    insider:
      "Ich bin selbst seit Jahren in der Branche zu Hause: Ich führe ein eigenes PDR-Unternehmen (lackschadenfreie Dellenreparatur) und entwickle Werkzeuge und Software für Techniker weltweit. Ich weiss, wie Ihr Geschäft funktioniert, welche Kunden Sie erreichen wollen und worauf es bei einer Website in der Autobranche wirklich ankommt. Das sehen Sie an meinen Projekten:",
    stats: [
      { value: "87+", label: "Projekte realisiert" },
      { value: "30+", label: "Jahre Erfahrung" },
      { value: "100%", label: "Schweizer Qualität" },
    ],
    viewLive: "Live ansehen",
  },
  how: {
    heading: "So einfach kommen Sie zu Ihrer neuen Website",
    sub: "Kein Fachjargon, keine wochenlangen Meetings. Drei Schritte — und Sie sind online.",
    steps: [
      {
        number: "01",
        title: "Kostenloses Gespräch",
        body: "In 15 Minuten klären wir unverbindlich, was Ihre Website können muss — und ob ich der Richtige dafür bin.",
      },
      {
        number: "02",
        title: "Entwurf & Umsetzung",
        body: "Sie erhalten einen klaren Vorschlag und einen Fixpreis. Nach Ihrem OK setze ich alles um — Texte, Bilder und Technik.",
      },
      {
        number: "03",
        title: "Live in rund 3 Wochen",
        body: "Ihre neue Website geht online — schnell, auf dem Handy perfekt bedienbar und bereit, Kunden zu bringen.",
      },
    ],
  },
  pricing: {
    heading: "Faire Preise, klar kommuniziert",
    body: "Keine versteckten Kosten, kein Abo-Dschungel. Die Preise sind Richtwerte — Ihren verbindlichen Fixpreis erhalten Sie nach dem kostenlosen Erstgespräch.",
    note: "Alle Preise sind Richtwerte in CHF, exkl. MWST. Domain, Hosting und E-Mail auf Wunsch inklusive.",
    cta: "Kostenloses Gespräch anfragen",
    tiers: [
      {
        name: "1-Seiten-Website",
        price: "ab CHF 2'000",
        tagline: "Der elegante Einstieg",
        features: [
          "Modernes, individuelles Markendesign",
          "Dezente Animationen & Effekte",
          "Kontakt- & Anfrageformular",
          "Impressum & Datenschutz inklusive",
          "Auf allen Geräten perfekt bedienbar",
          "Schnelle Ladezeiten & SEO-Grundlagen",
        ],
      },
      {
        name: "Kleine Website",
        price: "ab CHF 3'000",
        tagline: "Mehrere Seiten – ideal für die meisten Betriebe",
        highlight: true,
        features: [
          "Alles aus der 1-Seiten-Website",
          "Mehrere individuelle Unterseiten",
          "Galerie & Referenzen",
          "Erweiterte Kontaktformulare",
          "Strukturierte SEO-Grundlagen",
          "Live in rund 3 Wochen",
        ],
      },
      {
        name: "Grosse Website",
        price: "ab CHF 5'000",
        tagline: "Shop, Zahlungen & komplexe Funktionen",
        features: [
          "Alles aus «Kleine Website»",
          "Online-Shop & Zahlungen",
          "Mehrsprachigkeit",
          "Ticketing- & Buchungssysteme",
          "Komplexe Formulare & Datenbanken",
          "Individuelle Plugins & Integrationen",
        ],
      },
    ],
  },
  faq: {
    heading: "Häufige Fragen",
    items: [
      {
        q: "Was kostet eine neue Website?",
        a: "Eine elegante 1-Seiten-Website startet bei CHF 2'000, kleine mehrseitige Websites ab CHF 3'000. Grosse Websites mit Shop, Zahlungen und Mehrsprachigkeit beginnen bei CHF 5'000. Ihren verbindlichen Fixpreis erhalten Sie unverbindlich im kostenlosen Erstgespräch.",
      },
      {
        q: "Wie lange dauert es, bis meine Website online ist?",
        a: "In der Regel rund 3 Wochen, ab dem Moment, in dem wir die Inhalte beisammen haben.",
      },
      {
        q: "Ich habe schon eine Website — lohnt sich das trotzdem?",
        a: "Gerade dann. Oft genügt eine moderne Überarbeitung, damit Ihre Seite schneller lädt, auf dem Handy funktioniert und mehr Anfragen bringt. Im Gespräch sage ich Ihnen ehrlich, ob sich ein Neubau überhaupt lohnt.",
      },
      {
        q: "Kümmern Sie sich auch um Domain und Hosting?",
        a: "Ja. Auf Wunsch übernehme ich Domain, Hosting und E-Mail-Einrichtung komplett — Sie müssen sich um nichts kümmern.",
      },
      {
        q: "Was passiert nach dem Launch?",
        a: "Auf Wunsch übernehme ich laufende Wartung, Updates und Änderungen, damit Ihre Website aktuell und sicher bleibt. Dieser Service lässt sich jederzeit vereinbaren und wird nach Aufwand zu CHF 120/Stunde abgerechnet — oder wir schnüren ein passendes Service-Paket. So zahlen Sie nur für das, was Sie wirklich brauchen.",
      },
    ],
  },
  finalCta: {
    heading: "Bereit für eine Website, die Kunden bringt?",
    sub: "Fordern Sie jetzt Ihr kostenloses 15-Minuten-Gespräch an. Ich melde mich innert 24 Stunden bei Ihnen — unverbindlich.",
  },
  form: {
    name: "Name",
    namePlaceholder: "Ihr Name",
    email: "E-Mail",
    emailPlaceholder: "ihre@email.ch",
    website: "Aktuelle Website (optional)",
    websitePlaceholder: "z. B. ihr-betrieb.ch",
    phone: "Telefon (optional)",
    phonePlaceholder: "Für den Rückruf zum Gespräch",
    submit: "Kostenloses Gespräch anfragen",
    submitting: "Wird gesendet …",
    successTitle: "Vielen Dank!",
    successBody:
      "Ich habe Ihre Anfrage erhalten und melde mich innert 24 Stunden bei Ihnen — unverbindlich.",
    error:
      "Da ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt.",
    privacyNote:
      "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Bearbeitung Ihrer Anfrage zu. Mehr dazu in der",
    privacyLink: "Datenschutzerklärung",
    directLabel: "Lieber direkt schreiben?",
  },
  mobileBar: {
    cta: "Kostenloses Gespräch",
  },
  footer: {
    tagline: "Websites für die Autobranche — gebaut in der Schweiz.",
    portfolio: "Zum Portfolio",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    rights: "Alle Rechte vorbehalten.",
  },
};
