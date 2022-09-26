import { Heading, Stack } from '@chakra-ui/react'
import PDFViewerDynamic from 'components/PDFViewerDynamic'

interface DocumentGridItemProps {
	text: string
	filename: string
}

export default function DocumentGridItem({
	text,
	filename,
}: DocumentGridItemProps) {
	return (
		<Stack as="section" spacing={4}>
			<Heading size="md">{text}</Heading>
			<PDFViewerDynamic
				filename={filename}
				ariaLabel={`Открыть "${filename}"`}
				preview
			/>
		</Stack>
	)
}
