'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Globe, Play, ChevronDown } from 'lucide-react';

export default function FunkyFeaturesSection() {
  const [enabled, setEnabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [voice, setVoice] = useState('Tony HD');

  const voices = ['Tony HD', 'Sarah AI', 'Alex Neural', 'Emma Pro'];

  return (
    <section className="w-full px-4 sm:px-6 py-20 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Web Calls */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl p-8 bg-violet-300 text-black flex flex-col justify-between min-h-[260px]"
          >
            <span className="border border-black rounded-full px-4 py-2 w-fit rotate-[-5deg]">
              Live
            </span>

            <div>
              <Globe className="mb-4" />
              <h3 className="text-4xl font-semibold mb-3">Web Calls</h3>
              <p className="text-lg opacity-80">
                Embed AI agents directly on your website. No phone numbers.
              </p>
            </div>
          </motion.div>

          {/* Phone Calls */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl p-8 bg-indigo-600 text-white flex flex-col justify-between min-h-[260px]"
          >
            <span className="border border-white rounded-full px-4 py-2 w-fit rotate-[4deg]">
              Scalable
            </span>

            <div>
              <Phone className="mb-4" />
              <h3 className="text-4xl font-semibold mb-3">Phone Calls</h3>
              <p className="text-lg opacity-80">
                Attach AI agents to real phone numbers worldwide.
              </p>
            </div>
          </motion.div>

          {/* Fast Responses */}
          <div className="rounded-3xl p-8 bg-lime-300 text-black flex flex-col justify-between min-h-[260px]">
            <div
              onClick={() => setEnabled(!enabled)}
              className="w-20 h-10 bg-black rounded-full flex items-center px-1 cursor-pointer"
            >
              <motion.div
                layout
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  enabled
                    ? 'bg-white text-black ml-auto'
                    : 'bg-neutral-500 text-white'
                }`}
              >
                {enabled ? 'ON' : 'OFF'}
              </motion.div>
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-3">Fast Responses</h3>
              <p className="text-lg opacity-80">
                Lightning-fast AI replies. As low as 500ms.
              </p>
            </div>
          </div>

          {/* Voices */}
          <div className="rounded-3xl p-8 bg-neutral-900 text-white flex flex-col justify-between min-h-[260px] relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 bg-white text-black px-4 py-3 rounded-xl w-full"
            >
              <Play />
              <span className="flex-1 text-left font-medium">{voice}</span>
              <ChevronDown
                className={`transition-transform ${open ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-20 left-8 right-8 bg-white text-black rounded-xl overflow-hidden shadow-xl z-10"
                >
                  {voices.map((v) => (
                    <li
                      key={v}
                      onClick={() => {
                        setVoice(v);
                        setOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-neutral-100 cursor-pointer"
                    >
                      {v}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            <div>
              <h3 className="text-4xl font-semibold mb-3">
                Realistic Voices
              </h3>
              <p className="text-lg opacity-80">
                Choose from hundreds of neural, human-like voices.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – TESTIMONIALS */}
        <div className="flex flex-col justify-center gap-10">
          <Testimonial
            name="Carlos Lunardini"
            text="I’ve tried tons of AI calling tools. This one actually feels human."
          />
          <Testimonial
            name="James Moss"
            text="White-label ready, insanely fast, and the support team is amazing."
          />
        </div>
      </div>
    </section>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white">
          {name[0]}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm">★★★★★</p>
        </div>
      </div>
      <p className="mt-4 text-neutral-400 text-base">{text}</p>
    </div>
  );
}
