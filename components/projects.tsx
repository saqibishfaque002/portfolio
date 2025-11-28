"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Database, Zap, DollarSign, ShoppingCart, GraduationCap, FileText } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Projects() {
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

  const projects = [
    {
      icon: ShoppingCart,
      title: "Offline POS System",
      description:
        "Developed a fully functional offline POS that allows order punching without internet connectivity and syncs data when online. Revolutionized retail operations for businesses with unreliable internet.",
      features: [
        "Order punching without internet",
        "Automatic data sync when online",
        "Local database caching",
        "Real-time inventory management",
      ],
      tags: ["Laravel", "MySQL", "Offline-First", "POS", "Sync"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Microsoft Dynamics Integration",
      description:
        "Implemented seamless ledger report posting for daily transactions to Microsoft Dynamics, automating the day-end process and managing credit & debit entries with precision.",
      features: [
        "Automated day-end posting",
        "Credit & debit management",
        "Real-time ledger sync",
        "Transaction reconciliation",
      ],
      tags: ["Microsoft Dynamics", "Laravel", "ERP", "Financial Systems"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Firebase Real-Time Ordering",
      description:
        "Integrated Firebase to track online orders in real-time, enhancing operational efficiency for restaurants and delivery services with instant order notifications.",
      features: ["Real-time order tracking", "Push notifications", "Live status updates", "Multi-device sync"],
      tags: ["Firebase", "Real-time", "Laravel", "API Integration"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: ExternalLink,
      title: "Pre-Ordering System",
      description:
        "Developed a pre-ordering system that notifies users and cashiers instantly about upcoming orders, streamlining restaurant operations and reducing wait times.",
      features: [
        "Advance order scheduling",
        "Instant notifications",
        "Order queue management",
        "Customer & staff alerts",
      ],
      tags: ["Laravel", "Notifications", "Queue Management"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: DollarSign,
      title: "Split Bill System",
      description:
        "Created an efficient bill splitting system enabling customers to divide bills across multiple accounts, perfect for group dining and shared expenses.",
      features: [
        "Multi-user bill splitting",
        "Flexible payment options",
        "Automatic calculations",
        "Transaction tracking",
      ],
      tags: ["Laravel", "Payment Systems", "POS"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FileText,
      title: "Finance Ledger System",
      description:
        "Built a comprehensive ledger module managing purchases, stock adjustments, order punching, and refunds. Complete financial management for retail operations.",
      features: ["Purchase management", "Stock adjustments", "Order tracking", "Refund processing"],
      tags: ["Laravel", "MySQL", "Financial Management", "Accounting"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: FileText,
      title: "JGI Re-Insurance Admin Panel",
      description:
        "Automated policy data retrieval from Oracle DB and streamlined re-insurance processes, reducing manual work and improving accuracy.",
      features: ["Oracle DB integration", "Automated data retrieval", "Policy management", "Process automation"],
      tags: ["Laravel", "Oracle DB", "Admin Panel", "Insurance"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: "URS Learn E-Learning Platform",
      description:
        "Built a comprehensive e-learning platform with secure Stripe payment integration, enabling online course delivery and student management.",
      features: ["Course management", "Stripe integration", "Student portal", "Payment processing"],
      tags: ["Laravel", "Stripe", "E-Learning", "Payment Gateway"],
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Key Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            A showcase of enterprise-level projects demonstrating expertise in POS systems, real-time integrations, and
            complex business solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
                <project.icon className="w-16 h-16 text-white relative z-10" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features list */}
                <div className="space-y-1.5">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
