import { ListItem } from '@chakra-ui/react'
import Link, { LinkProps } from 'components/Link'
import MotionText from '../components/MotionText'

interface NavbarItemProps extends LinkProps {
	text: string
}

export default function NavbarItem({ text, ...props }: NavbarItemProps) {
	return (
		<ListItem py={{ base: 1, sm: 4 }}>
			<Link
				display="flex"
				justifyContent="center"
				_hover={{ color: 'primary' }}
				p={{ base: 1, sm: 4 }}
				{...props}
			>
				<MotionText text={text} />
			</Link>
		</ListItem>
	)
}
