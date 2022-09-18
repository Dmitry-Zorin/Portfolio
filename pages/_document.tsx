import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preload"
						href="/fonts/Golos-Text.woff2"
						as="font"
						type="font/woff2"
						crossOrigin=""
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
