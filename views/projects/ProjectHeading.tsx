import { Box, Heading, Stack, StackProps } from '@chakra-ui/react'
import Link from 'next/link'
import { ProjectItemProps } from './ProjectItem'

export type ProjectHeadingProps = StackProps &
	Pick<ProjectItemProps, 'year' | 'href' | 'title'>

export default function ProjectHeading({
	year,
	href,
	title,
	...props
}: ProjectHeadingProps) {
	return (
		<Stack {...props}>
			<Box
				color="primary"
				fontSize="xl"
				fontWeight="semibold"
				lineHeight="none"
			>
				{year}
			</Box>
			<Link href={href} passHref>
				<Heading
					as="a"
					target="_blank"
					flexGrow={1}
					_hover={{
						textDecoration: 'underline',
						textDecorationColor: 'primary',
						textUnderlineOffset: '0.5rem',
					}}
				>
					{title}
				</Heading>
			</Link>
		</Stack>
	)
}
