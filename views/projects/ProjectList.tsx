import { List } from '@chakra-ui/react'
import { projects } from 'views/projects/projects'
import ProjectItem from './ProjectItem'

export default function ProjectList() {
	return (
		<List spacing={8}>
			{projects.map((item, i) => (
				<ProjectItem
					key={item.title}
					first={!i}
					last={i === projects.length - 1}
					{...item}
				/>
			))}
		</List>
	)
}
