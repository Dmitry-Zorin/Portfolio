import Head from 'components/Head'
import PageHeading from 'layout/PageHeading'
import Resume from 'views/resume'

export default function ResumePage() {
	return (
		<>
			<Head title="Резюме" />
			<PageHeading text="Резюме" />
			<Resume />
		</>
	)
}
