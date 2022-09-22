import { Box, HStack, Link, Spinner, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

interface PDFViewerProps {
	file: string
}

export default function PDFViewer({ file }: PDFViewerProps) {
	const [numPages, setNumPages] = useState(0)
	const [width, setWidth] = useState<number>()
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function onResize() {
			setWidth(containerRef.current?.clientWidth)
		}
		if (!width) {
			onResize()
		}
		window.addEventListener('resize', onResize, false)
		return () => {
			window.removeEventListener('resize', onResize, false)
		}
	}, [width])

	return (
		<Box ref={containerRef}>
			<Document
				file={file}
				externalLinkTarget="_blank"
				error={
					<>
						<Text color="red">Произошла ошибка при загрузке PDF-файла</Text>
						<Text>
							Ссылка на файл:{' '}
							<Link href={file} target="_blank">
								{file}
							</Link>
						</Text>
					</>
				}
				loading={
					<HStack>
						<Spinner size="sm" />
						<Text>Загрузка PDF-файла...</Text>
					</HStack>
				}
				onLoadSuccess={({ numPages }) => setNumPages(numPages)}
			>
				{Array.from(new Array(numPages), (_, index) => (
					<Page key={index} pageNumber={index + 1} width={width} loading="" />
				))}
			</Document>
		</Box>
	)
}
