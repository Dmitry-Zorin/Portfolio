import NextHead from 'next/head'
import { ReactNode } from 'react'

export interface HeadProps {
	children?: ReactNode
	title: string
	desc?: string
}

export default function Head({ children, title, desc }: HeadProps) {
	return (
		<NextHead>
			<title>{`${title} | Дмитрий Зорин`}</title>
			<meta name="description" content={desc ?? `${title} Дмитрия Зорина`} />
			{children}
		</NextHead>
	)
}
