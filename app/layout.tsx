import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saqib Ishfaque - Full Stack Developer | PHP & Laravel Expert",
  description:
    "Professional portfolio of Saqib Ishfaque, a Full Stack Developer specializing in PHP, Laravel, POS Systems, Microsoft Dynamics, Firebase, and enterprise web applications. Based in Karachi, Pakistan.",
  generator: "v0.app",
  keywords: [
    "Full Stack Developer",
    "PHP Developer",
    "Laravel Expert",
    "POS Systems",
    "Microsoft Dynamics",
    "Firebase",
    "Karachi Developer",
  ],
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg?v=2",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
