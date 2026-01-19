"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Zap,
  PhoneCall,
  Headphones,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function AutomateCallsSection() {
  return (
    <section className="w-full  text-white px-6 py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          {/* Left Title Area */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-start gap-4 mb-8"
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter text-white">
                Automate your call <br />
                <span className="text-zinc-600 text-3xl sm:text-4xl md:text-6xl">
                  processes with AI.
                </span>
              </h2>

              <motion.span
                initial={{ rotate: 0, scale: 0.8 }}
                whileInView={{ rotate: -6, scale: 1 }}
                viewport={{ once: true }}
                className="bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl shadow-amber-400/20"
              >
                No-code
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
            >
              Build the perfect AI employee to handle sales, bookings, surveys
              and all your customer support with zero coding skills.
            </motion.p>
          </div>

          {/* Right - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[400px] p-8 rounded-[2.5rem] bg-zinc-900/20 border border-white/5 backdrop-blur-sm relative group"
          >
            <div className="absolute -top-4 -right-4 bg-indigo-600 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-4 h-4 text-white" />
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                  alt="Michael"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div>
                  <p className="font-black text-white text-base tracking-tight">
                    Michael Levitt
                  </p>
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                    CEO @ Techflow
                  </p>
                </div>

                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>

                <p className="text-zinc-400 text-sm font-medium leading-relaxed italic">
                  "Klaryo is like having a powerhouse sales and support team
                  working 24/7 — without missing a beat."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Sales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[3rem] p-10 flex flex-col justify-between min-h-[380px] bg-[#C4B5FD] text-black group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-20 h-20" />
            </div>

            <span className="text-[10px] font-black border border-black/20 rounded-full px-5 py-2 w-fit uppercase tracking-widest bg-white/20 backdrop-blur-md">
              100k+ minutes processed
            </span>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
                Sales and <br /> Cold Calling
              </h3>
              <p className="font-bold text-black/60 text-base leading-relaxed">
                Automate outbound phone calls without human reps and close deals
                at scale.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Booking (Primary Color) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-[3rem] p-10 flex flex-col justify-between min-h-[380px] bg-indigo-600 text-white group relative overflow-hidden shadow-2xl shadow-indigo-600/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
              <Calendar className="w-20 h-20" />
            </div>

            <span className="text-[10px] font-black border border-white/20 rounded-full px-5 py-2 w-fit uppercase tracking-widest bg-black/10 backdrop-blur-md">
              50K+ actions triggered daily
            </span>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
                Booking and <br /> Reminders
              </h3>
              <p className="font-bold text-white/70 text-base leading-relaxed">
                Streamline your appointment booking process and never miss a
                meeting again.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-[3rem] p-10 flex flex-col justify-between min-h-[380px] bg-zinc-900 border border-white/5 text-white group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Headphones className="w-20 h-20" />
            </div>

            <span className="text-[10px] font-black border border-white/10 rounded-full px-5 py-2 w-fit uppercase tracking-widest bg-white/5 backdrop-blur-md">
              5K+ support agents deployed
            </span>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
                Customer <br /> Support
              </h3>
              <p className="font-bold text-zinc-500 text-base leading-relaxed">
                Provide exceptional, 24/7 automated customer support that feels
                personal.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
