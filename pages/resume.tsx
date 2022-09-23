import { Button, Flex, HStack, Stack } from '@chakra-ui/react'
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Head from 'components/Head'
import Icon from 'components/Icon'
import PageHeading from 'layout/PageHeading'
import dynamic from 'next/dynamic'
const PDFViewer = dynamic(import('components/PDFViewer'), { ssr: false })

const file = '/files/Resume_Dmitry-Zorin.pdf'

export default function ResumePage() {
	return (
		<>
			<Head title="Резюме" />
			<PageHeading text="Резюме" />
			<Flex justify="center">
				<Stack spacing={8} maxW="5xl" w="full">
					<HStack spacing={4} justify="center">
						<Button
							as="a"
							href={file}
							target="_blank"
							leftIcon={<Icon icon={faFilePdf} boxSize={4} />}
						>
							Открыть
						</Button>
						<Button
							as="a"
							href={file}
							download={file.split('/').at(-1)}
							leftIcon={<Icon icon={faDownload} boxSize={4} />}
						>
							Скачать
						</Button>
					</HStack>
					<PDFViewer file={file} />
				</Stack>
			</Flex>
		</>
	)
}
