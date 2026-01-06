"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <motion.div
        className="text-center text-gray-300 text-sm font-medium leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Powering calls for innovative companies
      </motion.div>
      <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
          >
            <Image
              src={`/logos/logo0${i + 1}.svg`}
              alt={`Company Logo ${i + 1}`}
              width={400}
              height={120}
              className="w-full max-w-[400px] h-auto object-contain grayscale"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
