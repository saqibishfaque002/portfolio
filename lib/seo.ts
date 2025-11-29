import { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article" | "profile"
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

const defaultSEO = {
  title: "Saqib Ishfaque - Full Stack Developer | PHP & Laravel Expert",
  description:
    "Professional portfolio of Saqib Ishfaque, a Full Stack Developer specializing in PHP, Laravel, POS Systems, Microsoft Dynamics, Firebase, and enterprise web applications.",
  image: "/og-image.png",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://saqib-ishfaque-portfolio.vercel.app/",
  type: "website" as const,
  author: "Saqib Ishfaque",
}

export function generateSEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  keywords = [],
  author = defaultSEO.author,
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const fullUrl = url.startsWith("http") ? url : `${defaultSEO.url}${url}`
  const imageUrl = image.startsWith("http") ? image : `${defaultSEO.url}${image}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: author }],
    openGraph: {
      type,
      locale: "en_US",
      url: fullUrl,
      title,
      description,
      siteName: "Saqib Ishfaque Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@saqibishfaque",
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

// Generate JSON-LD for breadcrumbs
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saqib-ishfaque-portfolio.vercel.app/"

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

// Generate JSON-LD for articles/blog posts
export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = "Saqib Ishfaque",
}: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saqib-ishfaque-portfolio.vercel.app/"

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${baseUrl}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
  }
}

// SEO-friendly text truncation
export function truncateText(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + "..."
}

// Generate slug from title
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

