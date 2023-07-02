/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "scdn.italki.com"
            }
        ]
    }
}

module.exports = nextConfig
