/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'w0.peakpx.com', 
      'encrypted-tbn0.gstatic.com', 
      'media.gq.com.mx',
      'img.freepik.com'
    ],
  },
}

module.exports = nextConfig
