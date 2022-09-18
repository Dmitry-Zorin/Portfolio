import { Heading, HStack, Stack, Text } from '@chakra-ui/react'
import Head from 'components/Head'
import Avatar from 'layout/Avatar'

export default function HomePage() {
	return (
		<>
			<Head title="Портфолио" desc="Сайт портфолио Дмитрия Зорина" />
			<HStack spacing={10} pt={16} justify="center">
				<Avatar large />
				<Stack>
					<Heading>Зорин Дмитрий Олегович</Heading>
					<Text fontSize="2xl" color="text-secondary">
						Фулстек разработчик
					</Text>
				</Stack>
			</HStack>
		</>
	)
}
