import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum | Sappy",
  description: "Impressum und Kontaktangaben von Sappy / Dieter Balmer.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum">
      <section>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          {legal.name}
          <br />
          {legal.brand}
          <br />
          {legal.street}
          <br />
          {legal.zipCity}
          <br />
          {legal.country}
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${legal.email}`}>{legal.email}</a>
          {legal.phone && (
            <>
              <br />
              Telefon: {legal.phone}
            </>
          )}
        </p>
      </section>

      {(legal.uid || legal.mwst) && (
        <section>
          <h2>Unternehmensangaben</h2>
          <p>
            {legal.uid && (
              <>
                Unternehmens-Identifikationsnummer (UID): {legal.uid}
                <br />
              </>
            )}
            {legal.mwst && <>MWST-Nummer: {legal.mwst}</>}
          </p>
        </section>
      )}

      <section>
        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird
          jedoch keine Gewähr übernommen. Für Inhalte externer Links sind
          ausschliesslich deren Betreiber verantwortlich.
        </p>
      </section>
    </LegalShell>
  );
}
