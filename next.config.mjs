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
};

export default nextConfig;
