import { Heading } from '@chakra-ui/react'
import Head from 'components/Head'
import Link from 'components/Link'
import { projects } from 'data/projects'
import { motion } from 'framer-motion'
import { InferGetStaticPropsType } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import ProjectList from 'views/projects/ProjectList'

export async function getStaticProps() {
	return {
		props: {
			projects: await Promise.all(
				projects.map(async (project) => {
					const { base64, img } = await getPlaiceholder(project.imageProps.src)
					return {
						...project,
						imageProps: {
							...img,
							placeholder: 'blur' as const,
							blurDataURL: base64,
							quality: 90,
						},
					}
				}),
			),
		},
	}
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

export type Projects = StaticProps['projects']

export type Project = StaticProps['projects'][number]

export default function ProjectsPage({ projects }: StaticProps) {
	return (
		<>
			<Head title="Проекты" desc="Проекты Дмитрия Зорина" />
			<Link href="/" fontSize="xl">
				На главную
			</Link>
			<div>
				<Heading
					as={motion.h1}
					layoutId="projects"
					fontSize="6xl"
					pt={4}
					pb={8}
					display="inline-block"
				>
					Проекты
				</Heading>
			</div>
			<ProjectList projects={projects} />
		</>
	)
}
