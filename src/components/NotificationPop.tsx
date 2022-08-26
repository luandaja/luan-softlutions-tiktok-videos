import {
	Easing,
	Img,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const NotificationPop: React.FC<{
	children: any;
	imgUrl: string;
	finalPosition?: 'top' | 'middle';

	durationInFrames: number;
	alertCountIndex?: number;
	[x: string]: any;
}> = ({
	children,
	imgUrl,
	finalPosition = 'middle',
	durationInFrames: duration = 1,
	alertCountIndex = 1,
	...props
}) => {
	const frame = useCurrentFrame();
	const { height, fps } = useVideoConfig();
	const finalPositionFixed =
		finalPosition === 'middle'
			? height / 2 + (alertCountIndex - 1) * 30
			: 60 + (alertCountIndex - 1) * 150;
	const entranceOffset = interpolate(
		frame,
		[0, 15, 15 + duration, 15 + duration + 15],
		[
			height,
			finalPositionFixed,
			finalPositionFixed,
			0 - (alertCountIndex - 1) * 30,
		],
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
		<>
			<div
				className="flex flex-col w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
				style={styles}
			>
				<div className="w-6 bg-gray-800 dark:bg-gray-900"></div>

				<div className="flex items-center px-2 py-3 w-10/12">
					<Img
						className="object-cover w-28 h-28 rounded-full"
						alt="User avatar"
						src={imgUrl}
					/>

					<div className="mx-3 text-5xl">
						<p className="text-gray-600 dark:text-gray-200">{children}</p>
					</div>
				</div>
			</div>
		</>
	);
};
