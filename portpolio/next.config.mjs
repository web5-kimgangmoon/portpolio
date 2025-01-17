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
  assetPrefix: "/portpolio/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
