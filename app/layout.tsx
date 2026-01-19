import type React from "react"
import type { Metadata } from "next"
import { Poppins } from 'next/font/google';
import { PreconnectLinks } from "@/components/preconnect-links";

import "./globals.css"

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
  style: 'normal',
});

export const metadata: Metadata = {
  title: "Klaryo - Voice Agents That Sound Human",
  description:
    "Transform your customer interactions with AI-powered voice agents that speak naturally and deliver exceptional experiences.",
  generator: "v0.app",
  openGraph: {
    title: "Klaryo - Voice Agents That Sound Human",
    description:
      "Transform your customer interactions with AI-powered voice agents that speak naturally and deliver exceptional experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klaryo - Voice Agents That Sound Human",
    description:
      "Transform your customer interactions with AI-powered voice agents that speak naturally and deliver exceptional experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <PreconnectLinks />
        {children}
      </body>
    </html>
  )
}
