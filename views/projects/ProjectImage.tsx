import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/future/image'
import Link from 'next/link'
import { Project } from 'pages/projects'
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
					scale: 1.05,
					transition: gentleSpringConfig,
				}}
			>
				<Image alt={project.title} {...project.imageProps} {...props} />
			</Box>
		</Link>
	)
}
