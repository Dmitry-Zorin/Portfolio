const headers = require('./headers')
const { withPlaiceholder } = require('@plaiceholder/next')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru',
	},
	headers,
}

module.exports = withBundleAnalyzer(withPlaiceholder(nextConfig))
