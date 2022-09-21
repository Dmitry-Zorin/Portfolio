import { List, SimpleGrid } from '@chakra-ui/react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
	return (
		<nav>
			<SimpleGrid as={List} columns={{ base: 1, sm: 2, md: 4 }}>
				<NavbarItem href="/contacts" text="Контакты" />
				<NavbarItem href="/resume" text="Резюме" />
				<NavbarItem href="/projects" text="Проекты" />
				<NavbarItem href="/files" text="Файлы" />
			</SimpleGrid>
		</nav>
	)
}
