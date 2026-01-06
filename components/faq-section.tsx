"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqData = [
  {
    question: "What is Clario and who is it for?",
    answer:
      "Clario is an AI-powered voice agent platform designed for businesses that want to automate phone interactions while maintaining a human touch. It's perfect for customer service teams, sales organizations, and any business looking to handle high call volumes with natural-sounding AI agents.",
  },
  {
    question: "How natural do the voice agents sound?",
    answer:
      "Our voice agents are powered by cutting-edge AI technology that creates indistinguishable human-like conversations. They understand context, handle interruptions naturally, adapt tone based on the conversation, and speak in multiple languages with native-like fluency.",
  },
  {
    question: "Can I integrate Clario with my existing CRM?",
    answer:
      "Yes! Clario offers one-click integrations with popular CRM platforms including Salesforce, HubSpot, Zendesk, and many more. All call data, transcripts, and insights automatically sync with your existing workflows and tools.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes up to 100 minutes of calling per month, access to 5+ natural voices, basic call analytics, single CRM integration, and email support. It's perfect for small businesses getting started with AI voice agents.",
  },
  {
    question: "How does call routing work?",
    answer:
      "Our smart call routing uses AI to analyze caller intent in real-time and directs calls to the appropriate agent or department. It can handle complex routing rules, prioritize urgent calls, and seamlessly transfer to human agents when needed.",
  },
  {
    question: "Is my customer data secure with Clario?",
    answer:
      "Absolutely. We use enterprise-grade security measures including end-to-end encryption, GDPR and HIPAA compliance, secure data storage, and regular security audits. Your call data is never shared with third parties, and we offer on-premises deployment options for enterprise customers.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <motion.div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      layout
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}>
            <ChevronDown className="w-6 h-6 text-muted-foreground-dark" />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="px-5 pb-[18px] pt-2">
              <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <motion.div
        className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <motion.h2
            className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to know about Clario and how it can transform your phone interactions
          </motion.p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FAQItem {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
