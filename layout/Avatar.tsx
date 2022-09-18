import { Box, BoxProps } from '@chakra-ui/react'
import avatarImg from 'assets/images/Avatar.jpeg'
import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/future/image'
import { slowerSpringConfig } from 'utils/animation'

type AvatarProps = BoxProps &
	Partial<ImageProps> & {
		large?: boolean
	}

export default function Avatar({ large, ...props }: AvatarProps) {
	const imageProps = large
		? {
				boxSize: 64,
				border: '6px solid',
				shadow: 'dark-lg',
		  }
		: {
				boxSize: 16,
				border: '2px solid',
		  }

	return (
		<motion.div
			layoutId="avatar"
			style={{ zIndex: 1 }}
			transition={slowerSpringConfig}
		>
			<Box
				as={Image}
				alt="Аватар"
				src={avatarImg}
				loading="eager"
				placeholder="blur"
				quality={100}
				{...imageProps}
				borderColor="primary"
				borderRadius="full"
				sx={{ height: 'auto' }}
				{...props}
			/>
		</motion.div>
	)
}
