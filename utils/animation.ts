import { Transition } from 'framer-motion'

export const verySlowSpringConfig: Transition = {
	type: 'spring',
	stiffness: 50,
	damping: 14,
}

export const slowerSpringConfig: Transition = {
	type: 'spring',
	stiffness: 70,
	damping: 14,
	mass: 0.8,
}

export const slowSpringConfig: Transition = {
	type: 'spring',
	stiffness: 90,
	damping: 14,
	mass: 0.65,
}

export const gentleSpringConfig: Transition = {
	type: 'spring',
	stiffness: 120,
	damping: 14,
	mass: 0.45,
}

export const stiffSpringConfig: Transition = {
	type: 'spring',
	stiffness: 180,
	damping: 14,
	mass: 0.35,
}

export function getSpringAnimation(open: boolean) {
	return open ? gentleSpringConfig : stiffSpringConfig
}
