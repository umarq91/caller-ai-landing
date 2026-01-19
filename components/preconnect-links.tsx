"use client"

import { useEffect } from "react"

export function PreconnectLinks() {
  useEffect(() => {
    // Add preconnect links for external domains - non-blocking
    if (typeof document !== 'undefined') {
      const domains = [
        { href: "https://images.unsplash.com", crossorigin: true },
      ]

      domains.forEach(({ href, crossorigin }) => {
        // Check if link already exists
        const existingLink = document.querySelector(`link[href="${href}"]`)
        if (!existingLink) {
          const link = document.createElement("link")
          link.rel = "preconnect"
          link.href = href
          if (crossorigin) {
            link.setAttribute("crossorigin", "anonymous")
          }
          document.head.appendChild(link)
        }
      })
    }
  }, [])

  return null
}