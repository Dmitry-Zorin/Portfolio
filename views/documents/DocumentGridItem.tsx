import { Heading, Stack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(import('components/PDFViewer'), { ssr: false })

interface DocumentGridItemProps {
	text: string
	file: string
}

export default function DocumentGridItem({
	text,
	file,
}: DocumentGridItemProps) {
	return (
		<Stack as="section" spacing={4}>
			<Heading size="md">{text}</Heading>
			<PDFViewer file={file} ariaLabel={`Открыть "${file}"`} preview />
		</Stack>
	)
}
