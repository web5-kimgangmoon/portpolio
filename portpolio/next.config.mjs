/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portpolio",
  assetPrefix: "https://portfolio.clashcrash.com/portpolio",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
