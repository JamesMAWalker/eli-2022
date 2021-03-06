/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
  },
}

module.exports = nextConfig