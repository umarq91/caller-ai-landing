export const VoiceSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 font-poppins">
      {/* LEFT CARD */}
      <div className="relative overflow-hidden rounded-3xl bg-violet-100 p-6 sm:p-10 min-h-[320px] sm:min-h-[380px]">
        <div className="max-w-md">
          <h3 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            400+ Neural <br /> AI Voices
          </h3>
          <p className="text-black/70 text-lg">
            Deliver high-quality conversations with 400 human-like neural voices
            and 140 accents and variants.
          </p>
        </div>

        {/* Rotated Image */}
        <img
          src="https://callfluent.com/wp-content/themes/callfluent/images/ai-voice.svg"
          alt="Neural voices UI"
          className="absolute right-[-40px] bottom-[-20px] w-[340px] sm:w-[420px]
                 rotate-[-12deg] rounded-2xl"
        />
      </div>

      {/* RIGHT CARD */}
      <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] bg-neutral-800 text-white w-full">
        <span className="text-md sm:text-lg border border-white/80 rounded-full px-4 py-2 sm:py-3 mb-6 w-fit">
          1 click Klaryo integration
        </span>

        <div>
          <h3 className="text-4xl md:text-5xl font-semibold mb-3">
            Klaryo
          </h3>
          <p className="opacity-80 text-lg mb-6">
            Create voices & accents or clone your own voice with our Klaryo
            1 click integration.
          </p>

          <a 
          href="#contact-section"
          className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-white font-medium hover:bg-violet-600 transition">
            🎙 Try a conversation
          </a>
        </div>
      </div>
    </div>
  );
};
