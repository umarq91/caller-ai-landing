"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Download,
  Volume2,
  Sparkles,
  Star,
  Mic,
} from "lucide-react";

const voices = [
  {
    id: 0,
    name: "Clara",
    gender: "female",
    category: "Medical",
    title: "Dental Concierge",
    description:
      "Listen to how Clara handles patient inquiries with a warm, empathetic tone that builds immediate trust.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=voice2",
    audio: "/audio/clara.mp3",
    color: "from-indigo-600 to-blue-700",
    glow: "rgba(79, 70, 229, 0.4)",
    tag: "High EQ",
  },
  {
    id: 1,
    name: "Jenny",
    gender: "female",
    category: "Real Estate",
    title: "Property Assistant",
    description:
      "Jenny provides rapid property details and schedules viewings with high energy and native-level fluency.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=14",
    audio: "/audio/jenny.mp3",
    color: "from-emerald-600 to-teal-700",
    glow: "rgba(16, 185, 129, 0.4)",
    tag: "Pro-Active",
  },
  {
    id: 2,
    name: "Sam",
    gender: "male",
    category: "Sales",
    title: "Lead Qualifier",
    description:
      "Sam sounds exactly like your best SDR. He qualifies prospects and routes them to your team without skipping a beat.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=u",
    audio: "/audio/sam.mp3",
    color: "from-zinc-700 to-zinc-900",
    glow: "rgba(161, 161, 170, 0.2)",
    tag: "Cold-Call Elite",
  },
  {
    id: 3,
    name: "Jordan",
    gender: "male",
    category: "Support",
    title: "Customer Success",
    description:
      "Jordan handles complex troubleshooting and escalates urgent issues with logical precision and infinite patience.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=p",
    audio: "/audio/jordan.mp3",
    color: "from-purple-600 to-indigo-800",
    glow: "rgba(139, 92, 246, 0.4)",
    tag: "Logic Master",
  },
];

