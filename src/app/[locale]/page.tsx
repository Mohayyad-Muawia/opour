"use client";

import AboutSnippet from "@/components/about snippet";
import Fields from "@/components/fields";
import Hero from "@/components/hero";
import StatusCards from "@/components/status cards";
import Values from "@/components/values";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatusCards />
      <AboutSnippet />
      <Values />
      <Fields />

      {/* Objectives (Summary) */}
      {/* CTA*/}
      {/* Faq */}
    </main>
  );
}
