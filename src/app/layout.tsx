import type { Metadata } from "next";
import { Urbanist, Arapey } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const arapey = Arapey({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-arapey",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Sparky Studio",
  description: "Enterprise Architecture & Digital Portals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${arapey.variable} font-sans antialiased bg-[#000000] text-white`}>
        {children}
      </body>
    </html>
  );
}