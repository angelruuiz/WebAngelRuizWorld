/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    reactStrictMode: true,
    images: {
        unoptimized: false,
        formats: ['image/avif', 'image/webp'],
    },
    async rewrites() {
        return [
            {
                source: '/web_escombrera',
                destination: '/web_escombrera/index.html',
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/particulares/boda',
                destination: '/particulares/bodas',
                permanent: true,
            },
            {
                source: '/blog/mago-comuniones-madrid',
                destination: '/blog/mago-comuniones-madrid-guia',
                permanent: true,
            },
            {
                source: '/blog/team-building-magia-madrid',
                destination: '/blog/team-building-madrid-actividades-empresas',
                permanent: true,
            },
            {
                source: '/blog/cenas-empresa-originales-madrid',
                destination: '/blog/ideas-cenas-empresa-madrid-originales',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                ],
            },
            {
                source: '/images/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/(fonts|videos)/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
