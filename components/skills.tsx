"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { Server, Layout, Wrench, Database, Zap, Code2 } from "lucide-react"

export function Skills() {
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

  const skillCategories = [
    {
      icon: Server,
      title: "Backend Development",
      skills: ["PHP", "Laravel", "MySQL", "API Development", "MVC Architecture", "REST APIs"],
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Responsive Design"],
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["MySQL", "Database Optimization", "Indexing", "Oracle DB", "Data Migration"],
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Wrench,
      title: "Tools & Integrations",
      skills: ["Git", "QuickBooks", "Stripe", "XML", "POS Systems", "Loyalty Programs"],
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: Zap,
      title: "Enterprise Systems",
      skills: ["Microsoft Dynamics", "Firebase", "Real-time Systems", "Offline Sync", "Ledger Management"],
      color: "text-red-600 dark:text-red-400",
    },
    {
      icon: Code2,
      title: "Specialized Skills",
      skills: ["Offline POS Systems", "Split Bill Systems", "Pre-Ordering", "Payment Integration", "Admin Panels"],
      color: "text-teal-600 dark:text-teal-400",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="mb-4">
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            A comprehensive set of technologies and tools I use to build enterprise-grade applications and deliver
            exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ animationDelay: `${index * 100}ms`, borderTopColor: "hsl(var(--primary))" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-bold leading-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs px-2 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
