import Head from 'components/Head'
import Link from 'components/Link'
import PageHeading from 'components/PageHeading'
import AppBar from 'layout/AppBar'
import ProjectList from 'views/projects/ProjectList'

export default function ProjectsPage() {
	return (
		<>
			<Head title="Проекты" desc="Проекты Дмитрия Зорина" />
			<Link href="/" fontSize="xl">
				На главную
			</Link>
			<PageHeading page="projects" text="Проекты" />
			<ProjectList />
		</>
	)
}
