const path = require('path')
const headers = require('./headers')
const CopyPlugin = require('copy-webpack-plugin')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	headers,
	swcMinify: true,
	reactStrictMode: true,
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru',
	},
	webpack: (config) => {
		config.plugins.push(
			new CopyPlugin({
				patterns: [
					{
						from: require.resolve('pdfjs-dist/build/pdf.worker.min.js'),
						to: path.join(__dirname, 'public'),
					},
				],
			}),
		)
		return config
	},
}

module.exports = withBundleAnalyzer(nextConfig)
