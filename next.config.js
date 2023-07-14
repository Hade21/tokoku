/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fashionvhal.myshopify.com",
        port: "",
        pathname: "/cdn/shop/products/*",
      },
    ],
  },
};

module.exports = nextConfig;
