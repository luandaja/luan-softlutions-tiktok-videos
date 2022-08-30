import { InterpolateProps } from '@custom-types/InterpolateProps';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export function useInterpolate({
	animated = true,
	noAnimatedValue = 1,
	from = 0,
	animationDurationInFrames = 15,
	to = undefined,
	durationInFrames = undefined,
	animation = [0, 1, 1, 0],
}: InterpolateProps) {
	const { durationInFrames: defaultDurationInFrames } = useVideoConfig();

	const finalDurationInFrames =
		to ??
		(durationInFrames !== undefined ? durationInFrames + from : undefined) ??
		defaultDurationInFrames;
	if (!animated) return [noAnimatedValue, finalDurationInFrames];

	const frame = useCurrentFrame();
	return [
		interpolate(
			frame,
			[
				from,
				from + animationDurationInFrames,
				finalDurationInFrames - animationDurationInFrames,
				finalDurationInFrames,
			],
			animation
		),
		finalDurationInFrames,
	];
}
