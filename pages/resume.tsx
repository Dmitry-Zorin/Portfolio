import { Button, HStack } from '@chakra-ui/react'
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Head from 'components/Head'
import Icon from 'components/Icon'
import PageHeading from 'layout/PageHeading'
import dynamic from 'next/dynamic'
const PDFViewer = dynamic(import('components/PDFViewer'), { ssr: false })

const file = '/files/Resume-Dmitry-Zorin.pdf'

export default function ResumePage() {
	return (
		<>
			<Head title="Резюме" />
			<PageHeading text="Резюме" />
			<HStack>
				<Button
					as="a"
					href={file}
					target="_blank"
					leftIcon={<Icon icon={faFilePdf} />}
				>
					Открыть
				</Button>
				<Button
					as="a"
					href={file}
					download={file.split('/').at(-1)}
					leftIcon={<Icon icon={faDownload} />}
				>
					Скачать
				</Button>
			</HStack>
			<PDFViewer file={file} />
		</>
	)
}
