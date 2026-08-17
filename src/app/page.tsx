// ─── Dine For Impact — Home Page ─────────────────────────────────────────────
import Image from "next/image";

const ARROW = (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Logo ───────────────────────────────────────────────────────────────────── */
function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <Image src="/logo.png" alt="Dine For Impact logo"
      width={size} height={size} className="object-contain" priority />
  );
}

/* ─── Nav ────────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-5"
      style={{ background: "linear-gradient(to bottom, rgba(9,8,7,0.92) 0%, transparent 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <LogoIcon size={44} />
          <div className="leading-none">
            <p className="font-display font-bold text-dine-ivory text-sm tracking-widest uppercase">Dine For</p>
            <p className="font-display font-bold text-dine-ivory text-sm tracking-widest uppercase">Impact</p>
            <p className="text-[9px] tracking-[0.22em] text-dine-gold uppercase mt-0.5">Food. Culture. Change.</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: "Home", href: "/", active: true },
            { label: "The Journey", href: "/journey" },
            { label: "About", href: "#" },
            { label: "For Partners", href: "#" },
            { label: "Contact", href: "#" },
          ].map(({ label, href, active }) => (
            <a key={label} href={href}
              className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors ${
                active
                  ? "text-dine-gold border-b border-dine-gold pb-0.5"
                  : "text-dine-gray hover:text-dine-ivory"
              }`}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#reserve"
          className="hidden md:inline-flex items-center border border-dine-gold text-dine-gold px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-dine-gold hover:text-dine-black transition-all duration-300">
          Reserve Your Seat
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ height: "650px" }}>
      {/*
        Plain <img> — not next/image fill, not CSS background-image.
        Both of those are painted at device-pixel level and don't reflow on
        browser zoom. A real DOM <img> scales with everything else on the page.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-dining.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(9,8,7,0.9) 38%, rgba(9,8,7,0.3) 100%)" }} />

      {/* Shared container — matches max-w-[1400px] mx-auto px-8 md:px-14 used by all other sections */}
      <div className="absolute inset-0 z-10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 h-full relative">

          {/* Left — headline pinned to bottom of container */}
          <div className="absolute bottom-0 left-0 pb-16 max-w-2xl">
            {/* Rotating logo above headline */}
            <div className="mb-5">
              <Image
                src="/images/dfi-logo-rotate.png"
                alt="Dine For Impact"
                width={72}
                height={107}
                className="animate-spin-slow"
              />
            </div>
            <h1 className="font-display font-black text-dine-ivory uppercase leading-none tracking-tight whitespace-nowrap"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.8rem)" }}>
              Food, Culture. Change.
            </h1>
            <span className="gold-line mt-5 mb-5 block" />
            <p className="text-dine-gray text-base md:text-lg leading-relaxed mb-7">
              Five courses. One community.<br />A seat at the table.
            </p>
            <a href="#discover"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-dine-ivory font-medium hover:text-dine-gold transition-colors">
              <span>Scroll To Discover</span>
              <span className="w-7 h-7 rounded-full border border-dine-ivory/60 flex items-center justify-center hover:border-dine-gold transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2v8M6 10l-3-3M6 10l3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}

