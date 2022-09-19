import { Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import useMotionHeading from 'hooks/useMotionHeading'

interface PageHeadingProps {
	text: string
}

export default function PageHeading({ text }: PageHeadingProps) {
	return (
		<Heading as="h1" fontSize="6xl">
			<motion.span {...useMotionHeading(text)} />
		</Heading>
	)
}
