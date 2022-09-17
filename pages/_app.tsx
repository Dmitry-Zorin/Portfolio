import { ChakraProvider } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { AppProps } from 'next/app'
import theme from 'theme'
import '../public/fonts/Golos-Text/Golos-Text.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
