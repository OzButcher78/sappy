import LandingHero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Proof from "@/components/landing/Proof";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";

export default function AutoLandingPage() {
  return (
    <>
      <LandingHero />
      <Problem />
      <Proof />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
