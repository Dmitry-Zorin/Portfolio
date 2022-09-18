import { Box } from '@chakra-ui/react'
import { Project } from 'data/projects'
import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/future/image'
import Link from 'next/link'
import { gentleSpringConfig } from 'utils/animation'

interface ProjectImageProps extends Partial<ImageProps> {
	project: Project
}

export default function ProjectImage({ project, ...props }: ProjectImageProps) {
	return (
		<Link href={project.href} passHref>
			<Box
				as={motion.a}
				aria-label={project.title}
				target="_blank"
				borderRadius="lg"
				border="1px"
				borderColor="border"
				overflow="hidden"
				shadow="md"
				_hover={{ shadow: 'xl' }}
				transitionProperty="box-shadow"
				transitionDuration="normal"
				transitionTimingFunction="ease"
				whileHover={{
					scale: 1.0375,
					transition: gentleSpringConfig,
				}}
			>
				<Image
					alt={project.title}
					src={project.src}
					placeholder="blur"
					quality={100}
					{...props}
				/>
			</Box>
		</Link>
	)
}
