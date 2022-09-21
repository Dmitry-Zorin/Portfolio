export const slowSpringConfig = {
	type: 'spring' as const,
	stiffness: 60,
	damping: 14,
}

export const moderateSpringConfig = {
	type: 'spring' as const,
	stiffness: 90,
	damping: 14,
	mass: 0.65,
}

export const gentleSpringConfig = {
	type: 'spring' as const,
	stiffness: 120,
	damping: 14,
	mass: 0.45,
}

export const defaultSpringConfig = {
	type: 'spring' as const,
	stiffness: 150,
	damping: 14,
	mass: 0.4,
}

export const stiffSpringConfig = {
	type: 'spring' as const,
	stiffness: 180,
	damping: 14,
	mass: 0.35,
}

export function getSpringAnimation(open: boolean) {
	return open ? gentleSpringConfig : stiffSpringConfig
}
