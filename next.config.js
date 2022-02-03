/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/books",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
