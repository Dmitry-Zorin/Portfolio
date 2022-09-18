import { List } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Projects } from 'pages/projects'
import ProjectItem from './ProjectItem'

interface ProjectListProps {
	projects: Projects
}

export default function ProjectList({ projects }: ProjectListProps) {
	return (
		<List
			as={motion.ul}
			initial="initial"
			animate="animate"
			variants={{
				animate: {
					transition: {
						staggerChildren: 0.25,
					},
				},
			}}
			spacing={8}
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
