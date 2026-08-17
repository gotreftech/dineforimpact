import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journey | Dine For Impact",
  description:
    "A record of our tables. A celebration of Nigeria's cultural diversity through food.",
};

function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Dine For Impact logo"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}

const events = [
  {
    num: "01",
    name: "Ebira",
    subtitle: "Kogi State",
    date: "7 July 2025",
    image: "/images/journey-ebira.jpg",
    description:
      "A five-course celebration of Ebira culture, its land, its warmth, and the ingredients that define a people.",
  },
  {
    num: "02",
    name: "Íré Sú",
    subtitle: "The Rainy Season",
    date: "15 September 2025",
    image: "/images/journey-iresu.jpg",
    description:
      "An ode to the rains — the season that feeds the soil, shapes the harvest, and unites communities across Nigeria.",
  },
  {
    num: "03",
    name: "Nyagyi",
    subtitle: "Clay. Grain. Fire.",
    date: "3 November 2025",
    image: "/images/journey-nyagyi.jpg",
    description:
      "An exploration of ancient techniques — clay pots, open fire, and grains that have fed generations.",
  },
  {
    num: "04",
    name: "The Highland Table",
    subtitle: "Plateau State",
    date: "9 February 2026",
    image: "/images/journey-highland.jpg",
    description:
      "A celebration of the highlands — its people, produce, and time-honoured cooking traditions. Reimagined. Researched. Honoured.",
  },
];

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-dine-black">

      {/* Nav */}
      <header className="flex items-center justify-between px-8 md:px-14 py-6 border-b border-white/5">
        <a href="/" className="flex items-center gap-3">
          <LogoIcon size={40} />
          <div className="leading-none">
            <p className="font-display font-bold text-white text-sm tracking-widest uppercase">Dine For</p>
            <p className="font-display font-bold text-white text-sm tracking-widest uppercase">Impact</p>
            <p className="text-[9px] tracking-[0.2em] text-dine-gold uppercase mt-0.5">Food. Culture. Change.</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {["Home", "The Journey", "About", "For Partners", "Contact"].map((label) => (
            <a
              key={label}
              href={label === "Home" ? "/" : "#"}
              className={`text-[11px] tracking-[0.18em] uppercase font-medium transition-colors ${
                label === "The Journey"
                  ? "text-dine-gold border-b border-dine-gold pb-0.5"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/#reserve"
          className="hidden md:inline-flex items-center border border-dine-gold text-dine-gold px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-dine-gold hover:text-black transition-all duration-300"
        >
          Reserve Your Seat
        </a>
      </header>

      {/* Page header */}
      <section className="px-8 md:px-14 py-20 text-center border-b border-white/5">
        <p className="text-dine-gold text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
          A Record of Our Tables
        </p>
        <h1 className="font-display font-black text-white uppercase tracking-widest text-4xl md:text-6xl mb-4">
          The Journey
        </h1>
        <p className="text-gray-500 text-sm tracking-[0.15em] uppercase">
          A Celebration of Our Diversity.
        </p>
      </section>

      {/* Event list */}
      <section className="px-8 md:px-14 py-20 max-w-7xl mx-auto">
        <div className="space-y-0">
          {events.map((event, i) => (
            <div
              key={event.num}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch border-b border-white/5 ${
                i % 2 === 0 ? "" : ""
              }`}
            >
              {/* Image — alternates left/right */}
              <div
                className={`relative w-full aspect-[16/10] lg:aspect-auto lg:min-h-[420px] ${
                  i % 2 !== 0 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center px-10 md:px-16 py-16 bg-dine-dark ${
                  i % 2 !== 0 ? "lg:order-first" : ""
                }`}
              >
                <span className="text-dine-gold/50 font-display font-black text-6xl md:text-8xl leading-none mb-4 select-none">
                  {event.num}
                </span>
                <p className="text-dine-gold text-[10px] tracking-[0.3em] uppercase font-semibold mb-2">
                  {event.subtitle}
                </p>
                <h2 className="font-display font-black text-white uppercase text-3xl md:text-4xl leading-tight mb-2">
                  {event.name}
                </h2>
                <p className="text-gray-500 text-[11px] tracking-widest uppercase mb-6">
                  {event.date}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                  {event.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-white text-[11px] tracking-[0.2em] uppercase font-semibold hover:text-dine-gold transition-colors self-start"
                >
                  View Story
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-dine-dark border-t border-white/5 px-8 md:px-14 py-20 text-center">
        <p className="text-dine-gold text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
          What&apos;s Next
        </p>
        <h2 className="font-display font-black text-white uppercase text-3xl md:text-4xl mb-6">
          The Highland Table
        </h2>
        <p className="text-gray-400 text-sm mb-8">9 February 2026 · Abuja, Nigeria · 25 Seats Only</p>
        <a
          href="/"
          className="inline-flex items-center gap-3 bg-dine-gold text-black px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors duration-300"
        >
          Reserve Your Seat
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-dine-black border-t border-white/5 px-8 md:px-14 py-8 text-center">
        <p className="text-gray-600 text-[10px] tracking-widest">
          © 2026 Dine For Impact. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
