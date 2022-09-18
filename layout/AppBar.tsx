import { HStack, Link, Stack, StackProps, Text } from '@chakra-ui/react'
import {
	faContactCard,
	faEnvelope,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'
import Icon from 'components/Icon'
import Avatar from './Avatar'

export default function AppBar(props: StackProps) {
	return (
		<HStack
			spacing={4}
			py={4}
			mb={4}
			borderBottom="1px"
			borderColor="border"
			justify="space-between"
			align="center"
			{...props}
		>
			<HStack spacing={4}>
				<Avatar />
				<Stack spacing={0}>
					<Text fontSize="2xl" fontWeight="medium">
						Дмитрий Зорин
					</Text>
					<Text color="text-secondary">Фулстек разработчик</Text>
				</Stack>
			</HStack>
			<Stack spacing={1} display={{ base: 'none', md: 'block' }}>
				<HStack>
					<Icon icon={faEnvelope} />
					<Link
						href="mailto:dima.zor@mail.ru"
						fontSize="xl"
						_hover={{ color: 'primary' }}
					>
						dima.zor@mail.ru
					</Link>
				</HStack>
				<HStack>
					<Icon icon={faPhone} />
					<Text fontSize="xl">+7 (916) 592-6550</Text>
				</HStack>
			</Stack>
			<Icon icon={faContactCard} display={{ md: 'none' }} boxSize={6} />
		</HStack>
	)
}
