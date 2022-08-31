import { WithContainer } from '@components/layout/Container';
import React from 'react';
import { Sequence, Video } from 'remotion';
import { SequenceProps } from 'remotion/dist/Sequence';

export const VideoSequence: React.FC<
	{
		videoStartFrame?: number;
		videoEndFrame?: number;
		src: string;
		children?: React.ReactNode;
		videoProps?: React.ComponentProps<typeof Video>;
		useContainer?: boolean;
		containerProps?: React.ComponentProps<typeof WithContainer>;
	} & Omit<SequenceProps, 'children'>
> = ({
	from,
	videoStartFrame = 0,
	videoEndFrame = Infinity,
	src,
	durationInFrames,
	videoProps = {},
	useContainer = false,
	containerProps = {},
	...mainSequenceProps
}) => {
	return (
		<>
			<WithContainer disableContainer={!useContainer} {...containerProps}>
				<Sequence
					layout={useContainer ? 'none' : 'absolute-fill'}
					from={from}
					durationInFrames={durationInFrames}
					{...mainSequenceProps}
				>
					<Video
						startFrom={videoStartFrame}
						endAt={videoEndFrame + videoStartFrame}
						src={src}
						{...videoProps}
					/>
				</Sequence>
			</WithContainer>
		</>
	);
};
