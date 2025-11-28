"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saqibishfaquekhi@gmail.com",
      href: "mailto:saqibishfaquekhi@gmail.com",
    },
    { icon: Phone, label: "Phone", value: "+92 301 0031002", href: "tel:+923010031002" },
    {
      icon: MapPin,
      label: "Location",
      value: "Liaquatabad Block No.3, Karachi, Pakistan",
      href: "https://maps.google.com/?q=Liaquatabad+Karachi+Pakistan",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            I&apos;m currently available for freelance work and full-time opportunities. If you have a project in mind
            or want to discuss potential collaboration, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card
            className={`p-8 md:p-10 border-2 bg-card/50 backdrop-blur transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-muted-foreground">Fill out the form below and I&apos;ll get back to you shortly</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold">
                  Subject <span className="text-destructive">*</span>
                </label>
                <Input
                  id="subject"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  className="resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="text-sm font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
                  <p className="text-sm font-medium">Failed to send message. Please try again or email me directly.</p>
                </div>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <Card
                  key={info.label}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                >
                  <a
                    href={info.href}
                    target={info.label === "Location" ? "_blank" : undefined}
                    rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold mb-1 text-sm text-muted-foreground">{info.label}</h4>
                      <p className="text-foreground group-hover:text-primary transition-colors break-words">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
              <p className="mb-6 opacity-90">Follow me on social platforms for updates and professional networking</p>
              <div className="flex gap-3">
                <Button size="lg" variant="secondary" asChild className="flex-1">
                  <a
                    href="https://linkedin.com/in/saqibishfaque002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild className="flex-1">
                  <a href="mailto:saqibishfaquekhi@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-2 border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <p className="font-semibold">Available for Opportunities</p>
                  <p className="text-sm text-muted-foreground">Open to full-time and freelance projects</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Saqib Ishfaque. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span>Built with</span>
              <span className="text-red-500">♥</span>
              <span>using Next.js & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
