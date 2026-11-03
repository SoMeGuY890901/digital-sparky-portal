import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  src: "../fonts/InterVariable-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  style: "normal",
  adjustFontFallback: "Arial",
});

export const viewport: Viewport = {
  themeColor: "#080706",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s · Digital Sparky Studios",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
