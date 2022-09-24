import { Heading } from '@chakra-ui/react'
import Link from 'components/Link'
import MotionText from 'components/MotionText'

interface PageHeadingProps {
	text: string
}

export default function PageHeading({ text }: PageHeadingProps) {
	return (
		<Heading fontSize="6xl" py={1} mt={2}>
			<Link href="/">
				<MotionText text={text} />
			</Link>
		</Heading>
	)
}
