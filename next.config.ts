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
    // 添加重定向配置
    async redirects() {
        return [
            {
                source: '/FreeTacMan',
                destination: '/freetacman',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