export const Voices: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const stopAll = () => {
    audioRefs.current.forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    setPlayingIndex(null);
    setProgress(0);
  };

  const togglePlay = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const audio = audioRefs.current[index];
    if (!audio) return;

    if (playingIndex === index) {
      audio.pause();
      setPlayingIndex(null);
    } else {
      stopAll();
      audio.play().catch((err) => console.error("Audio playback error:", err));
      setPlayingIndex(index);
    }
  };

  const handleTimeUpdate = (index: number) => {
    const audio = audioRefs.current[index];
    if (audio && playingIndex === index) {
      const p = (audio.currentTime / audio.duration) * 100;
      setProgress(p || 0);
    }
  };

  const handleEnded = () => {
    setPlayingIndex(null);
    setProgress(0);
  };

  return (
    <section className="mt-5 lg:mt-32 px-6 relative  overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-indigo-600/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-indigo-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            >
              <Mic className="w-3 h-3" />
              Demo Showcase
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
              Voices with <br />
              <span className="text-zinc-600 text-6xl md:text-8xl">
                Personality.
              </span>
            </h2>
          </div>

          <div className="relative group hidden md:block">
            <div className="px-6 py-4 bg-zinc-900/50 border border-white/5 rounded-3xl flex items-center gap-4 backdrop-blur-md">
              <div className="flex -space-x-3">
                {voices.map((v) => (
                  <img
                    key={v.id}
                    src={v.avatar}
                    className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800"
                    alt={v.name}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                  <span className="text-xs font-black text-white">
                    4.9/5 Match
                  </span>
                </div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  Neural Accuracy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interaction Grid */}
        <div
          className={`flex flex-col lg:flex-row gap-6 ${isMobile ? "h-auto" : "h-[520px]"}`}
        >
          <AnimatePresence initial={false} mode="wait">
            {voices.map((v, i) => {
              const isActive = activeIndex === i;
              const isPlaying = playingIndex === i;

              return (
                <motion.div
                  key={v.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  animate={{
                    flex: isMobile ? "none" : isActive ? 4 : 1,
                    height: isMobile ? "auto" : "100%",
                  }}
                  onClick={() => {
                    if (!isMobile && activeIndex !== i) {
                      setActiveIndex(i);
                      stopAll();
                    }
                  }}
                  className={`relative rounded-[3rem] overflow-hidden group cursor-pointer border border-white/5 transition-all duration-700 ${
                    isActive
                      ? "bg-zinc-900 shadow-2xl"
                      : "bg-zinc-950/40 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                  {isActive && (
                    <motion.div
                      layoutId="glow"
                      className="absolute inset-0 blur-[100px] opacity-20 -z-10"
                      style={{ backgroundColor: v.glow }}
                    />
                  )}

                  <div className="h-full flex flex-col lg:flex-row">
                    {/* Avatar Side */}
                    <div
                      className={`relative shrink-0 flex items-center justify-center p-8 ${isActive ? "lg:w-[320px]" : "w-full lg:w-full"}`}
                    >
                      <motion.div
                        animate={{ scale: isActive ? 1.1 : 1 }}
                        className={`w-32 h-32 lg:w-48 lg:h-48 rounded-[3rem] bg-gradient-to-br ${v.color} p-1 shadow-2xl relative`}
                      >
                        <div className="w-full h-full bg-zinc-950 rounded-[2.8rem] overflow-hidden flex items-center justify-center relative">
                          <img
                            src={v.avatar}
                            alt={v.name}
                            className={`w-[85%] h-[85%] object-cover transition-all duration-700 ${isActive ? "grayscale-0" : "grayscale"}`}
                          />

                          {/* Pulsing Visualizer while playing */}
                          {isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <motion.div
                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute w-full h-full bg-white/10 rounded-full"
                              />
                              <div className="flex gap-1 items-end h-8">
                                {[1, 2, 3, 4, 5].map((bar) => (
                                  <motion.div
                                    key={bar}
                                    animate={{ height: [4, 16, 4] }}
                                    transition={{
                                      duration: 0.4,
                                      repeat: Infinity,
                                      delay: bar * 0.1,
                                    }}
                                    className="w-1 bg-white rounded-full"
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {!isMobile && (
                          <div className="absolute -bottom-4 -right-4 px-3 py-1 bg-white text-black text-[9px] font-black rounded-full shadow-xl uppercase tracking-widest border border-black/5">
                            {v.tag}
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Content Area */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive || isMobile ? 1 : 0,
                        width: isMobile ? "auto" : isActive ? "auto" : 0,
                        x: isActive || isMobile ? 0 : -20,
                      }}
                      className="flex-1 flex flex-col justify-between p-8 pt-0 lg:pt-8"
                    >
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                            {v.category}
                          </span>
                          <span className="text-xl font-black text-white italic">
                            {v.name}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-3xl font-black text-white mb-4 tracking-tighter leading-none">
                            {v.title}
                          </h3>
                          <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-md">
                            {v.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                          <button
                            onClick={(e) => togglePlay(e, i)}
                            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
                          >
                            {isPlaying ? (
                              <Pause className="w-6 h-6 fill-current" />
                            ) : (
                              <Play className="w-6 h-6 fill-current ml-1" />
                            )}
                          </button>

                          <div className="flex-1 space-y-3">
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{
                                  width: isPlaying ? `${progress}%` : 0,
                                }}
                                transition={{ ease: "linear", duration: 0.1 }}
                                className="absolute left-0 top-0 h-full bg-white"
                              />
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                              <span>Neural Stream</span>
                              <span>&lt; 50ms Lag</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className="w-3 h-3 text-amber-500 fill-current"
                              />
                            ))}
                          </div>
                          <a
                            href={v.audio}
                            download
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest hover:text-indigo-400 transition-colors"
                          >
                            <Download className="w-3 h-3" />
                           Download
                          </a>
                        </div>
                      </div>

                      {/* Real Audio Element */}
                      <audio
                        ref={(el) => {
                          audioRefs.current[i] = el;
                        }}
                        src={v.audio}
                        onTimeUpdate={() => handleTimeUpdate(i)}
                        onEnded={handleEnded}
                      />
                    </motion.div>

                    {/* Vertical Text when collapsed */}
                    {!isActive && !isMobile && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-4 pointer-events-none"
                      >
                        <p className="font-black text-white uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] text-xs opacity-50">
                          {v.name}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
