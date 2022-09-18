import { Heading } from '@chakra-ui/react'
import Head from 'components/Head'
import Link from 'components/Link'
import { motion } from 'framer-motion'
import ProjectList from 'views/projects/ProjectList'

export default function ProjectsPage() {
	return (
		<>
			<Head title="Проекты" desc="Проекты Дмитрия Зорина" />
			<Link href="/" fontSize="xl">
				На главную
			</Link>
			<div>
				<Heading
					as={motion.h1}
					layoutId="projects"
					fontSize="6xl"
					pt={4}
					pb={8}
					display="inline-block"
				>
					Проекты
				</Heading>
			</div>
			<ProjectList />
		</>
	)
}
