import Head from 'components/Head'
import PageHeading from 'components/PageHeading'
import ProjectList from 'views/projects/ProjectList'

export default function ProjectsPage() {
	return (
		<>
			<Head title="Проекты" desc="Проекты Дмитрия Зорина" />
			<PageHeading page="projects" text="Проекты" />
			<ProjectList />
		</>
	)
}
