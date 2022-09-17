import { Heading } from '@chakra-ui/react'
import Head from 'components/Head'
import Link from 'next/link'

export default function HomePage() {
	return (
		<>
			<Head title="Портфолио" desc="Сайт портфолио Дмитрия Зорина" />
			<Link href="/projects" passHref>
				<Heading as="h1" fontSize="5xl">
					Проекты
				</Heading>
			</Link>
		</>
	)
}
