import {
	Badge,
	Divider,
	SimpleGrid,
	Stack,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'
import { Project } from 'data/projects'
import { motion } from 'framer-motion'
import { slowerSpringConfig } from 'utils/animation'
import ProjectHeading from './ProjectHeading'
import ProjectImage from './ProjectImage'

export interface ProjectItemProps {
	project: Project
	index: number
	length: number
}

export default function ProjectItem({
	project,
	index,
	length,
}: ProjectItemProps) {
	return (
		<motion.li
			variants={{
				initial: { y: '100%', opacity: 0 },
				animate: { y: 0, opacity: 1 },
			}}
			transition={{
				y: slowerSpringConfig,
				opacity: {
					type: 'anticipate',
					duration: 0.75,
				},
			}}
		>
			<Stack spacing={10}>
				<SimpleGrid as="article" columns={{ base: 1, lg: 2 }} spacing={8}>
					<ProjectHeading project={project} display={{ lg: 'none' }} />
					<ProjectImage project={project} />
					<div>
						<ProjectHeading
							project={project}
							display={{ base: 'none', lg: 'block' }}
							pb={4}
						/>
						<Stack spacing={4}>
							<Text>{project.description}</Text>
							<Wrap pt={2}>
								{project.tags.map((tag) => (
									<WrapItem key={tag}>
										<Badge>{tag}</Badge>
									</WrapItem>
								))}
							</Wrap>
						</Stack>
					</div>
				</SimpleGrid>
				{index < length - 1 && <Divider />}
			</Stack>
		</motion.li>
	)
}
