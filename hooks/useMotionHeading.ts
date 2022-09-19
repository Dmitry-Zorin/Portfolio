import { slowSpringConfig } from 'utils/animation'

export default function useMotionHeading(text: string) {
	return {
		children: text,
		layoutId: text,
		transition: slowSpringConfig,
		style: {
			display: 'inline-block',
			zIndex: 0,
		},
	}
}
