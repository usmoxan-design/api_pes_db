/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pesdb.net',
            },
        ],
    },
    typescript: {
        // TypeScript xatolari bo'lsa ham build-ni davom ettiradi
        ignoreBuildErrors: true,
    },
    eslint: {
        // ESLint xatolari bo'lsa ham build-ni davom ettiradi
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
