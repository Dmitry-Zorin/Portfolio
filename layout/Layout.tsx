import { Container, ContainerProps, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import AppBar from './AppBar'
import Navbar from './Navbar'
import Subnav from './Subnav'

export default function Layout({ children }: ContainerProps) {
	const router = useRouter()
	const isHomePage = router.pathname === '/'

	return (
		<Container
			key={isHomePage ? 'home' : 'not home'}
			as={Stack}
			maxW="8xl"
			minH="100vh"
			px={{ base: 4, md: 8 }}
			pb={20}
		>
			{isHomePage ? (
				<Navbar />
			) : (
				<>
					<AppBar />
					<Subnav />
				</>
			)}
			<Stack as="main" spacing={8} flexGrow={1}>
				{children}
			</Stack>
		</Container>
	)
}
