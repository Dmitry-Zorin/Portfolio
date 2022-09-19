import avatarImg from 'assets/images/Avatar.jpeg'
import MotionBox from 'components/MotionBox'
import Image from 'next/future/image'
import { slowSpringConfig } from 'utils/animation'

interface AvatarProps {
	large?: boolean
}

export default function Avatar({ large }: AvatarProps) {
	const imageProps = large
		? {
				boxSize: 64,
				border: '8px solid',
				shadow: 'dark-lg',
		  }
		: {
				boxSize: 16,
				border: '2px solid',
		  }

	return (
		<MotionBox
			layoutId="avatar"
			transition={slowSpringConfig}
			{...imageProps}
			borderColor="primary"
			borderRadius="full"
			overflow="hidden"
			zIndex={1}
		>
			<Image
				alt="Аватар"
				src={avatarImg}
				loading="eager"
				placeholder="blur"
				quality={100}
			/>
		</MotionBox>
	)
}
