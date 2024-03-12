/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
    productionBrowserSourceMaps: true,
    images: {
      domains: [
        "via.placeholder.com",
      ],
    },
};

export default nextConfig;
