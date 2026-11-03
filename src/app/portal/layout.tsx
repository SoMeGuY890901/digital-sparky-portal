import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import "./portal.css";

const inter = localFont({
  src: "../../fonts/InterVariable-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  style: "normal",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: {
    default: "Client portal (demo)",
    template: "%s · Portal demo",
  },
  description:
    "Demo client portal for Digital Sparky Studios. Maple Street Supply is fictional sample data.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${GeistSans.variable} ${inter.variable} portal-root`}>
      <a className="portal-btn portal-skip" href="#content">
        Skip to content
      </a>
      {children}
    </div>
  );
}
