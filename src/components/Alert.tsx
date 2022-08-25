import {
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Alert: React.FC<{
	text: string;
	durationInFrames: number;
	alertCountIndex?: number;
	[x: string]: any;
}> = ({
	text,
	durationInFrames: duration = 1,
	alertCountIndex = 1,
	...props
}) => {
	const frame = useCurrentFrame();
	const { height, fps } = useVideoConfig();
	const finalPosition = height / 2 + (alertCountIndex - 1) * 30;
	const entranceOffset = interpolate(
		frame,
		[0, 15, 15 + duration, 15 + duration + 15],
		[height, finalPosition, finalPosition, 0 - (alertCountIndex - 1) * 30],
		{ easing: Easing.ease }
	);

	const fadeOutOpacity = interpolate(
		frame,
		[0, 15, 15 + duration, 15 + duration + 5],
		[0, 1, 1, 0],
		{ easing: Easing.ease }
	);

	const styles = {
		height: 'fit-content',
		transform: `translateY(${entranceOffset}px)`,
		opacity: fadeOutOpacity,
		...props.style,
	};

	return (
		<div
			className={
				'flex w-auto mx-12 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ' +
				(props?.className ?? '')
			}
			style={styles}
		>
			<div className="flex items-center justify-center w-1/12 bg-blue-500">
				<svg
					className="w-12 h-12 text-white fill-current"
					viewBox="0 0 40 40"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
				</svg>
			</div>

			<div className="px-12 py-6 w-9/12 -mx-3 self-center">
				<div className="mx-3">
					<p className="text-gray-600 dark:text-gray-200 text-5xl my-auto">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};
