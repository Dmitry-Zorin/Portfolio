import { HStack, Stack, Text } from '@chakra-ui/react'
import Avatar from './Avatar'

export default function AppBar() {
	return (
		<HStack
			as="header"
			spacing={4}
			py={4}
			borderBottom="1px"
			borderColor="border"
			justify="space-between"
			align="center"
		>
			<HStack spacing={4}>
				<Avatar />
				<Stack spacing={0}>
					<Text fontSize="2xl" fontWeight="medium">
						Дмитрий Зорин
					</Text>
					<Text display={{ base: 'none', sm: 'block' }} color="text-secondary">
						Frontend-разработчик
					</Text>
				</Stack>
			</HStack>
		</HStack>
	)
}
