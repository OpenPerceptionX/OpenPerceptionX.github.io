import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opendrivelab.github.io',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.shields.io',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                pathname: '/opendrivelab/**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
