import { ChakraProvider } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import theme from 'theme'
import '../public/fonts/Golos-Text/Golos-Text.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
