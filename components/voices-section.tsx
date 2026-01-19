"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Zap, MousePointer2, Sparkles } from "lucide-react";

export const VoiceSection = () => {
  return (
    <section className="w-full px-6 pb-32 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT CARD: NEURAL VOICES */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-zinc-900/40 border border-white/5 p-10 lg:p-14 group min-h-[450px] flex flex-col justify-between"
        >
          {/* Subtle Indigo Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <Layers className="w-3 h-3" />
              Library Scale
            </div>

            <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
              400+ Neural <br />
              <span className="text-zinc-600">AI Voices.</span>
            </h3>

            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-sm">
              Deliver high-quality conversations with 400 human-like neural
              voices and 140+ regional accents.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=voice${i}`}
                    alt="voice"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-indigo-600 flex items-center justify-center text-[10px] font-black text-white">
                +136
              </div>
            </div>
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
              Global Coverage
            </span>
          </div>

          {/* Background Decorative SVG */}
          <motion.img
            initial={{ rotate: -12, y: 50, opacity: 0.5 }}
            whileInView={{ y: 20, opacity: 0.8 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://callfluent.com/wp-content/themes/callfluent/images/ai-voice.svg"
            alt="Neural voices UI"
            className="absolute -right-20 -bottom-10 w-[400px] pointer-events-none grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
          />
        </motion.div>

        {/* RIGHT CARD: INTEGRATION */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] p-10 lg:p-14 flex flex-col justify-between min-h-[450px] bg-zinc-950 border border-white/5 relative group overflow-hidden shadow-2xl"
        >
          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.05)_0%,transparent_50%)]" />

          <div className="relative z-10 flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-zinc-900/80 border border-white/5 rounded-full text-xs font-black text-white uppercase tracking-widest shadow-xl backdrop-blur-md">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              1-Click Klaryo Integration
            </div>

            <div>
              <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                Sync & <br />
                <span className="text-zinc-600">Scale.</span>
              </h3>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-md">
                Clone your own brand voice or generate bespoke accents with our
                seamless 1-click integration. Ready in seconds.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact-section"
              className="w-full sm:w-auto px-8 py-5 bg-indigo-600 text-white text-xs font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest shadow-xl shadow-indigo-600/20"
            >
              <MousePointer2 className="w-4 h-4" />
              Try a conversation
            </a>

            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-xl border border-white/5">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                Enterprise Ready
              </span>
            </div>
          </div>

          {/* Goofy Hand-drawn detail */}
          <div className="absolute bottom-10 right-10 opacity-20 hidden md:block group-hover:opacity-40 transition-opacity">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              className="text-zinc-500 rotate-12"
            >
              <circle
                cx="30"
                cy="30"
                r="25"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <path
                d="M30 15 L30 45 M15 30 L45 30"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
