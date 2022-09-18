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
		? { border: '6px solid', boxSize: 64 }
		: { border: '3px solid', boxSize: 16 }

	return (
		<motion.div
			layoutId="avatar"
			style={{ zIndex: 1, aspectRatio: '1' }}
			transition={slowerSpringConfig}
		>
			<Box
				as={Image}
				alt="Аватар"
				src={avatarImg}
				placeholder="blur"
				{...imageProps}
				borderRadius="full"
				borderColor="primary"
				sx={{ height: 'auto' }}
				{...props}
			/>
		</motion.div>
	)
}
