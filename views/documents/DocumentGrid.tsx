import { SimpleGrid } from '@chakra-ui/react'
import DocumentGridItem from './DocumentGridItem'

export default function DocumentGrid() {
	return (
		<SimpleGrid
			columns={{ base: 1, md: 2, xl: 3 }}
			spacing={{ base: 4, md: 8 }}
		>
			<DocumentGridItem
				file="/files/University-Diploma_Dmitry-Zorin.pdf"
				text="Диплом Московского государственного университета имени М. В. Ломоносова"
			/>
			<DocumentGridItem
				file="/files/Letter-of-Recommendation_Dmitry-Zorin.pdf"
				text='Письмо рекомендации компании "People Power Company"'
			/>
			<DocumentGridItem
				file="/files/Hackathon-Diploma_Dmitry-Zorin.pdf"
				text='Диплом победителя Всероссийского конкурса "Цифровой прорыв"'
			/>
			<DocumentGridItem
				file="/files/Technopolis-ERA-Gramota_Dmitry_Zorin.pdf"
				text='Грамота технополиса "ЭРА"'
			/>
			<DocumentGridItem
				file="/files/Certificate_Dmitry-Zorin.pdf"
				text="Сертификат участника Всероссийских соревнований по кибербезопасности"
			/>
		</SimpleGrid>
	)
}
