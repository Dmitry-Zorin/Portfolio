import {
	Box,
	BoxProps,
	Link,
	LinkProps,
	List,
	ListProps,
	Stack,
	StackProps,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box)

export const MotionStack = motion<Omit<StackProps, 'transition'>>(Stack)

export const MotionLink = motion<Omit<LinkProps, 'transition'>>(Link)

export const MotionList = motion<Omit<ListProps, 'transition'>>(List)
