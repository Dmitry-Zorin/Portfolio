import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import MotionBox from 'components/MotionBox'
import Avatar from 'layout/Avatar'
import { slowSpringConfig } from 'utils/animation'

const variants = {
	initial: { x: '100vw' },
	animate: {
		x: 0,
		transition: slowSpringConfig,
	},
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
				<MotionBox
					as={Stack}
					initial="initial"
					animate="animate"
					transition={{
						staggerChildren: 0.3,
					}}
				>
					<Heading as={MotionBox} variants={variants}>
						Зорин Дмитрий Олегович
					</Heading>
					<Text
						as={MotionBox}
						variants={variants}
						fontSize="2xl"
						color="text-secondary"
					>
						Фулстек разработчик
					</Text>
				</MotionBox>
			</Stack>
			<Box flexGrow={2} />
		</Stack>
	)
}
