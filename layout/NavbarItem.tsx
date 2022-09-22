import { ListItem } from '@chakra-ui/react'
import Link, { LinkProps } from 'components/Link'
import MotionText from '../components/MotionText'

interface NavbarItemProps extends LinkProps {
	text: string
}

export default function NavbarItem({ text, ...props }: NavbarItemProps) {
	return (
		<ListItem py={4}>
			<Link
				display="flex"
				justifyContent="center"
				fontSize="3xl"
				fontWeight="semibold"
				_hover={{ color: 'primary' }}
				p={4}
				{...props}
			>
				<MotionText text={text} />
			</Link>
		</ListItem>
	)
}
