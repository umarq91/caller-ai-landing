"use client";
import { motion, Variants } from "framer-motion";
import { Globe, Zap } from "lucide-react";
import { Navbar } from "./header";

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden px-6">
      <Navbar />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Main Center Indigo Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full opacity-100" />

        {/* Characterful Dark Greenish Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full opacity-75" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative"
      >
        {/* Floating "Goofy" Badge Top */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Globe className="w-3 h-3" />
            Klaryo - AI Voice agents
          </span>
        </motion.div>

        {/* Main Title Area with Characterful Floating Tags */}
        <div className="relative inline-block mb-10">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white"
          >
            Your Smartest <br />
           Voice Hire
          </motion.h1>

          {/* Creative Floating Tag: Human-Like */}
          <motion.div
            initial={{ opacity: 0, rotate: 8, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 6, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
            className="absolute -top-4 -right-8 md:-right-16 px-4 py-1.5 bg-indigo-600 text-white rounded-full shadow-xl shadow-indigo-600/20 hidden sm:block"
          >
            <span className="text-[11px] font-black italic whitespace-nowrap uppercase tracking-widest">
              Truly Human
            </span>
          </motion.div>

          {/* Creative Floating Tag: Outbound Elite */}
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -4, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
            className="absolute -bottom-2 -left-12 md:-left-24 px-4 py-1.5 bg-amber-400 text-black rounded-full shadow-xl shadow-amber-400/20 hidden sm:block"
          >
            <span className="text-[11px] font-black italic whitespace-nowrap uppercase tracking-widest">
              Outbound Scaled
            </span>
          </motion.div>

          {/* Hand-drawn Circle Highlight (SVG) */}
          <motion.div
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute inset-0 -m-4 pointer-events-none opacity-20 hidden lg:block"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full stroke-white fill-none stroke-[0.2]"
              preserveAspectRatio="none"
            >
              <path d="M5,50 Q5,5 50,5 Q95,5 95,50 Q95,95 50,95 Q5,95 5,50" />
            </svg>
          </motion.div>
        </div>

        <motion.p
          variants={itemVariants}
          className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium tracking-tight leading-relaxed"
        >
          Conversational AI that captures every nuance. Perfectly human voices
          for your outbound growth. Scalable, safe, and indistinguishable.
        </motion.p>

        {/* Minimal Activity Feed (Representing Outbound activity) */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 max-w-xs mx-auto"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md">
            <div className="relative">
              <div className="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-500">
                <Zap className="w-5 h-5" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#030303] animate-pulse" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                Real-time Latency
              </p>
              <p className="text-sm font-black text-white italic">
                48ms response
              </p>
            </div>
          </div>

          {/* Handwriting Accent */}
          <div className="relative mt-2">
            <svg
              width="60"
              height="40"
              viewBox="0 0 60 40"
              fill="none"
              className="text-zinc-700 absolute -top-8 -right-12"
            >
              <path
                d="M10 30 Q30 5 50 15M50 15L42 12M50 15L48 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="font-handwriting text-xl text-zinc-500 transform -rotate-6">
              Trained on your data!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
