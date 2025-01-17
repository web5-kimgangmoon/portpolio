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
  assetPrefix: "https://web5-kimgangmoon.github.io/portpolio/",
  images: {
    unoptimized: true,
    path: "https://web5-kimgangmoon.github.io/portpolio/",
  },
  trailingSlash: true,
  crossOrigin: "anonymous",
  async headers() {
    return [
      {
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://portfolio.clashcrash.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
