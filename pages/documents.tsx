import Head from 'components/Head'
import PageHeading from 'layout/PageHeading'
import DocumentGrid from 'views/documents/DocumentGrid'

export default function FilesPage() {
	return (
		<>
			<Head title="Документы" />
			<PageHeading text="Документы" />
			<DocumentGrid />
		</>
	)
}
