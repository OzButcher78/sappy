import type { Metadata } from "next";
import { Sora, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-clash",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-cabinet",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sappy — Digital Craftsmanship | Dieter Balmer",
  description:
    "Premium software, apps & digital experiences — designed and built in Switzerland with precision and care. By Dieter Balmer.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "Switzerland",
    "Dieter Balmer",
    "Sappy",
    "digital craftsmanship",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sappy — Digital Craftsmanship",
    description:
      "Premium software, apps & digital experiences built in Switzerland.",
    url: "https://sappy.ch",
    siteName: "Sappy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${dmSans.variable} ${geistMono.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
