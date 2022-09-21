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
import ProjectHeading from './ProjectHeading'
import ProjectImage from './ProjectImage'

export interface ProjectListItemProps {
	project: Project
	index: number
	length: number
}

export default function ProjectListItem({
	project,
	index,
	length,
}: ProjectListItemProps) {
	return (
		<Stack as="li" spacing={10}>
			<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
				<ProjectHeading project={project} display={{ lg: 'none' }} />
				<ProjectImage project={project} />
				<motion.div
					variants={{
						initial: { x: '100vw' },
						animate: { x: 0 },
					}}
				>
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
				</motion.div>
			</SimpleGrid>
			{index < length - 1 && <Divider />}
		</Stack>
	)
}
