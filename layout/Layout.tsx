import { Container, ContainerProps, SimpleGrid } from '@chakra-ui/react'
import PageHeading from 'components/PageHeading'
import { useRouter } from 'next/router'
import AppBar from './AppBar'

export default function Layout({ children, ...props }: ContainerProps) {
	const router = useRouter()

	return (
		<Container as="main" maxW="8xl" px={{ base: 4, md: 8 }} pb={20} {...props}>
			<header>
				{router.route === '/' ? (
					<SimpleGrid columns={{ base: 2, md: 4 }} py={8}>
						<PageHeading page="projects" text="Проекты" link />
					</SimpleGrid>
				) : (
					<AppBar />
				)}
			</header>
			{children}
		</Container>
	)
}
