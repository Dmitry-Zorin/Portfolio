import { Button, Flex, HStack, Stack } from '@chakra-ui/react'
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Icon from 'components/Icon'
import PDFViewerDynamic from 'components/PDFViewerDynamic'

const filename = 'Resume_Dmitry-Zorin.pdf'
const fileUrl = `/files/${filename}`

export default function Resume() {
	return (
		<Flex justify="center">
			<Stack spacing={8} maxW="5xl" w="full">
				<HStack spacing={4} justify="center">
					<Button
						as="a"
						href={fileUrl}
						target="_blank"
						leftIcon={<Icon icon={faFilePdf} boxSize={4} />}
					>
						Открыть
					</Button>
					<Button
						as="a"
						href={fileUrl}
						leftIcon={<Icon icon={faDownload} boxSize={4} />}
						download
					>
						Скачать
					</Button>
				</HStack>
				<PDFViewerDynamic filename={filename} />
			</Stack>
		</Flex>
	)
}
