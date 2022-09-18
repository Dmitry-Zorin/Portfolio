import { Box, Heading, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Head from 'components/Head'
import Link from 'components/Link'
import { motion } from 'framer-motion'
import Image from 'next/future/image'

export default function HomePage() {
	return (
		<>
			<Head title="Портфолио" desc="Сайт портфолио Дмитрия Зорина" />
			<SimpleGrid columns={{ base: 2, md: 4 }}>
				<Link href="/projects">
					<Text
						as={motion.h1}
						layoutId="projects2"
						fontSize="4xl"
						fontWeight="semibold"
						display="inline-block"
					>
						Проекты
					</Text>
				</Link>
				<Link href="/projects">
					<Text
						as={motion.h1}
						layoutId="projects"
						fontSize="4xl"
						fontWeight="semibold"
					>
						Проекты
					</Text>
				</Link>
			</SimpleGrid>
			<HStack spacing={8} p={8}>
				<Box
					as={motion.div}
					layoutId="avatar"
					borderRadius="full"
					maxW={64}
					overflow="hidden"
					border="6px solid"
					borderColor="primary"
					sx={{ aspectRatio: '1' }}
				>
					<Image alt="Аватар" src="/images/Avatar.jpeg" />
				</Box>
				<Stack spacing={4}>
					<Heading>Зорин Дмитрий Олегович</Heading>
					<Text>Фулстек разработчик | Фронтенд разработчик</Text>
				</Stack>
			</HStack>
		</>
	)
}
