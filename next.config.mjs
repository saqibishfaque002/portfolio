/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
  // SEO: Enable compression
  compress: true,
  // SEO: Generate ETags for better caching
  generateEtags: true,
  // SEO: Enable powered by header removal for security
  poweredByHeader: false,
  // SEO: Optimize for production
  reactStrictMode: true,
  // SEO: Enable SWC minification
  swcMinify: true,
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
}

export default nextConfig
