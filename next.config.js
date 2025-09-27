//      /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
//   experimental: {
//     appDir: true,
//   },
// }
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true, // required for GitHub Pages
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: { unoptimized: true },
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio",
};

module.exports = nextConfig;