import { extendTheme } from '@chakra-ui/react'
import colorTokens from './colorTokens'
import components from './components'

const systemFonts =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

const theme = extendTheme({
	fonts: {
		body: `Golos Text, ${systemFonts}`,
		heading: `Golos Text, ${systemFonts}`,
	},
	fontSizes: {
		md: '1.0625rem',
		lg: '1.1875rem',
	},
	letterSpacings: {
		tighter: '-0.04rem',
		tight: '-0.03rem',
		normal: '-0.02rem',
		wide: '0rem',
		wider: '0.02rem',
		widest: '0.04rem',
	},
	transition: {
		duration: {
			faster: '75ms',
			fast: '100ms',
			normal: '150ms',
			slow: '200ms',
			slower: '300ms',
		},
	},
	styles: {
		global: {
			body: {
				bg: 'bg',
				color: 'text',
				fontSize: 'lg',
				letterSpacing: 'normal',
				scrollBehavior: 'smooth',
				overflowX: 'hidden',
				overflowY: 'scroll',
				'::-webkit-scrollbar': {
					bg: 'bg',
					w: 2.5,
				},
				'::-webkit-scrollbar-thumb': {
					bg: 'border',
					borderRadius: 'full',
				},
			},
			'*, *::before, &::after': {
				borderColor: 'border',
			},
		},
	},
	semanticTokens: {
		colors: colorTokens,
	},
	components,
})

export default theme
