import {
	Badge,
	Box,
	Divider,
	Heading,
	Hide,
	ListItem,
	Show,
	SimpleGrid,
	Stack,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
	href: string
	src: StaticImageData
	title: string
	description: string
	year: number
	tags: string[]
	last?: boolean
}

export default function ProjectItem({
	href,
	src,
	title,
	description,
	year,
	tags,
	last,
}: ProjectItemProps) {
	const header = (
		<Stack align="flex-start">
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

	return (
		<ListItem as={Stack} spacing={8}>
			<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
				<Hide above="lg">{header}</Hide>
				<Link href={href} passHref>
					<Box
						as="a"
						role="group"
						target="_blank"
						borderRadius="lg"
						border="1px"
						borderColor="border"
						overflow="hidden"
						shadow="md"
						_hover={{ shadow: 'lg' }}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{
								type: 'spring',
								stiffness: 120,
								damping: 14,
							}}
						>
							<Image
								alt={title}
								src={src}
								layout="responsive"
								quality={100}
								priority
							/>
						</motion.div>
					</Box>
				</Link>
				<div>
					<Stack spacing={4}>
						<Show above="lg">{header}</Show>
						<Text>{description}</Text>
						<Wrap pt={2}>
							{tags.map((tag) => (
								<WrapItem key={tag}>
									<Badge>{tag}</Badge>
								</WrapItem>
							))}
						</Wrap>
					</Stack>
				</div>
			</SimpleGrid>
			{!last && <Divider />}
		</ListItem>
	)
}
