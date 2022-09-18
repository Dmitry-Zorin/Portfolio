import {
	Badge,
	Divider,
	Flex,
	SimpleGrid,
	Stack,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Project } from 'pages/projects'
import { gentleSpringConfig } from 'utils/animation'
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
			variants={{ initial: { y: '25vh' }, animate: { y: 0 } }}
			transition={gentleSpringConfig}
		>
			<Stack spacing={8}>
				<SimpleGrid as="article" columns={{ base: 1, lg: 2 }} spacing={8}>
					<ProjectHeading display={{ lg: 'none' }} project={project} />
					<Flex>
						<ProjectImage project={project} />
					</Flex>
					<Stack spacing={4}>
						<ProjectHeading
							display={{ base: 'none', lg: 'block' }}
							project={project}
						/>
						<Text>{project.description}</Text>
						<Wrap pt={2}>
							{project.tags.map((tag) => (
								<WrapItem key={tag}>
									<Badge>{tag}</Badge>
								</WrapItem>
							))}
						</Wrap>
					</Stack>
				</SimpleGrid>
				{index < length - 1 && <Divider />}
			</Stack>
		</motion.li>
	)
}
