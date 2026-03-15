"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const FeaturedProjects = dynamic(
  () => import("@/components/FeaturedProjects"),
  { ssr: false }
);
const Services = dynamic(() => import("@/components/Services"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
