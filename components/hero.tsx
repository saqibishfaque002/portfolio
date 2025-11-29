"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume-saqib-ishfaque.pdf"
    link.download = "Saqib_Ishfaque_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <MapPin className="w-3 h-3 mr-2 inline" />
                  Karachi, Pakistan
                </Badge>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight">
                  SAQIB ISHFAQUE
                </h1>

                <p className="text-2xl md:text-3xl text-muted-foreground font-medium text-pretty">
                  Full Stack Developer
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl">
                  Specializing in <span className="text-foreground font-semibold">PHP & Laravel</span> with expertise in
                  building enterprise POS systems, Microsoft Dynamics integrations, and scalable web applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" onClick={() => scrollToSection("projects")}>
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  Contact Me
                </Button>
                <Button size="lg" variant="outline" onClick={handleDownloadResume}>
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="ghost" size="sm" asChild className="h-auto py-2">
                  <a href="mailto:saqibishfaquekhi@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">saqibishfaquekhi@gmail.com</span>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="h-auto py-2">
                  <a href="tel:+923010031002" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+92 301 0031002</span>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="h-auto py-2">
                  <a
                    href="https://linkedin.com/in/saqibishfaque002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-lg">Key Highlights</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Appreciation Letter from SYMITS for outstanding contributions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Expert in Offline POS Systems & Real-time Firebase Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Microsoft Dynamics & Enterprise Ledger System Specialist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
