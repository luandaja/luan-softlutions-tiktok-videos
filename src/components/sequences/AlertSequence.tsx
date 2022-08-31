import { WithContainer } from '@components/layout/Container';
import React from 'react';
import { Sequence, Video } from 'remotion';
import { SequenceProps } from 'remotion/dist/Sequence';
import { Alert } from '@components/ui/Alert';
import { InterpolateProps } from '@custom-types';
import { useInterpolate } from '@hooks';

const AlertBody: React.FC<
	InterpolateProps &
		SequenceProps & { type: 'info' | 'warning' | 'success' | 'danger' }
> = ({
	from,
	to,
	durationInFrames,
	animationDurationInFrames,
	animated,
	name,

	children,
	type,
}) => {
	const [opacity, finalDurationInFrames] = useInterpolate({
		from,
		animationDurationInFrames,
		to: to,
		durationInFrames,
		animation: [0, 1, 1, 0],
		animated: animated,
		noAnimatedValue: 1,
	});
	const getAlert = (type: 'info' | 'warning' | 'success' | 'danger') => {
		switch (type) {
			case 'info':
				return Alert.Info;
			case 'warning':
				return Alert.Warning;
			case 'success':
				return Alert.Success;
			case 'danger':
				return Alert.Danger;
		}
	};
	const Alert2 = getAlert(type);
	return (
		<>
			<Sequence
				from={from}
				layout="none"
				name={name ?? 'Title'}
				durationInFrames={finalDurationInFrames - from}
			>
				<Alert2
					style={{
						opacity: opacity,
					}}
				>
					{children}
				</Alert2>
			</Sequence>
		</>
	);
};

const AlertContainer: React.FC<{
	children: React.ReactNode | React.ReactNode[];
	className?: string;
}> = ({ children, className = '' }) => {
	return (
		<>
			<WithContainer
				className={`${className} z-50 flex-col flex-nowrap ease-in-out transition-all opacity-90`}
			>
				{children}
			</WithContainer>
		</>
	);
};

export const AlertSequence = {
	Container: AlertContainer,
	Alert: AlertBody,
};
