import { Heading } from '@chakra-ui/react'
import Link from 'components/Link'
import { motion } from 'framer-motion'
import { slowSpringConfig } from 'utils/animation'

interface PageHeadingProps {
	link?: boolean
	page: string
	text: string
}

export default function PageHeading({ link, page, text }: PageHeadingProps) {
	const motionText = (
		<motion.div
			layoutId={page}
			style={{
				display: 'inline-block',
				zIndex: 0,
			}}
			transition={slowSpringConfig}
		>
			{text}
		</motion.div>
	)

	return link ? (
		<Link href={`/${page}`}>
			<Heading fontSize="3xl" fontWeight="semibold">
				{motionText}
			</Heading>
		</Link>
	) : (
		<Heading as="h1" fontSize="6xl" pt={5} pb={10}>
			{motionText}
		</Heading>
	)
}
