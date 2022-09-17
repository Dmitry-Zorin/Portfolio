import { Container, ContainerProps } from '@chakra-ui/react'

export default function Layout(props: ContainerProps) {
	return <Container as="main" maxW="8xl" p={8} {...props} />
}
