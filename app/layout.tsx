import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://saqib-ishfaque-portfolio.vercel.app/"),
  title: {
    default: "Saqib Ishfaque - Full Stack Developer | PHP & Laravel Expert",
    template: "%s | Saqib Ishfaque",
  },
  description:
    "Professional portfolio of Saqib Ishfaque, a Full Stack Developer specializing in PHP, Laravel, POS Systems, Microsoft Dynamics, Firebase, and enterprise web applications. Based in Karachi, Pakistan.",
  keywords: [
    "Full Stack Developer",
    "PHP Developer",
    "Laravel Expert",
    "POS Systems",
    "Microsoft Dynamics",
    "Firebase",
    "Web Developer Karachi",
    "Backend Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Database Expert",
    "API Development",
    "Enterprise Applications",
  ],
  authors: [{ name: "Saqib Ishfaque", url: "https://saqib-ishfaque-portfolio.vercel.app/" }],
  creator: "Saqib Ishfaque",
  publisher: "Saqib Ishfaque",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Saqib Ishfaque - Full Stack Developer | PHP & Laravel Expert",
    description:
      "Professional portfolio of Saqib Ishfaque, a Full Stack Developer specializing in PHP, Laravel, POS Systems, Microsoft Dynamics, Firebase, and enterprise web applications.",
    siteName: "Saqib Ishfaque Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saqib Ishfaque - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saqib Ishfaque - Full Stack Developer | PHP & Laravel Expert",
    description:
      "Professional portfolio showcasing expertise in PHP, Laravel, POS Systems, Microsoft Dynamics, and enterprise web applications.",
    creator: "@saqibishfaque",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg?v=2",
    apple: [{ url: "/icon.svg?v=2" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saqib Ishfaque",
    url: "https://saqib-ishfaque-portfolio.vercel.app/",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in PHP, Laravel, POS Systems, Microsoft Dynamics, Firebase, and enterprise web applications",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "Pakistan",
    },
    email: "saqib.symits@gmail.com",
    knowsAbout: [
      "PHP",
      "Laravel",
      "JavaScript",
      "React",
      "Next.js",
      "POS Systems",
      "Microsoft Dynamics",
      "Firebase",
      "MySQL",
      "PostgreSQL",
      "API Development",
      "Web Development",
    ],
    sameAs: [
      "https://github.com/saqibishfaque",
      "https://linkedin.com/in/saqibishfaque",
      // Add other social profiles here
    ],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saqib Ishfaque Portfolio",
    url: "https://saqib-ishfaque-portfolio.vercel.app/",
    description:
      "Professional portfolio of Saqib Ishfaque, Full Stack Developer specializing in PHP, Laravel, and enterprise web applications",
    author: {
      "@type": "Person",
      name: "Saqib Ishfaque",
    },
    inLanguage: "en-US",
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
