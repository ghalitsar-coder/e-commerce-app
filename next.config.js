/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  key: 'Referrer-Policy',
  value: 'origin-when-cross-origin',
     webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
}

module.exports = nextConfig
