import {
	Badge,
	Divider,
	ListItem,
	SimpleGrid,
	Stack,
	StackProps,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'
import { StaticImageData } from 'next/image'
import ProjectHeading from './ProjectHeading'
import ProjectImage from './ProjectImage'

export interface ProjectItemProps {
	href: string
	src: StaticImageData
	title: string
	description: string
	year: number
	tags: string[]
	index: number
	length: number
}

export default function ProjectItem({
	href,
	src,
	title,
	description,
	year,
	tags,
	index,
	length,
}: ProjectItemProps) {
	function Heading(props: StackProps) {
		return (
			<ProjectHeading
				display={{ lg: 'none' }}
				title={title}
				href={href}
				year={year}
				{...props}
			/>
		)
	}

	return (
		<Stack as={ListItem} spacing={8}>
			<SimpleGrid as="article" columns={{ base: 1, lg: 2 }} spacing={8}>
				<Heading display={{ lg: 'none' }} />
				<ProjectImage href={href} src={src} title={title} />
				<Stack spacing={4}>
					<Heading display={{ base: 'none', lg: 'block' }} />
					<Text>{description}</Text>
					<Wrap pt={2}>
						{tags.map((tag) => (
							<WrapItem key={tag}>
								<Badge>{tag}</Badge>
							</WrapItem>
						))}
					</Wrap>
				</Stack>
			</SimpleGrid>
			{index < length - 1 && <Divider />}
		</Stack>
	)
}
