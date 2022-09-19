import { ListItem } from '@chakra-ui/react'
import Link from 'components/Link'
import { motion } from 'framer-motion'
import useMotionHeading from 'hooks/useMotionHeading'

interface NavbarItemProps {
	href: string
	text: string
}

export default function NavbarItem({ href, text }: NavbarItemProps) {
	return (
		<ListItem>
			<Link
				href={href}
				display="flex"
				justifyContent="center"
				fontSize="3xl"
				fontWeight="semibold"
				_hover={{ color: 'primary' }}
				py={8}
			>
				<motion.span {...useMotionHeading(text)} />
			</Link>
		</ListItem>
	)
}
