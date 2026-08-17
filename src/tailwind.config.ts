import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The deep, near-black canvas
        'dine-charcoal': '#0A0A0A',
        // The warm gold accent for buttons and highlights
        'dine-gold': '#C5A059',
        // The secondary clay red from your logo
        'dine-clay': '#8C3B29', 
        // The olive green from your logo
        'dine-olive': '#5B6E44',
      },
      fontFamily: {
        // Maps the fonts we configured in layout.tsx to Tailwind utility classes
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      letterSpacing: {
        // Custom wide tracking for those high-end 'MENU' or 'RSVP' labels
        widest: '.25em', 
      }
    },
  },
  plugins: [],
};
export default config;