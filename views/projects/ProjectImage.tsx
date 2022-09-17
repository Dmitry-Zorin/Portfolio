import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectItemProps } from './ProjectItem'

type ProjectImageProps = Pick<ProjectItemProps, 'href' | 'title' | 'src'>

export default function ProjectImage({ href, title, src }: ProjectImageProps) {
	return (
		<Link href={href} passHref>
			<Box
				as="a"
				role="group"
				target="_blank"
				borderRadius="lg"
				border="1px"
				borderColor="border"
				overflow="hidden"
				shadow="md"
				_hover={{ shadow: 'lg' }}
			>
				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{
						type: 'spring',
						stiffness: 120,
						damping: 14,
					}}
				>
					<Image
						alt={title}
						src={src}
						layout="responsive"
						quality={100}
						priority
					/>
				</motion.div>
			</Box>
		</Link>
	)
}
