"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import Link from "next/link";
import { motion } from "framer-motion";
import Threads from "./Threads";

export function HeroSection() {
  return (
    <section
      className="relative md:p-20 lg:p-24 mx-auto my-6 w-full rounded-2xl overflow-hidden px-4 font-poppins"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Threads />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center justify-center">
        <motion.div
          className="text-center space-y-4 md:space-y-5 lg:space-y-6 max-w-md md:max-w-[500px] lg:max-w-[588px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.h1
            className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Voice Agents That Sound Human
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Transform your customer interactions with AI-powered voice agents
            that speak naturally, understand context, and deliver exceptional
            experiences - 24/7.
          </motion.p>

          <Link
            href="https://vercel.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
