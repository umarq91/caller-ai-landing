"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className=" py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[250px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 mb-12"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center shadow-xl">
              <span className="font-black text-sm italic">K</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              Klaryo
            </span>
          </div>

          <h3 className="text-zinc-500 text-sm md:text-base font-medium max-w-md mx-auto leading-relaxed">
            The future of voice is human. <br className="hidden sm:block" />
            Empowering businesses with conversational AI that understands
            nuance.
          </h3>
        </motion.div>

        {/* Simplified Outro Nav */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]"
        >
          <a href="#about-us" className="hover:text-white transition-colors">
            Platform
          </a>
          <a href="#voice-section" className="hover:text-white transition-colors">
            Voices
          </a>

          <a href="contact-us" className="hover:text-white transition-colors">
            Contact
          </a>
        </motion.div>

        {/* Socials */}
        <div className="flex items-center gap-8 mb-16">
          {[Twitter, Github, Linkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -2, color: "#fff" }}
              className="text-zinc-700 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Final Bottom Row */}
        <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[9px] font-black text-zinc-700 uppercase tracking-widest">
            <span>© 2025 Klaryo Inc.</span>
            <div className="w-1 h-1 bg-zinc-800 rounded-full" />
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>

          <div className="flex items-center gap-4 text-[9px] font-black text-zinc-700 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>Operational</span>
            </div>
            <span className="opacity-30">/</span>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <Globe className="w-3 h-3" />
              <span>Global</span>
            </div>
          </div>
        </div>

        {/* Small Handwriting Detail */}
        <div className="mt-12 opacity-20">
          <p className="font-handwriting text-lg text-zinc-500 italic">
            Built for scale, designed for connection.
          </p>
        </div>
      </div>
    </footer>
  );
};
