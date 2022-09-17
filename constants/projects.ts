import challengesImage from 'images/Challenges.png'
import pssImage from 'images/Publication-Storage-System.png'
import trainStationImage from 'images/Train-Station.png'

export const projects = [
	{
		href: 'https://publication-storage-system.vercel.app/ru',
		src: pssImage,
		title: 'Система хранения публикаций',
		description:
			'Проект в стиле электронной библиотеки, основанный на проекте, который был мной разработан в Технополисе "ЭРА".',
		year: 2022,
		tags: [
			'React',
			'TypeScript',
			'Next',
			'React-Query',
			'Prisma',
			'PostgresQL',
			'Chakra UI',
		],
	},
	{
		href: 'https://train-station.vercel.app',
		src: trainStationImage,
		title: 'Железнодорожная станция',
		description:
			'Мини-проект, состоящий из одной страницы, выполненный в рамках хакатона "Цифровой прорыв".',
		year: 2021,
		tags: ['React', 'JavaScript', 'Material-UI', 'Framer Motion'],
	},
	{
		href: 'https://create-challenges.vercel.app',
		src: challengesImage,
		title: 'Челленджи',
		description: 'Один из моих первых личных проектов с использованием React.',
		year: 2020,
		tags: [
			'React',
			'JavaScript',
			'Express',
			'Node',
			'GraphQL',
			'MongoDB',
			'Mongoose',
			'UIkit',
			'SCSS',
		],
	},
]
