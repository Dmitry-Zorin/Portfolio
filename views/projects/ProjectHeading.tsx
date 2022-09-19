import { Box, Heading, Stack, StackProps } from '@chakra-ui/react'
import { Project } from 'data/projects'
import Link from 'next/link'

interface ProjectHeadingProps extends StackProps {
	project: Project
}

export default function ProjectHeading({
	project,
	...props
}: ProjectHeadingProps) {
	return (
		<Stack as="header" {...props}>
			<Box
				color="primary"
				fontSize="xl"
				fontWeight="semibold"
				lineHeight="none"
			>
				{project.year}
			</Box>
			<Link href={project.href} passHref>
				<Heading
					as="a"
					target="_blank"
					flexGrow={1}
					textDecoration="underline"
					textUnderlineOffset="0.5rem"
					textDecorationColor="transparent"
					_hover={{ textDecorationColor: 'primary' }}
					transitionProperty="text-decoration-color"
					transitionDuration="fast"
					transitionTimingFunction="ease-in-out"
				>
					{project.title}
				</Heading>
			</Link>
		</Stack>
	)
}
