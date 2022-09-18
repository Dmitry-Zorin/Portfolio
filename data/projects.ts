import challengesImage from 'assets/images/Challenges.png'
import pssImage from 'assets/images/Publication-Storage-System.png'
import trainStationImage from 'assets/images/Train-Station.png'

export const projects = [
	{
		title: 'Система хранения публикаций',
		href: 'https://publication-storage-system.vercel.app/ru',
		description:
			'Проект в стиле электронной библиотеки, основанный на проекте, который был мной разработан в Технополисе "ЭРА".',
		src: pssImage,
		year: 2022,
		tags: [
			'TypeScript',
			'React',
			'Next',
			'React-Query',
			'Prisma',
			'PostgresQL',
			'Chakra UI',
		],
	},
	{
		title: 'Железнодорожная станция',
		href: 'https://train-station.vercel.app',
		description:
			'Мини-проект, состоящий из одной страницы, выполненный в рамках хакатона "Цифровой прорыв".',
		src: trainStationImage,
		year: 2021,
		tags: ['React', 'Material-UI', 'Framer Motion'],
	},
	{
		title: 'Челленджи',
		href: 'https://create-challenges.vercel.app',
		description:
			'Система, позволяющая создавать челленджи, ограниченные и неограниченные по времени, и следить за их выполнением.',
		src: challengesImage,
		year: 2020,
		tags: [
			'React',
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

export type Projects = typeof projects

export type Project = Projects[number]
