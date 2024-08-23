"use client";

import HeaderSection from "./components/Sections/Header";
import ChartsSection from "./components/Sections/Charts";
import CardsSection from "./components/Sections/Cards";
import MiscellaneousSection from "./components/Sections/Miscellaneous";

export default function Page() {
  return (
    <>
      <HeaderSection />
      <main>
        <section className="mt-1 charts-summary">
          <ChartsSection />
        </section>
        <section className="mt-4 cards-summary">
          <CardsSection />
        </section>
        <section className="mt-5 mb-5">
          <MiscellaneousSection />
        </section>
      </main>
    </>
  );
}
