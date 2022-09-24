import { Box, Center } from '@chakra-ui/react'
import avatarImg from 'assets/images/Dmitry-Zorin.jpg'
import Link from 'components/Link'
import { MotionBox } from 'components/motion'
import Image from 'next/future/image'
import { cloneElement } from 'react'
import { slowSpringConfig } from 'utils/animation'

const image = (
	<Box
		as={Image}
		alt="Аватар"
		src={avatarImg}
		loading="eager"
		placeholder="blur"
		quality={100}
	/>
)

interface AvatarProps {
	large?: boolean
}

export default function Avatar({ large }: AvatarProps) {
	const AvatarImage1 = cloneElement(image, {
		filter: 'url("#sharpBlur") brightness(0.5)',
	})

	const AvatarImage2 = cloneElement(image, {
		transform: `scale(${100 / 92})`,
		draggable: false,
		pointerEvents: 'all',
	})

	return (
		<Box
			as={large ? 'div' : Link}
			{...(!large && {
				href: '/',
				'aria-label': 'На главную',
			})}
			pos="relative"
			boxSize={large ? 64 : 16}
			minW={16}
			maxW="full"
			zIndex="overlay"
		>
			<Center
				pos="absolute"
				boxSize={64}
				top={large ? 0 : -24}
				left={large ? 0 : -24}
				pointerEvents="none"
				userSelect="none"
				maxW={large ? 'full' : undefined}
			>
				<div>
					<MotionBox
						layoutId="avatar"
						borderRadius="full"
						overflow="hidden"
						pos="relative"
						h="auto"
						shadow="dark-lg"
						style={{ scale: large ? 1 : 0.25 }}
						transition={{ ...slowSpringConfig, mass: 0.925 }}
					>
						{AvatarImage1}
						<Box
							pos="absolute"
							top="2%"
							left="2%"
							w="96%"
							h="96%"
							borderRadius="full"
							overflow="hidden"
						>
							{AvatarImage2}
						</Box>
					</MotionBox>
				</div>
			</Center>
			<svg visibility="hidden" style={{ pointerEvents: 'none' }}>
				<filter id="sharpBlur">
					<feGaussianBlur stdDeviation="2" />
					<feColorMatrix
						type="matrix"
						values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"
					/>
					<feComposite in2="SourceGraphic" operator="in" />
				</filter>
			</svg>
		</Box>
	)
}
