import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a free quote · Digital Sparky Studio",
  description:
    "Every project is quoted at a fixed price after a free discovery call.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <nav className="relative z-10 w-full px-8 py-6 flex justify-between items-center border-b border-white/10">
        <Link href="/" className="font-semibold text-xl tracking-wide uppercase">
          Digital Sparky
        </Link>
        <Link
          href="/#pricing"
          className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Pricing
        </Link>
      </nav>

      <div className="relative z-10 max-w-3xl mx-auto px-8 py-24 sm:py-32 space-y-8">
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-300">
          Free discovery call
        </div>
        <h1 className="text-5xl sm:text-6xl font-light tracking-tighter leading-[1.1]">
          Get a free <span className="font-serif italic text-gray-400">quote.</span>
        </h1>
        <p className="text-lg font-light text-gray-400 leading-relaxed max-w-xl">
          Every project is quoted at a fixed price after a free discovery call.
          Tell us which package fits — Starter Website, Growth Website, Pro
          Website + Automation, or the monthly Care Plan — and we will reply
          with a clear plan.
        </p>
        <a
          href="mailto:chris@digitalsparkystudio.com"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors"
        >
          Email the studio <ArrowRight size={16} />
        </a>
        <p className="text-sm font-light text-gray-500">
          chris@digitalsparkystudio.com
        </p>
      </div>
    </main>
  );
}
