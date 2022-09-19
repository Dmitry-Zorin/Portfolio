import { Box, useBreakpointValue } from '@chakra-ui/react'
import { Project } from 'data/projects'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import Link from 'next/link'
import { gentleSpringConfig } from 'utils/animation'

interface ProjectImageProps {
	project: Project
}

export default function ProjectImage({ project }: ProjectImageProps) {
	const quality = useBreakpointValue({ base: 75, md: 100, lg: 75 })

	return (
		<Link href={project.href} passHref>
			<Box
				as={motion.a}
				aria-label={project.title}
				target="_blank"
				borderRadius="xl"
				overflow="hidden"
				shadow="md"
				transitionProperty="box-shadow"
				transitionDuration="normal"
				transitionTimingFunction="ease"
				_hover={{ shadow: 'xl' }}
				whileHover={{
					scale: 1.025,
					transition: gentleSpringConfig,
				}}
			>
				<Image
					alt={project.title}
					src={project.src}
					placeholder="blur"
					quality={quality}
				/>
			</Box>
		</Link>
	)
}
