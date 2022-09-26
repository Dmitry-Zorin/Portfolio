import { ChakraProvider } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'assets/styles/Golos-Text.css'
import { MotionConfig } from 'framer-motion'
import Layout from 'layout/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'theme'
import { slowSpringConfig } from 'utils/animation'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, height=device-height, initial-scale=1"
				/>
			</Head>
			<MotionConfig transition={slowSpringConfig}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MotionConfig>
		</ChakraProvider>
	)
}

export default MyApp
