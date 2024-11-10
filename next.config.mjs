/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'placehold.co',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/img/**',
          },
        ],
    }
};
export default nextConfig;