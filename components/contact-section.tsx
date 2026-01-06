"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="w-full px-5 py-16 md:py-24 relative flex flex-col justify-center items-center overflow-visible">
      <motion.div
        className="w-[547px] h-[500px] absolute top-[100px] right-[80px] bg-primary/10 blur-[130px] z-0"
        animate={{
          y: [0, 40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col justify-start items-center gap-4 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Ready to transform your customer interactions? Get in touch with our team to learn how Clario can help
            your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="rounded-2xl border border-white/20 p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "rgba(231, 236, 235, 0.08)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-foreground text-lg font-semibold">Email Us</h3>
                    <p className="text-muted-foreground text-sm">hello@callerai.com</p>
                    <p className="text-muted-foreground text-sm">support@callerai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-foreground text-lg font-semibold">Call Us</h3>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-foreground text-lg font-semibold">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">123 AI Street, Tech Hub</p>
                    <p className="text-muted-foreground text-sm">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/20 p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "rgba(231, 236, 235, 0.08)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

              <div className="relative z-10">
                <h3 className="text-foreground text-xl font-semibold mb-2">Schedule a Demo</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  See Clario in action with a personalized demo tailored to your business needs.
                </p>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-full font-medium">
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/20 p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-foreground text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-foreground text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-foreground text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your company"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-foreground text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Tell us about your needs..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-full font-medium text-base"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
