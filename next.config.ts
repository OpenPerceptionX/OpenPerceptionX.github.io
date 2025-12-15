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
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                pathname: '/mmlab/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.kinetixai.cn',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
