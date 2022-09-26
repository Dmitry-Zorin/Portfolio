import { SimpleGrid } from '@chakra-ui/react'
import DocumentGridItem from './DocumentGridItem'

export default function DocumentGrid() {
	return (
		<SimpleGrid
			columns={{ base: 1, md: 2, xl: 3 }}
			spacing={{ base: 4, md: 8 }}
		>
			<DocumentGridItem
				filename="University-Diploma_Dmitry-Zorin.pdf"
				text="Диплом Московского государственного университета имени М. В. Ломоносова"
			/>
			<DocumentGridItem
				filename="Letter-of-Recommendation_Dmitry-Zorin.pdf"
				text='Письмо рекомендации компании "People Power Company"'
			/>
			<DocumentGridItem
				filename="Hackathon-Winner-Diploma-2021_Dmitry-Zorin.pdf"
				text='Диплом победителя Всероссийского конкурса "Цифровой прорыв"'
			/>
			<DocumentGridItem
				filename="Hackathon-Participant-Diploma-2021_Dmitry-Zorin.pdf"
				text='Диплом участника финала Всероссийского конкурса "Цифровой прорыв"'
			/>
			<DocumentGridItem
				filename="Technopolis-ERA-Gramota_Dmitry-Zorin.pdf"
				text='Грамота выпускника технополиса "ЭРА"'
			/>
			<DocumentGridItem
				filename="Competition-Participant-2020-Certificate_Dmitry-Zorin.pdf"
				text="Сертификат участника Всероссийских соревнований по кибербезопасности"
			/>
		</SimpleGrid>
	)
}
