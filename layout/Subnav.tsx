import { HStack, List } from '@chakra-ui/react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import SubnavItem from './SubnavItem'

export default function Subnav() {
	return (
		<nav>
			<HStack as={List} fontSize="xl">
				<SubnavItem href="/" icon={faHome} text="На главную" />
			</HStack>
		</nav>
	)
}