/* ─── Last Table ─────────────────────────────────────────────────────────────── */
function LastTable() {
  return (
    <section id="discover" className="bg-dine-dark py-20 px-8 md:px-14">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-dine-gold text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
            The Last Table
          </p>
          <h2 className="font-display font-black text-dine-ivory uppercase text-4xl md:text-5xl leading-tight mb-2">
            The Highland<br />Table
          </h2>
          <p className="text-dine-clay text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            Inspired by Plateau State
          </p>
          <p className="text-dine-gray text-sm leading-relaxed mb-8 max-w-xs">
            A celebration of the highlands—its people, produce and time-honoured
            cooking traditions. Reimagined. Researched. Honoured.
          </p>
          <ul className="space-y-3 text-sm text-dine-ivory/80">
            {[
              { icon: "calendar", label: "9 February 2026" },
              { icon: "pin", label: "Abuja, Nigeria" },
              { icon: "person", label: "25 Seats Only" },
            ].map(({ icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-dine-gold flex-shrink-0">
                  {icon === "calendar" && (<><rect x="1" y="2" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" /><path d="M4 1v2M10 1v2M1 5h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></>)}
                  {icon === "pin" && (<><path d="M7 1C4.8 1 3 2.8 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.2-1.8-4-4-4Z" stroke="currentColor" strokeWidth="1.2" /><circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2" /></>)}
                  {icon === "person" && (<><circle cx="7" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.2" /><path d="M1 13c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></>)}
                </svg>
                <span className="tracking-wide uppercase text-[11px]">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Centre — dish image, full bleed with edge blends */}
        <div className="relative w-full h-80 lg:h-full lg:min-h-[420px] overflow-hidden">
          <Image
            src="/images/highland-dish.jpg"
            alt="The Highland Table dish"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 33vw"
            quality={90}
          />
          {/* Blend all four edges into the section background #0e0c0a */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `
              linear-gradient(to right,  #0e0c0a 0%, transparent 25%, transparent 75%, #0e0c0a 100%),
              linear-gradient(to bottom, #0e0c0a 0%, transparent 20%, transparent 80%, #0e0c0a 100%)
            `,
          }} />
        </div>

        {/* Right */}
        <div>
          <p className="text-dine-gold text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
            Reservation Only
          </p>
          <h3 className="font-display font-black text-dine-ivory uppercase text-3xl md:text-4xl leading-tight mb-5">
            25 Seats.<br />One Night.<br />One Story.
          </h3>
          <p className="text-dine-gray text-sm leading-relaxed mb-8 max-w-xs">
            Secure your seat at the table. Payment is required to confirm your reservation.
          </p>
          <a href="/journey"
            className="inline-flex items-center gap-3 bg-dine-gold text-dine-black px-7 py-4 text-[11px] tracking-[0.22em] uppercase font-bold hover:bg-dine-ivory transition-colors duration-300 mb-4">
            See the Journey {ARROW}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Philosophy ─────────────────────────────────────────────────────────────── */
function Philosophy() {
  return (
    <section className="bg-dine-black py-20">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

        {/* Col 1 — image (flipped: was col-2) */}
        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[680px]">
          <Image src="/images/philosophy-dish.jpg"
            alt="Dine For Impact dish — a bowl being plated with sauce"
            fill className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw" quality={90} />
          {/* Gradient fades right → dark so text on the right stays readable */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to left, #090807 0%, rgba(9,8,7,0.7) 20%, rgba(9,8,7,0.15) 50%, rgba(9,8,7,0) 70%)",
          }} />
        </div>

        {/* Col 2 — text (flipped: was col-1) */}
        <div className="py-10 lg:pl-16">
          <p className="text-dine-gold text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
            Our Philosophy
          </p>
          <h2 className="font-display font-black uppercase leading-[1.05] mb-8"
            style={{ fontSize: "clamp(1.3rem, 2.2vw, 2rem)" }}>
            <span className="text-dine-ivory">We don&apos;t just<br />serve food.</span><br />
            <span className="text-dine-gold">We tell stories<br />through it.</span>
          </h2>
          <div className="space-y-4 text-dine-gray text-sm leading-relaxed max-w-sm mb-10">
            <p>Dine For Impact is a pop-up fine-dining series that shines a light on Nigeria&apos;s rich cultural diversity.</p>
            <p>Each dinner is built around one community—its land, its ingredients, its traditions and its people.</p>
            <p>A shared meal becomes a bridge between heritage and the future.</p>
          </div>
          <p className="text-dine-gold text-[11px] tracking-[0.3em] uppercase font-semibold">
            Food. Culture. Change.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── The Journey ────────────────────────────────────────────────────────────── */
const journeyEvents = [
  { num: "01", name: "Ebira",            subtitle: "Kogi State",        date: "7 July 2025",       image: "/images/journey-ebira.jpg" },
  { num: "02", name: "Íré Sú",           subtitle: "The Rainy Season",  date: "15 September 2025", image: "/images/journey-iresu.jpg" },
  { num: "03", name: "Nyagyi",           subtitle: "Clay. Grain. Fire.", date: "3 November 2025",   image: "/images/journey-nyagyi.jpg" },
  { num: "04", name: "The Highland Table", subtitle: "Plateau State",   date: "9 February 2026",   image: "/images/journey-highland.jpg" },
];

function JourneySection() {
  return (
    <section className="bg-dine-dark py-20 px-8 md:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display font-black text-dine-ivory uppercase tracking-widest text-3xl md:text-4xl mb-3">
            The Journey
          </h2>
          <p className="text-dine-gray text-[11px] tracking-[0.25em] uppercase font-medium">
            A Record of Our Tables. A Celebration of Our Diversity.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {journeyEvents.map((event) => (
            <div key={event.num} className="group cursor-pointer">
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-4">
                <Image src={event.image} alt={`${event.name} — Dine For Impact`}
                  fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-dine-black/80 via-dine-black/10 to-dine-black/20 pointer-events-none" />
                <span className="absolute top-3 left-4 text-dine-ivory/70 font-display font-bold text-lg tracking-widest">
                  {event.num}
                </span>
                <div className="absolute inset-0 bg-dine-gold/0 group-hover:bg-dine-gold/8 transition-all duration-300 pointer-events-none" />
              </div>
              <p className="text-dine-ivory font-display font-bold uppercase tracking-wide text-base leading-tight mb-1">
                {event.name}
              </p>
              <p className="text-dine-clay text-[10px] tracking-[0.22em] uppercase font-semibold mb-1">
                {event.subtitle}
              </p>
              <p className="text-dine-gray text-[10px] tracking-widest uppercase mb-3">
                {event.date}
              </p>
              <a href="#"
                className="inline-flex items-center gap-2 text-dine-ivory text-[10px] tracking-[0.2em] uppercase font-semibold hover:text-dine-gold transition-colors">
                View Story {ARROW}
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="/journey"
            className="inline-flex items-center gap-3 border border-dine-gold text-dine-gold px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-dine-gold hover:text-dine-black transition-all duration-300">
            Explore the Full Journey {ARROW}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Chef ───────────────────────────────────────────────────────────────────── */
function Chef() {
  return (
    <section className="bg-dine-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_2.2fr_1.5fr]" style={{ minHeight: "440px" }}>

        {/* Col 1 — portrait */}
        <div className="relative min-h-[340px] lg:min-h-0">
          <Image src="/images/chef-muse.jpg"
            alt="Chef Muse — Founder and Executive Chef of Dine For Impact"
            fill className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 33vw" quality={90} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent 55%, #0e0c0a 100%)" }} />
        </div>

        {/* Col 2 — text */}
        <div className="flex flex-col justify-center px-10 md:px-14 py-14">
          <p className="text-dine-gold text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
            Meet the Chef
          </p>
          <h2 className="font-display font-black text-dine-ivory uppercase tracking-widest text-4xl md:text-5xl mb-5">
            Chef Muse
          </h2>
          <div className="space-y-3 text-dine-gray text-sm leading-relaxed mb-8 max-w-sm">
            <p className="text-dine-ivory font-medium text-base">Founder. Executive Chef. Storyteller.</p>
            <p>I design and cook every menu after deep research into the community we honour for that table.</p>
            <p>My goal is simple—create unforgettable experiences that celebrate our heritage and inspire change.</p>
          </div>
          <a href="#"
            className="inline-flex items-center gap-3 border border-dine-gold text-dine-gold px-7 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-dine-gold hover:text-dine-black transition-all duration-300 self-start">
            More About Chef Muse {ARROW}
          </a>
        </div>

        {/* Col 3 — signature */}
        <div className="hidden lg:flex items-center justify-center px-8">
          <p className="text-dine-gold select-none" style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(3rem, 4vw, 4.5rem)",
            lineHeight: 1.2,
            opacity: 0.85,
          }}>
            Chef Muse
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter ─────────────────────────────────────────────────────────────── */
function Newsletter() {
  return (
    <section className="bg-dine-dark border-t border-dine-divider py-10 px-8 md:px-14">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 md:w-64">
          <p className="text-dine-gold text-[10px] tracking-[0.28em] uppercase font-semibold mb-1">
            Join Our Table
          </p>
          <p className="text-dine-gray text-xs leading-relaxed">
            Be the first to know about new tables, stories and exclusive updates.
          </p>
        </div>

        <div className="flex flex-1 max-w-lg w-full">
          <input type="email" placeholder="Enter your email address"
            className="flex-1 bg-transparent border border-dine-divider border-r-0 px-5 py-3 text-sm text-dine-ivory placeholder-dine-gray/50 focus:outline-none focus:border-dine-gold transition-colors" />
          <button className="bg-dine-gold text-dine-black px-6 py-3 text-[10px] tracking-[0.22em] uppercase font-bold hover:bg-dine-ivory transition-colors duration-300 whitespace-nowrap flex-shrink-0">
            Join the List
          </button>
        </div>

        <div className="flex items-center gap-5 md:ml-auto flex-shrink-0">
          {[
            { label: "Instagram", path: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></> },
            { label: "Facebook",  path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" /> },
            { label: "WhatsApp",  path: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" /> },
          ].map(({ label, path }) => (
            <a key={label} href="#" aria-label={label}
              className="text-dine-gray hover:text-dine-gold transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {path}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-dine-dark border-t border-dine-divider pt-16 pb-8 px-8 md:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <LogoIcon size={28} />
              <div className="leading-none">
                <p className="font-display font-bold text-dine-ivory text-xs tracking-widest uppercase">Dine For</p>
                <p className="font-display font-bold text-dine-ivory text-xs tracking-widest uppercase">Impact</p>
                <p className="text-[8px] tracking-[0.22em] text-dine-gold uppercase mt-0.5">Food. Culture. Change.</p>
              </div>
            </a>
          </div>

          {[
            { title: "Navigation", links: ["Home", "The Journey", "About", "For Partners", "Contact"] },
            { title: "Info",       links: ["FAQs", "The Journey", "Terms & Conditions", "Privacy Policy"] },
            { title: "Contact",    links: ["hello@dineforimpact.com", "Abuja, Nigeria"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <p className="text-[10px] tracking-[0.28em] uppercase text-dine-gold font-semibold mb-5">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-dine-gray text-xs hover:text-dine-ivory transition-colors tracking-wide">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dine-divider pt-8 text-center">
          <p className="text-dine-gray/50 text-[10px] tracking-widest">
            © 2026 Dine For Impact. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LastTable />
      <Philosophy />
      <JourneySection />
      <Chef />
      <Newsletter />
      <Footer />
    </>
  );
}
