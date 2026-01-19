"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="w-full px-6 py-32 relative flex flex-col justify-center items-center overflow-hidden ">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-indigo-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <MessageSquare className="w-3 h-3" />
            Get in touch
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            Let's Start a <br />
            <span className="text-zinc-600">Conversation.</span>
          </h2>

          {/* Goofy Tag */}
          <motion.div
            animate={{ rotate: [-2, 2, -2], x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-1/4 hidden lg:flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full shadow-2xl rotate-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Talk to a human*
            </span>
          </motion.div>

          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Ready to transform your interactions? Our team is standing by to
            help you scale your voice operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Mail, label: "Email Us", val: "hello@klaryo.com" },
                { icon: Phone, label: "Call Us", val: "+1 (555) 123-AI" },
                { icon: MapPin, label: "Visit Us", val: "San Francisco, CA" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[2rem] bg-zinc-900/20 border border-white/5 group hover:border-white/10 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                    {item.label}
                  </h3>
                  <p className="text-white font-bold tracking-tight">
                    {item.val}
                  </p>
                </div>
              ))}

              {/* Special Demo Card */}
              <div className="p-6 rounded-[2rem] bg-indigo-600 text-white flex flex-col justify-between shadow-xl shadow-indigo-600/20">
                <div>
                  <h3 className="text-lg font-black tracking-tighter mb-2">
                    Book a Demo
                  </h3>
                  <p className="text-white/70 text-xs font-medium leading-relaxed">
                    See Klaryo in action with a tailored walkthrough.
                  </p>
                </div>
                <button className="mt-6 w-full py-3 bg-white text-black text-[10px] font-black rounded-full uppercase tracking-widest hover:bg-zinc-100 transition-colors">
                  Schedule Now
                </button>
              </div>
            </div>

            {/* Handwriting Note */}
            <div className="relative pl-12 pt-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="text-zinc-800 absolute top-0 left-0 rotate-12"
              >
                <path
                  d="M5 20 Q20 5 35 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="font-handwriting text-2xl text-zinc-600">
                *Or an AI that sounds exactly like one.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[3rem] bg-zinc-900/10 border border-white/5 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest pl-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest pl-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest pl-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Acme Corp"
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest pl-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help your business?"
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-100 transition-all uppercase tracking-widest text-xs shadow-xl shadow-white/5"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
