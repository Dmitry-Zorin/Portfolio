import { Container, ContainerProps } from '@chakra-ui/react'
import AppBar from './AppBar'

export default function Layout({ children, ...props }: ContainerProps) {
	return (
		<Container as="main" maxW="8xl" px={8} pb={16} {...props}>
			<AppBar />
			{children}
		</Container>
	)
}
