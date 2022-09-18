import { ChakraProvider } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'assets/styles/Golos-Text.css'
import useScrollRestoration from 'hooks/useScrollRestoration'
import Layout from 'layout/Layout'
import type { AppProps } from 'next/app'
import theme from 'theme'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
	useScrollRestoration()
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
