import { List, SimpleGrid } from '@chakra-ui/react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
	return (
		<nav>
			<SimpleGrid as={List} columns={{ base: 2, md: 4 }}>
				<NavbarItem href="/projects" text="Проекты" />
			</SimpleGrid>
		</nav>
	)
}
