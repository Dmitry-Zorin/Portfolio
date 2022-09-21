import Head from 'components/Head'
import PageHeading from 'layout/PageHeading'
import ProjectList from 'views/projects/ProjectList'

export default function ProjectsPage() {
	return (
		<>
			<Head title="Проекты" />
			<PageHeading text="Проекты" />
			<ProjectList />
		</>
	)
}
