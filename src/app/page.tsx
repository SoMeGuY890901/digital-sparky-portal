"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Database } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter Website",
    price: "$1,500–$2,500",
    description: "A clean, fast, mobile-friendly site for a small business.",
  },
  {
    name: "Growth Website",
    price: "$3,500–$5,000",
    description: "More pages, custom design, SEO setup, and lead capture.",
  },
  {
    name: "Pro Website + Automation",
    price: "$7,500–$12,000",
    description: "Online booking, payments, client portals, or AI workflows.",
  },
  {
    name: "Care Plan",
    price: "$100–$200/mo",
    description: "Hosting, security, updates, backups, and small edits.",
  },
];

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black font-sans relative overflow-hidden">
      
      {/* Ambient Premium Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 w-full px-8 py-6 flex justify-between items-center border-b border-white/10">
        <div className="flex flex-col">
          <span className="font-semibold text-xl tracking-wide uppercase">Digital Sparky</span>
        </div>
        <button className="hidden sm:flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
          Client Portal <ArrowRight size={16} />
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Column: Copywriting */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-300">
            <Sparkles size={14} /> Enterprise Infrastructure
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.1]">
            Frictionless <br /> 
            <span className="font-serif italic text-gray-400">Competence.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg font-light max-w-xl text-gray-400 leading-relaxed">
            We engineer secure Firebase backends, AI-assisted workflows, and custom operational portals. No generic templates. Just heavy-duty digital plumbing for high-growth enterprises.
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-4">
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors">
              Initialize Project <ArrowRight size={16} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Glassmorphism Graphic */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative"
        >
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">System Online</span>
            </div>

            <div className="space-y-4 mt-6">
              <div className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors p-5 rounded-2xl flex items-center gap-5">
                <div className="bg-white/10 p-3 rounded-xl text-white"><Database size={20} strokeWidth={1.5} /></div>
                <div>
                  <p className="text-sm font-medium text-white tracking-wide">Firestore Sub-Graph</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">14ms read latency</p>
                </div>
              </div>

              <div className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors p-5 rounded-2xl flex items-center gap-5">
                <div className="bg-white/10 p-3 rounded-xl text-white"><Cpu size={20} strokeWidth={1.5} /></div>
                <div>
                  <p className="text-sm font-medium text-white tracking-wide">Edge Deployment</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">Vercel Network • US-EAST</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-300">
            Simple, honest pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tighter leading-[1.1]">
            Fixed scope. <span className="font-serif italic text-gray-400">Clear numbers.</span>
          </h2>
          <p className="text-lg font-light text-gray-400 leading-relaxed">
            Every project is quoted at a fixed price after a free discovery call.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
              className="flex flex-col border border-white/10 bg-[#0A0A0A] rounded-3xl p-6 sm:p-8"
            >
              <h3 className="text-sm font-medium tracking-wide text-white">{tier.name}</h3>
              <p className="mt-6 text-2xl sm:text-3xl font-light tracking-tight text-white">
                {tier.price}
              </p>
              <p className="mt-4 text-sm font-light text-gray-400 leading-relaxed flex-1">
                {tier.description}
              </p>
              <Link
                href="/contact"
                aria-label={`Get a free quote for ${tier.name}`}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors"
              >
                Get a free quote <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}