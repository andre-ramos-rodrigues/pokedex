/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { //necessário para usarmos as imagens de cdn.traction.one
    domains: ['cdn.traction.one'] 
  }
}

module.exports = nextConfig
