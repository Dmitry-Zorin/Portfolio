import { ListItem } from '@chakra-ui/react'
import Link from 'components/Link'
import MotionText from '../components/MotionText'

interface NavbarItemProps {
	href: string
	text: string
}

export default function NavbarItem({ href, text }: NavbarItemProps) {
	return (
		<ListItem py={4}>
			<Link
				href={href}
				display="flex"
				justifyContent="center"
				fontSize="3xl"
				fontWeight="semibold"
				_hover={{ color: 'primary' }}
				p={4}
			>
				<MotionText text={text} />
			</Link>
		</ListItem>
	)
}
