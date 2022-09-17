import NextHead from 'next/head'
import { ReactElement } from 'react'

export interface HeadProps {
	children?: ReactElement[]
	title: string
	desc?: string
}

export default function Head({ children, title, desc }: HeadProps) {
	return (
		<NextHead>
			<title>{`${title} | Дмитрий Зорин`}</title>
			<meta name="description" content={desc} />
			{children}
		</NextHead>
	)
}
