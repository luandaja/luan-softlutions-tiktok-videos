import { Container } from '@components/layout/Container';
import { GenericReactProp } from '@custom-types/GenericReactProp';
import React from 'react';
import { interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { SequenceProps } from 'remotion/dist/Sequence';

export const TitleSequence: React.FC<
  GenericReactProp<SequenceProps & {
    animated?: boolean;
    animationDurationInFrames?: number
    to?: number
  }>
> = ({
  from,
  children,
  className = '',
  animated = false,
  to,
  animationDurationInFrames = 15
}) => {
    const { durationInFrames: defaultDurationInFrames } = useVideoConfig();
    const frame = useCurrentFrame();
    const durationInFrames = to ?? defaultDurationInFrames;
    const opacity = animated
      ? interpolate(
        frame,
        [from, from + animationDurationInFrames, durationInFrames - animationDurationInFrames, durationInFrames],
        [0, 1, 1, 0]
      )
      : 1;

    return (
      <>
        <Container>
          <Sequence
            from={from}
            layout="none"
            name='Title'
            durationInFrames={durationInFrames - from}
          >
            <Sequence
              from={0}
              layout="none"
            >
              <h1 style={{ opacity: opacity }}
                className={`${className} font-mono text-7xl font-bold decoration-slate-900 drop-shadow-2xl text-white`}
              >
                {children}
              </h1>
            </Sequence>
          </Sequence>
        </Container>
      </>
    );
  };
