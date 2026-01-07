"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, Download } from "lucide-react";

export default function HorizontalExpandableVoiceCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const voices = [
    {
      name: "Clara",
      category: "Medical",
      title: "Dental Clinic",
      description: "Listen how our AI Voice Agent politely reminds a client about their upcoming dental appointment.",
      image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=872&auto=format&fit=crop",
      audio: "/audio/clara.mp3",
      gradient: "bg-cyan-500",
    },
    {
      name: "Jenny",
      category: "Real Estate",
      title: "Agentic Estate",
      description: "Discover in this recording how AI instantly provides comprehensive property details, simplifying your client's real estate search.",
      image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=806&auto=format&fit=crop",
      audio: "/audio/jenny.mp3",
      gradient: "bg-emerald-500",
    },
    {
      name: "Sam",
      category: "Sales",
      title: "Lead Qualification",
      description: "Qualifies inbound leads and routes hot prospects to your sales team efficiently.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=774&auto=format&fit=crop",
      audio: "/audio/sam.mp3",
      gradient: "bg-orange-500",
    },
    {
      name: "Jordan",
      category: "Support",
      title: "Customer Support",
      description: "Handles FAQs professionally and escalates complex support tickets when needed.",
      image: "https://plus.unsplash.com/premium_photo-1661310261765-f0481298ac4d?q=80&w=774&auto=format&fit=crop",
      audio: "/audio/jordan.mp3",
      gradient: "bg-fuchsia-500",
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile || isTablet) {
      setActiveIndex(0);
    }
  }, [isMobile, isTablet]);

  const stopAll = () => {
    audioRefs.current.forEach((audio) => {
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
    });
    setPlayingIndex(null);
    setProgress(0);
  };

  const togglePlay = (index: number) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    if (playingIndex === index) {
      audio.pause();
      setPlayingIndex(null);
      return;
    }

    stopAll();
    audio.play();
    setPlayingIndex(index);

    audio.onended = () => {
      setPlayingIndex(null);
      setProgress(0);
    };
  };

  const handleTimeUpdate = (index: number) => {
    const audio = audioRefs.current[index];
    if (!audio || !audio.duration) return;

    setProgress((audio.currentTime / audio.duration) * 100);
  };

  // Mobile/Tablet layout
  if (isMobile || isTablet) {
    return (
      <div className="space-y-6 max-w-3xl mx-auto font-poppins px-4 md:px-6">
        {voices.map((voice, index) => {
          const isPlaying = index === playingIndex;

          return (
            <motion.div
              key={voice.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${voice.gradient} text-white shadow-lg`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {voice.category}
                    </span>
                  </div>
                  <span className="px-5 py-2 bg-white text-[#7A6B96] rounded-full font-semibold text-lg">
                    {voice.name}
                  </span>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{voice.title}</h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">{voice.description}</p>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                  <div className="w-full md:w-48 h-48 md:h-40 rounded-2xl overflow-hidden shadow-lg shrink-0">
                    <img src={voice.image} alt={voice.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => togglePlay(index)}
                        className="w-14 h-14 bg-white text-[#7A6B96] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                      >
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                      </motion.button>

                      <div className="flex-1 mt-10">
                        <div className="relative h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-white"
                            animate={{ width: isPlaying ? `${progress}%` : "0%" }}
                            transition={{ ease: "linear", duration: 0.1 }}
                          />
                        </div>

                        <div className="flex justify-end">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={voice.audio}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
                          >
                            <Download size={16} />
                            Download
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <audio ref={(el: any) => (audioRefs.current[index] = el)} src={voice.audio} onTimeUpdate={() => handleTimeUpdate(index)} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="flex gap-6 h-[420px] max-w-7xl mx-auto font-poppins">
      <AnimatePresence initial={false} mode="wait">
        {voices.map((voice, index) => {
          const isActive = index === activeIndex;
          const isPlaying = index === playingIndex;

          return (
            <motion.div
              key={voice.name}
              layout
              initial={false}
              animate={{ flex: isActive ? 4 : 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 25, mass: 1.2, duration: 0.8 }}
              onClick={() => {
                if (activeIndex !== index) {
                  setActiveIndex(index);
                  stopAll();
                }
              }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${voice.gradient} flex cursor-pointer text-white shadow-xl hover:shadow-2xl transition-shadow`}
            >
              <motion.div
                className="h-full shrink-0"
                animate={{ width: isActive ? 240 : "100%" }}
                transition={{ type: "spring", stiffness: 150, damping: 25, duration: 0.8 }}
              >
                <div className="h-full w-full overflow-hidden">
                  <img src={voice.image} alt={voice.name} className="h-full w-full object-cover transition-transform duration-800 hover:scale-105" />
                </div>
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none", width: isActive ? "auto" : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col justify-between overflow-hidden p-10"
                style={{ minWidth: isActive ? "480px" : 0 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-lg font-medium">{voice.category}</span>
                    <span className="px-5 py-2 bg-white text-[#7A6B96] rounded-full font-semibold text-lg">{voice.name}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{voice.title}</h2>
                    <p className="text-white/90 text-lg leading-relaxed max-w-lg">{voice.description}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => { e.stopPropagation(); togglePlay(index); }}
                      className="w-16 h-16 bg-white text-[#7A6B96] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                    >
                      {isPlaying ? <Pause size={26} /> : <Play size={26} />}
                    </motion.button>

                    <div className="flex-1 space-y-3 mt-10">
                      <div className="relative h-2.5 bg-white/20 rounded-full overflow-hidden">
                        <motion.div className="absolute left-0 top-0 h-full bg-white" animate={{ width: isPlaying ? `${progress}%` : "0%" }} transition={{ ease: "linear" }} />
                      </div>

                      <div className="flex justify-end">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={voice.audio}
                          download
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors"
                        >
                          <Download size={18} />
                          Download Sample
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                <audio ref={(el: any) => (audioRefs.current[index] = el)} src={voice.audio} onTimeUpdate={() => handleTimeUpdate(index)} />
              </motion.div>

              {!isActive && (
                <motion.div initial={false} animate={{ opacity: isActive ? 0 : 1, scale: isActive ? 0.9 : 1 }} transition={{ duration: 0.4, ease: "easeOut" }} className="absolute bottom-6 left-6">
                  <span className="px-5 py-2.5 bg-white text-[#7A6B96] rounded-full font-semibold text-lg shadow-lg">{voice.name}</span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
