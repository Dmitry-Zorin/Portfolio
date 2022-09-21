import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface MotionTextProps {
	text: string
}

export default function MotionText({ text }: MotionTextProps) {
	return (
		<Box as={motion.span} layoutId={text} display="inline-block">
			{text}
		</Box>
	)
}
