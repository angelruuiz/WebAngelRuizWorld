/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: false,
    },
    // Opciones recomendadas para Edge y despliegues estáticos / dinámicos
};

module.exports = nextConfig;
