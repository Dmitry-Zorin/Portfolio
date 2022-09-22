import { HStack } from '@chakra-ui/react'
import {
	faGithub,
	faLinkedin,
	faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import SocialLink from './SocialLink'

export default function Socials() {
	return (
		<HStack spacing={6} justify={{ base: 'center', lg: 'flex-start' }}>
			<SocialLink
				icon={faTelegram}
				color="telegram.500"
				href="https://t.me/dimazor"
				text="@dimazor"
			/>
			<SocialLink
				icon={faLinkedin}
				color="linkedin.700"
				href="https://linkedin.com/in/dimazorin"
				text="dimazorin"
			/>
			<SocialLink
				icon={faGithub}
				color="#333"
				href="https://github.com/Dmitry-Zorin"
				text="Dmitry-Zorin"
			/>
		</HStack>
	)
}
