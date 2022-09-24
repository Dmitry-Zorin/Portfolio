import { Container, ContainerProps, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import AppBar from './AppBar'
import Navbar from './Navbar'

export default function Layout({ children }: ContainerProps) {
	const router = useRouter()
	const isHomePage = router.pathname === '/'

	return (
		<Container
			key={isHomePage ? 'home' : 'not home'}
			as={Stack}
			spacing={4}
			maxW="8xl"
			minH="100vh"
			px={{ base: 4, md: 8 }}
			pb={20}
		>
			{isHomePage ? <Navbar /> : <AppBar />}
			<Stack as="main" spacing={8} flexGrow={1}>
				{children}
			</Stack>
		</Container>
	)
}
