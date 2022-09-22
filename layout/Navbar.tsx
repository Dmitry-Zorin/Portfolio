import { List, SimpleGrid } from '@chakra-ui/react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
	return (
		<nav>
			<SimpleGrid
				as={List}
				columns={{ base: 1, sm: 3 }}
				fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
				fontWeight="semibold"
			>
				<NavbarItem href="/resume" text="Резюме" />
				<NavbarItem href="/projects" text="Проекты" />
				<NavbarItem href="/files" text="Документы" />
			</SimpleGrid>
		</nav>
	)
}
