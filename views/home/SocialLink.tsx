import { Link, LinkProps } from '@chakra-ui/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from 'components/Icon'

interface SocialLinkProps extends LinkProps {
	icon: IconProp
	color?: string
	href: string
}

export default function SocialLink({
	icon,
	color,
	href,
	...props
}: SocialLinkProps) {
	return (
		<Link href={href} target="_blank" _hover={{ color: 'primary' }} {...props}>
			<Icon icon={icon} color={color} boxSize={10} />
		</Link>
	)
}
