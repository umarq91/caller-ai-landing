"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, MessageSquare, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote:
      "The low latency is actually insane. We switched from a legacy provider and our conversion rates jumped by 40% because customers actually feel like they're talking to a person.",
    name: "Annette Black",
    company: "Sony",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Annette",
    size: "large",
    tag: "Scale Master",
  },
  {
    quote:
      "Klaryo handles interruptions better than most of my human SDRs. It's spooky how good it is.",
    name: "Dianne Russell",
    company: "McDonald's",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dianne",
    size: "small",
    tag: "Game Changer",
  },
  {
    quote:
      "We've automated 80% of our inbound lead qualification. The AI agents sound warmer than our previous scripts.",
    name: "Cameron Williamson",
    company: "IBM",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cameron",
    size: "small",
    tag: "Efficiency Plus",
  },
  {
    quote:
      "The emotional intelligence is the real winner. It detects when a customer is frustrated and shifts to a more empathetic tone instantly.",
    name: "Albert Flores",
    company: "Louis Vuitton",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Albert",
    size: "large",
    tag: "Verified EQ",
  },
  {
    quote: "Setup took us less than 30 minutes. We were making calls by lunch.",
    name: "Robert Fox",
    company: "MasterCard",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    size: "small",
    tag: "Fast Setup",
  },
  {
    quote:
      "Finally, an AI voice that doesn't sound like a GPS navigator from 2008.",
    name: "Cody Fisher",
    company: "Apple",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cody",
    size: "small",
    tag: "Voice Elite",
  },
  {
    quote:
      "Our inbound call handling improved instantly. Customers think it's a real team member.",
    name: "Ava Martinez",
    company: "Zendesk",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sb",
    size: "small",
    tag: "Human-Like AI",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const isLarge = testimonial.size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative rounded-[2.5rem] border border-white/5 p-8 flex flex-col justify-between group transition-all ${
        isLarge ? "bg-zinc-900/20 md:col-span-2 row-span-1" : "bg-zinc-950/40"
      }`}
    >
      {/* Glow effect on hover for large cards */}
      {isLarge && (
        <div className="absolute inset-0 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] -z-10" />
      )}

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] font-black text-zinc-400 uppercase tracking-widest">
            {testimonial.tag}
          </span>
        </div>

        <p
          className={`text-white leading-relaxed tracking-tight font-medium ${isLarge ? "text-2xl" : "text-base"}`}
        >
          "{testimonial.quote}"
        </p>
      </div>

      <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10"
        />
        <div>
          <h4 className="text-sm font-black text-white">{testimonial.name}</h4>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            {testimonial.company}
          </p>
        </div>
      </div>

      {/* Abstract icon for large cards */}
      {isLarge && (
        <Quote className="absolute bottom-6 right-8 w-12 h-12 text-white/5 -z-10" />
      )}
    </motion.div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 relative  overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-indigo-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <MessageSquare className="w-3 h-3" />
            Social Proof
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
            Conversations that <br />
            <span className="text-zinc-600">close the gap.</span>
          </h2>

          {/* Goofy Floating Tag */}
          <motion.div
            animate={{ rotate: [-2, 2, -2], y: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 left-1/4 hidden lg:flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">
              Scaling Fast!
            </span>
          </motion.div>

          {/* Handwriting Accent */}
          <div className="absolute -bottom-8 right-1/4 hidden md:block">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-zinc-700 -rotate-12 opacity-50"
            >
              <path
                d="M5 10 Q20 30 35 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="font-handwriting text-xl text-zinc-600 transform rotate-6">
              Actual humans!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
