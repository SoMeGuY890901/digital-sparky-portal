"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Shield, ArrowRight } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <main className="min-h-screen bg-white text-[#0B132B] selection:bg-[#00F0FF] selection:text-[#0B132B] font-sans relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Navigation */}
      <nav className="relative z-10 w-full px-6 py-6 border-b-2 border-[#0B132B] bg-white/90 backdrop-blur-md flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-black text-2xl tracking-tighter uppercase">Digital Spar<span className="text-[#00F0FF]">k</span>y</span>
          <span className="text-[10px] tracking-[0.4em] font-bold pl-1">Studio</span>
        </div>
        <button className="hidden sm:flex items-center gap-2 bg-[#0B132B] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#00F0FF] hover:text-[#0B132B] transition-colors border-2 border-[#0B132B]">
          Client Portal <ArrowRight size={14} />
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Copywriting */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={itemVariants} className="inline-block bg-[#00F0FF] border-2 border-[#0B132B] px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_#0B132B]">
            Enterprise Infrastructure
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05]">
            Frictionless <br /> <span className="bg-[#0B132B] text-white px-2">Competence.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg font-medium max-w-xl text-gray-700">
            We engineer secure Firebase backends, AI-assisted workflows, and custom operational portals. No generic templates. Just heavy-duty digital plumbing for high-growth enterprises.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#0B132B] text-white px-8 py-4 text-sm font-black uppercase tracking-widest border-2 border-[#0B132B] shadow-[6px_6px_0px_#00F0FF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#00F0FF] transition-all">
              Initialize Project
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Animated Architecture Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative bg-[#0B0F14] border-2 border-[#0B132B] p-6 shadow-[12px_12px_0px_#0B132B] min-h-[400px] flex flex-col justify-center"
        >
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-mono text-emerald-400">SYSTEM_ONLINE</span>
          </div>

          <div className="space-y-4">
            <motion.div whileHover={{ x: 5 }} className="bg-slate-900 border border-slate-700 p-4 rounded flex items-center gap-4">
              <div className="bg-[#00F0FF]/20 p-2 rounded text-[#00F0FF]"><Database size={20} /></div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest">Firestore Sub-Graph</p>
                <p className="text-[10px] text-slate-400 font-mono">14ms read latency</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="bg-slate-900 border border-slate-700 p-4 rounded flex items-center gap-4">
              <div className="bg-emerald-500/20 p-2 rounded text-emerald-400"><Shield size={20} /></div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest">Auth Protocol</p>
                <p className="text-[10px] text-slate-400 font-mono">Role-based access active</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="bg-slate-900 border border-slate-700 p-4 rounded flex items-center gap-4">
              <div className="bg-amber-500/20 p-2 rounded text-amber-400"><Terminal size={20} /></div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest">Edge Deployment</p>
                <p className="text-[10px] text-slate-400 font-mono">Vercel Network • US-EAST</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}