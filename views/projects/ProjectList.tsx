import { MotionList } from 'components/motion'
import { projects } from 'data/projects'
import ProjectListItem from './ProjectListItem'

export default function ProjectList() {
	return (
		<MotionList
			spacing={10}
			initial="initial"
			animate="animate"
			transition={{ staggerChildren: 0.3 }}
		>
			{projects.map((project, i) => (
				<ProjectListItem
					key={project.title}
					project={project}
					length={projects.length}
					index={i}
				/>
			))}
		</MotionList>
	)
}
