import { Box, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Icon from 'components/Icon'
import { MotionBox, MotionStack } from 'components/motion'
import { motion } from 'framer-motion'
import Avatar from 'layout/Avatar'
import Socials from './Socials'

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
				spacing={{ base: 8, lg: 12 }}
			>
				<Avatar large />
				<MotionStack
					maxW="2xl"
					spacing={6}
					textAlign={{ base: 'center', lg: 'left' }}
					initial="initial"
					animate="animate"
					transition={{ staggerChildren: 0.25 }}
				>
					<MotionStack variants={variants}>
						<Heading
							as="h1"
							fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
							flexShrink={0}
						>
							Зорин Дмитрий Олегович
						</Heading>
						<Stack
							spacing={{ base: 2, md: 8 }}
							direction={{ base: 'column', md: 'row' }}
							justify={{ base: 'center', lg: 'flex-start' }}
							align="center"
						>
							<HStack>
								<Icon icon={faPhone} />
								<Text>+7 (916) 592-65-50</Text>
							</HStack>
							<HStack>
								<Icon icon={faEnvelope} />
								<Link
									href="mailto:dima.zor@mail.ru"
									target="_blank"
									_hover={{ color: 'primary' }}
								>
									dima.zor@mail.ru
								</Link>
							</HStack>
						</Stack>
					</MotionStack>
					<Text
						as={motion.p}
						variants={variants}
						fontSize={{ base: 'xl', md: '2xl' }}
						color="text-secondary"
					>
						Fullstack-разработчик, любящий делать удобные, красивые и быстро
						работающие веб-сайты и веб-приложения.
					</Text>
					<MotionBox variants={variants}>
						<Socials />
					</MotionBox>
				</MotionStack>
			</Stack>
			<Box flexGrow={2} />
		</Stack>
	)
}
