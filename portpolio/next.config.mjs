// import withPlugins from "next-compose-plugins";
// import withImages from "next-images";

// /** @type {import('next').NextConfig} */
// const nextConfig = withPlugins([
//   [
//     withImages,
//     {
//       unoptimized: true,
//       assetPrefix: "/portpolio/",
//     },
//   ],
//   {
//     trailingSlash: true,
//     basePath: "/portpolio",
//     assetPrefix: "/portpolio/",
//   },
// ]);

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portpolio",
  output: "export",
  assetPrefix: "https://portfolio.clashcrash.com/",
  images: {
    unoptimized: true,
    path: "https://portfolio.clashcrash.com/",
  },
  trailingSlash: true,
  crossOrigin: "anonymous",
};

export default nextConfig;
