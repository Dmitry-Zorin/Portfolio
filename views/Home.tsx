import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { MotionStack } from 'components/motion'
import { motion } from 'framer-motion'
import Avatar from 'layout/Avatar'

const variants = {
	initial: { x: '100vw' },
	animate: { x: 0 },
}

export default function Home() {
	return (
		<Stack spacing={0} flexGrow={1}>
			<Box flexGrow={1} />
			<Stack
				as="article"
				direction={{ base: 'column', lg: 'row' }}
				justify="center"
				align="center"
				m="auto"
				spacing={10}
			>
				<Avatar large />
				<MotionStack
					maxW="2xl"
					spacing={4}
					textAlign={{ base: 'center', lg: 'left' }}
					initial="initial"
					animate="animate"
					transition={{ staggerChildren: 0.3 }}
				>
					<Heading as={motion.h1} variants={variants} flexShrink={0}>
						Зорин Дмитрий Олегович
					</Heading>
					<Text
						as={motion.p}
						variants={variants}
						fontSize="2xl"
						color="text-secondary"
					>
						Frontend-разработчик, любящий делать удобные, красивые и быстро
						работающие веб-сайты и веб-приложения.
					</Text>
				</MotionStack>
			</Stack>
			<Box flexGrow={2} />
		</Stack>
	)
}
