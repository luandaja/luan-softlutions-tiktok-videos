import { WithContainer } from '@components/layout/Container';
import { GenericReactProp } from '@custom-types/GenericReactProp';
import { InterpolateProps } from '@custom-types/InterpolateProps';
import { useInterpolate } from '@hooks';
import React from 'react';
import {
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { SequenceProps } from 'remotion/dist/Sequence';

export const TitleSequence: React.FC<
	SequenceProps &
		InterpolateProps &
		Pick<GenericReactProp, 'children'> &
		Pick<GenericReactProp, 'className'> & { useContainer?: boolean }
> = ({
	from,
	children,
	className = '',
	animated = false,
	durationInFrames,
	to,
	name,
	animationDurationInFrames = 15,
	useContainer = true,
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
	return (
		<>
			<WithContainer className="z-50" disableContainer={!useContainer}>
				<Sequence
					from={from}
					layout="none"
					name={name ?? 'Title'}
					durationInFrames={finalDurationInFrames - from}
				>
					<h1
						style={{ opacity: opacity }}
						className={`${className} font-mono text-width font-bold decoration-slate-900 drop-shadow-2xl text-white`}
					>
						{children}
					</h1>
				</Sequence>
			</WithContainer>
		</>
	);
};
