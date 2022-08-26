import {
	Easing,
	Img,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const FadeImg: React.FC<{
	src: string;
	durationInFrames: number;
	[x: string]: any;
}> = ({
	src,
	durationInFrames: duration = 1,

	...props
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const fadeOpacity = interpolate(
		frame,
		[0, 15, 15 + duration, 15 + duration + 5],
		[0, 1, 1, 0],
		{ easing: Easing.ease }
	);

	const styles = {
		height: 'fit-content',
		opacity: fadeOpacity,
		...props.style,
	};

	return (
		<>
			<Img className={props.className} src={src} style={styles} />
		</>
	);
};
