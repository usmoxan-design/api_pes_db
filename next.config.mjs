/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Shu qatorni qo'shing
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pesdb.net',
            },
        ],
        unoptimized: true, // GitHub Pages rasm optimizatsiyasini qo'llab-quvvatlamaydi

    },

};

