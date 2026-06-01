"use client";

import AboutSnippet from "@/components/home/about snippet";
import CTA from "@/components/home/CTA";
import Faq from "@/components/home/faq";
import Fields from "@/components/home/fields";
import Hero from "@/components/home/hero";
import StatusCards from "@/components/home/status cards";
import Values from "@/components/home/values";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatusCards />
      <AboutSnippet />
      <Values />
      <Fields />
      <CTA />
      <Faq />
    </main>
  );
}
