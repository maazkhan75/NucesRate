/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lhr.nu.edu.pk"], // Add the domain here
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
