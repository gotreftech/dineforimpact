import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dine For Impact | Food. Culture. Change.",
  description:
    "A reservation-only fine-dining series celebrating Nigeria's rich cultural diversity through food, stories, and community.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body className="bg-dine-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}