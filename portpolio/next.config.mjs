/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portpolio",
  assetPrefix: "/portpolio",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
