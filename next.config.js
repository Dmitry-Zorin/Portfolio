const isDevelopment = process.env.NODE_ENV === 'development'

const csp = [
	"default-src 'self' vitals.vercel-insights.com",
	"style-src 'self' 'unsafe-inline'",
	"script-src 'self' 'unsafe-eval' 'unsafe-inline'",
]

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Referrer-Policy',
						value: 'strict-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'geolocation=(), microphone=(), camera=()',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'Content-Security-Policy',
						value: isDevelopment ? '' : csp.join(';'),
					},
				],
			},
		]
	},
}

module.exports = withBundleAnalyzer(nextConfig)
