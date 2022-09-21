import { HStack, ListItem, Text } from '@chakra-ui/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from 'components/Icon'
import Link from 'next/link'

interface SubnavItemProps {
	href: string
	icon: IconProp
	text: string
}

export default function SubnavItem({ href, icon, text }: SubnavItemProps) {
	return (
		<ListItem>
			<Link href={href} passHref>
				<HStack as="a" py={2} _hover={{ color: 'primary' }}>
					<Icon icon={icon} />
					<Text>{text}</Text>
				</HStack>
			</Link>
		</ListItem>
	)
}
