"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Klaryo and who is it for?",
    answer:
      "Klaryo is an AI-powered voice agent platform designed for businesses that want to automate phone interactions while maintaining a human touch. It's perfect for customer service teams, sales organizations, and any business looking to handle high call volumes with natural-sounding AI agents.",
  },
  {
    question: "How natural do the voice agents sound?",
    answer:
      "Our voice agents are powered by cutting-edge AI technology that creates indistinguishable human-like conversations. They understand context, handle interruptions naturally, adapt tone based on the conversation, and speak in multiple languages with native-like fluency.",
  },
  {
    question: "Can I integrate Klaryo with my existing CRM?",
    answer:
      "Yes! Klaryo offers one-click integrations with popular CRM platforms including Salesforce, HubSpot, Zendesk, and many more. All call data, transcripts, and insights automatically sync with your existing workflows and tools.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes up to 100 minutes of calling per month, access to 5+ natural voices, basic call analytics, single CRM integration, and email support. It's perfect for small businesses getting started with AI voice agents.",
  },
  {
    question: "Is my customer data secure with Klaryo?",
    answer:
      "Absolutely. We use enterprise-grade security measures including end-to-end encryption, GDPR and HIPAA compliance, and regular security audits. Your call data is never shared with third parties.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div
      className={`w-full transition-all duration-300 rounded-[2rem] border ${
        isOpen
          ? "bg-zinc-900/40 border-white/10 shadow-2xl"
          : "bg-transparent border-white/5"
      } overflow-hidden`}
    >
      <button
        type="button"
        className="w-full px-8 py-7 flex justify-between items-center gap-5 text-left cursor-pointer focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-white text-lg font-black tracking-tight leading-6">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center border ${
            isOpen
              ? "bg-indigo-600 border-indigo-500 text-white"
              : "bg-white/5 border-white/5 text-zinc-500"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-8 pb-8 pt-0">
              <div className="text-zinc-500 text-base font-medium leading-relaxed max-w-2xl">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center  overflow-hidden">
      <div className="max-w-4xl w-full">
        {/* Title Area */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-indigo-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <HelpCircle className="w-3 h-3" />
            Support Center
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.1]">
            Curious about <br />
            <span className="text-zinc-500">how Klaryo works?</span>
          </h2>

          {/* Goofy Tag */}
          <motion.div
            animate={{ rotate: [3, -3, 3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 md:-right-12 px-4 py-1.5 bg-amber-400 text-black text-[10px] font-black rounded-full shadow-xl rotate-6 hidden sm:block uppercase tracking-widest"
          >
            We've got answers!
          </motion.div>

          {/* Handwriting Accent */}
          <div className="absolute -bottom-10 left-10 hidden lg:block opacity-30">
            <svg
              width="60"
              height="40"
              viewBox="0 0 60 40"
              fill="none"
              className="text-zinc-500 rotate-[-20deg]"
            >
              <path
                d="M10 10 Q30 35 50 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="font-handwriting text-xl text-zinc-600 mt-2">
              Just for you
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
