import { List } from '@chakra-ui/react'
import { projects } from 'data/projects'
import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'

export default function ProjectList() {
	return (
		<List
			as={motion.ul}
			spacing={10}
			initial="initial"
			animate="animate"
			variants={{
				animate: {
					transition: {
						staggerChildren: 0.3,
					},
				},
			}}
		>
			{projects.map((project, i) => (
				<ProjectItem
					key={project.title}
					project={project}
					length={projects.length}
					index={i}
				/>
			))}
		</List>
	)
}
