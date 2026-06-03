import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Sappy",
  description:
    "Wie Sappy mit Ihren Daten umgeht: Kontaktformular, E-Mail-Versand und Hosting. Kein Tracking, keine Cookies.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell title="Datenschutzerklärung">
      <section>
        <p>
          Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Website
          verwendet <strong>keine Cookies, kein Tracking und keine
          Analyse-Werkzeuge</strong>. Personenbezogene Daten werden nur dann
          verarbeitet, wenn Sie das Kontaktformular nutzen oder mir eine E-Mail
          schreiben.
        </p>
      </section>

      <section>
        <h2>Verantwortliche Stelle</h2>
        <p>
          {legal.name}, {legal.brand}
          <br />
          {legal.street}, {legal.zipCity}, {legal.country}
          <br />
          E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
        </p>
      </section>

      <section>
        <h2>Kontaktformular</h2>
        <p>
          Wenn Sie das Formular absenden, werden die von Ihnen angegebenen Daten
          (Name, E-Mail-Adresse sowie optional Website-Adresse und Telefonnummer)
          ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme
          verwendet. Eine Weitergabe an Dritte zu Werbezwecken findet nicht statt.
        </p>
      </section>

      <section>
        <h2>E-Mail-Versand (Resend)</h2>
        <p>
          Für den Versand der Formular-Nachrichten und der Bestätigungs-E-Mail
          nutze ich den Dienst Resend (Resend, Inc.). Dabei werden die
          übermittelten Angaben sowie Ihre E-Mail-Adresse verarbeitet, um die
          Nachricht zuzustellen. Resend verarbeitet Daten innerhalb der EU.
        </p>
      </section>

      <section>
        <h2>Hosting (Vercel)</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seite
          werden technisch notwendige Server-Logs (z. B. IP-Adresse, Zeitpunkt
          des Zugriffs, abgerufene Seite) verarbeitet, um den Betrieb und die
          Sicherheit der Website zu gewährleisten.
        </p>
      </section>

      <section>
        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer
          gespeicherten Daten. Wenden Sie sich dazu jederzeit an{" "}
          <a href={`mailto:${legal.email}`}>{legal.email}</a>.
        </p>
      </section>

      <section>
        <p className="text-sm">Stand: {legal.lastUpdated}</p>
      </section>
    </LegalShell>
  );
}
