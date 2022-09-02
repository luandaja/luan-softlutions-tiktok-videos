import { WithContainer } from '@components/layout/Container';
import { GenericReactProp } from '@custom-types/GenericReactProp';
import React, { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { Img, Sequence, Video } from 'remotion';
import { SequenceProps } from 'remotion/dist/Sequence';

export const ImageSequence: React.FC<
	{
		className?: string;
		src: string;
		imgProps?: React.ComponentProps<typeof Img>;
		useContainer?: boolean;
		containerProps?: React.ComponentProps<typeof WithContainer>;
	} & Omit<SequenceProps, 'children'>
> = ({
	from,
	src,
	durationInFrames,
	useContainer = false,
	containerProps = {},
	imgProps = {},
	className = '',
	...mainSequenceProps
}) => {
	// const { className } = imgProps;
	return (
		<>
			<WithContainer disableContainer={!useContainer} {...containerProps}>
				<Sequence
					layout="none"
					from={from}
					durationInFrames={durationInFrames}
					{...mainSequenceProps}
				>
					<Img {...imgProps} src={src} className={`${className} rounded-lg`} />
				</Sequence>
			</WithContainer>
		</>
	);
};
