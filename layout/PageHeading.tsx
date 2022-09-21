import { Heading } from '@chakra-ui/react'
import MotionText from 'components/MotionText'

interface PageHeadingProps {
	text: string
}

export default function PageHeading({ text }: PageHeadingProps) {
	return (
		<Heading as="h1" fontSize="6xl">
			<MotionText text={text} />
		</Heading>
	)
}
