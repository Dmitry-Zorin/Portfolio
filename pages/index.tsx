import { Heading, HStack, Stack, Text } from '@chakra-ui/react'
import Head from 'components/Head'
import Avatar from 'layout/Avatar'

export default function HomePage() {
	return (
		<>
			<Head title="Портфолио" desc="Сайт портфолио Дмитрия Зорина" />
			<HStack spacing={8} p={8}>
				<Avatar large />
				<Stack spacing={4}>
					<Heading>Зорин Дмитрий Олегович</Heading>
					<Text>Фулстек разработчик</Text>
				</Stack>
			</HStack>
		</>
	)
}
