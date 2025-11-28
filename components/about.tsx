"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Award, TrendingUp } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const experience = [
    {
      icon: Briefcase,
      title: "Software Developer",
      company: "SYMITS",
      period: "Feb 2024 - Present",
      description:
        "Leading the development of enterprise-grade POS systems with advanced integrations including Microsoft Dynamics, QuickBooks, and multi-vendor loyalty programs. Currently architecting Kitchen Display Systems (KDS) and sophisticated queue management solutions for fine dining establishments.",
      achievements: [
        "Currently developing Kitchen Display System (KDS) to streamline kitchen operations and order fulfillment",
        "Designed and deployed Queue/Table Management System optimized for fine dining restaurant workflows",
        "Engineered offline-capable POS system with seamless data synchronization for uninterrupted operations",
        "Integrated Microsoft Dynamics for automated day-end ledger report posting with credit and debit management",
        "Implemented Firebase real-time architecture for instant order tracking and operational efficiency",
        "Developed JWT-based API authentication system enabling multiple third-party vendors to securely transmit orders with automatic vendor identification",
        "Integrated QuickBooks for real-time customer invoicing and comprehensive merchant financial management",
        "Architected third-party ordering and loyalty system integration, connecting external platforms to core POS infrastructure",
        "Built item-specific loyalty reward system supporting complex promotional rules (e.g., buy 5 coffees, receive 1 free)",
        "Created Split Bill functionality allowing customers to divide payments across multiple accounts efficiently",
        "Developed Pre-Ordering System with real-time notifications for users and cashiers",
        "Built comprehensive Finance Ledger System managing purchases, stock adjustments, order processing, and refunds",
      ],
    },
    {
      icon: Briefcase,
      title: "Senior Web Developer",
      company: "Orio Technologies Pvt. Ltd.",
      period: "Jun 2021 - Feb 2024",
      description:
        "Led the architecture and development of enterprise web applications with a focus on real-time communication systems, middleware solutions, and banking sector integrations. Specialized in Laravel-based solutions with complex third-party API integrations.",
      achievements: [
        "Developed real-time admin-to-manager communication chatbot using PHP, jQuery, and MySQL with instant messaging capabilities",
        "Architected Laravel-based middleware bridge system that retrieves data from external servers, enables user verification workflows, and posts validated data to destination servers via REST APIs",
        "Built secure policy management portal for HBL (Habib Bank Limited) enabling customers to view, approve, or cancel insurance policies through an intuitive web interface",
        "Designed and implemented RESTful APIs for seamless third-party system integrations and data exchange",
        "Optimized MySQL database queries and implemented strategic indexing, improving application performance by 40%",
        "Established code review processes and mentored junior developers in Laravel best practices",
      ],
    },
    {
      icon: Briefcase,
      title: "Web Developer Intern",
      company: "Orio Technologies Pvt. Ltd.",
      period: "Jan 2021 - May 2021",
      description:
        "Completed an intensive 5-month internship program focused on mastering full-stack web development using PHP and Laravel framework. Gained practical experience contributing to production applications while learning industry-standard development practices.",
      achievements: [
        "Mastered Laravel MVC architecture, routing, middleware, and Eloquent ORM fundamentals",
        "Contributed to client-facing projects, implementing features under senior developer supervision",
        "Developed expertise in MySQL database design, query optimization, and relational data modeling",
        "Actively participated in code reviews, learning best practices for clean, maintainable code",
      ],
    },
  ]

  const education = [
    {
      degree: "B.S Computer Science",
      institution: "Virtual University of Pakistan",
      period: "2019 - 2023",
    },
    {
      degree: "B.Com",
      institution: "University of Sindh",
      period: "Completed",
    },
  ]

  const certifications = [
    "Appreciation Letter from SYMITS for outstanding contributions",
    "Laravel API Development Mastery - Udemy",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            With over 5 years of experience in full-stack development, I specialize in creating robust, scalable
            enterprise solutions using PHP and Laravel. My expertise spans from POS systems to complex integrations with
            platforms like Microsoft Dynamics and Firebase.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card
                key={index}
                className={`p-8 border-l-4 border-l-primary transition-all duration-700 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                    <p className="text-lg text-primary font-semibold">{job.company}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {job.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                <div className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">✓</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications & Recognition</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="leading-relaxed">{cert}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
