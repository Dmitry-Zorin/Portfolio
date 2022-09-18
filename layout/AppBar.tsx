import { Box, HStack, Link, Stack, Text } from '@chakra-ui/react'
import {
	faContactCard,
	faEnvelope,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import Icon from '../components/Icon'

export default function AppBar() {
	return (
		<HStack
			as={motion.div}
			spacing={4}
			// direction={{ base: 'column', md: 'row' }}
			p={4}
			mb={4}
			borderBottom="1px"
			borderColor="border"
			justify="space-between"
			align="center"
			animate={{ y: 0 }}
			exit={{ y: '-100%', height: 0 }}
		>
			<HStack spacing={4}>
				<Box
					as={motion.div}
					layoutId="avatar"
					borderRadius="full"
					boxSize={16}
					overflow="hidden"
					border="3px solid"
					borderColor="primary"
				>
					<Image alt="Аватар" src="/images/Avatar.jpeg" />
				</Box>
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
