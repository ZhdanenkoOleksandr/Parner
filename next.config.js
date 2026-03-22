/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Оптимизация для production
  poweredByHeader: false,
  
  // Поддержка мультиязычности
  i18n: {
    locales: ['uk', 'en', 'ru'],
    defaultLocale: 'uk',
  },
  
  // Настройки для Vercel
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Заголовки безопасности
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig
