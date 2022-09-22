import { Link } from '@chakra-ui/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from 'components/Icon'

interface SocialLinkProps {
	icon: IconProp
	color?: string
	href: string
	text: string
}

export default function SocialLink({
	icon,
	color,
	href,
	text,
}: SocialLinkProps) {
	return (
		<Link href={href} target="_blank" _hover={{ color: 'primary' }}>
			<Icon icon={icon} color={color} boxSize={10} />
		</Link>
	)
}
