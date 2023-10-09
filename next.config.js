/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/',
            destination: '/en',  // Cela redirige la racine vers /en
          },
        ];
      },
}


module.exports = nextConfig
