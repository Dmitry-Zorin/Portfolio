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
				direction={{ base: 'column', md: 'row' }}
				justify="center"
				align="center"
				m="auto"
				spacing={10}
			>
				<Avatar large />
				<MotionStack
					initial="initial"
					animate="animate"
					transition={{ staggerChildren: 0.3 }}
				>
					<Heading as={motion.h1} variants={variants}>
						Зорин Дмитрий Олегович
					</Heading>
					<Text
						as={motion.p}
						variants={variants}
						fontSize="2xl"
						color="text-secondary"
					>
						Фулстек разработчик
					</Text>
				</MotionStack>
			</Stack>
			<Box flexGrow={2} />
		</Stack>
	)
}
