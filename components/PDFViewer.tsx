import { Box, HStack, Link, Spinner, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { defaultSpringConfig, gentleSpringConfig } from 'utils/animation'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

interface PDFViewerProps {
	filename: string
	preview?: boolean
	ariaLabel?: string
}

export default function PDFViewer({
	filename,
	preview,
	ariaLabel,
}: PDFViewerProps) {
	const [numPages, setNumPages] = useState(1)
	const [width, setWidth] = useState<number>()
	const containerRef = useRef<HTMLDivElement & HTMLAnchorElement>(null)

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

	const fileUrl = `/files/${filename}`

	return (
		<Box
			ref={containerRef}
			{...(preview && {
				as: 'a',
				target: '_blank',
				href: fileUrl,
				'aria-label': ariaLabel || `Открыть файл "${filename}"`,
			})}
			sx={{
				canvas: {
					shadow: 'md',
					borderRadius: 'xl',
					transitionProperty: 'box-shadow',
					transitionDuration: 'normal',
					transitionTimingFunction: 'ease',
				},
			}}
			_hover={{
				canvas: {
					...(preview && {
						shadow: '2xl',
					}),
				},
			}}
		>
			<Document
				file={fileUrl}
				externalLinkTarget="_blank"
				error={
					<>
						<Text color="red">Произошла ошибка при загрузке PDF-файла</Text>
						<Text>
							Ссылка на файл:{' '}
							<Link href={fileUrl} target="_blank">
								{filename}
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
				onLoadSuccess={({ numPages }) => {
					if (!preview) setNumPages(numPages)
				}}
			>
				{preview ? (
					<motion.div
						transition={defaultSpringConfig}
						whileHover={{
							scale: 1.025,
							transition: gentleSpringConfig,
						}}
					>
						<Page pageNumber={1} width={width} loading="" />
					</motion.div>
				) : (
					Array.from({ length: numPages }, (_, index) => (
						<Page key={index} pageNumber={index + 1} width={width} loading="" />
					))
				)}
			</Document>
		</Box>
	)
}
