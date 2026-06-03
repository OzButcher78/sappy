import type { Metadata } from "next";
import { landing } from "@/lib/landing-content";
import LandingNav from "@/components/landing/LandingNav";
import MobileCTABar from "@/components/landing/MobileCTABar";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: landing.meta.title,
  description: landing.meta.description,
  alternates: { canonical: "https://sappy.ch/auto" },
  openGraph: {
    title: landing.meta.title,
    description: landing.meta.description,
    url: "https://sappy.ch/auto",
    siteName: "Sappy",
    locale: "de_CH",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function AutoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // lang override for assistive tech — the root <html> stays "en" for the
    // bilingual portfolio, but this segment is German.
    <div lang="de">
      <LandingNav />
      <main>{children}</main>
      <MobileCTABar />
      <LandingFooter />
    </div>
  );
}
