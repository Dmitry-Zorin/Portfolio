import { Container, Heading, HStack } from '@chakra-ui/react'
import Head from 'components/Head'
import ProjectList from 'views/projects/ProjectList'

export default function ProjectsPage() {
	return (
		<Container maxW="8xl" p={8}>
			<Head title="Проекты" desc="Проекты Дмитрия Зорина" />
			<HStack p={4} borderBottom="1px" borderColor="border"></HStack>
			<Heading as="h1" fontSize="6xl" py={8}>
				Проекты
			</Heading>
			<ProjectList />
		</Container>
	)
}
