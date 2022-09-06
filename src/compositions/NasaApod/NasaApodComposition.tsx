import { TiktokComposition } from '@components/compositions/TiktokComposition';
import { ImageSequence } from '@components/sequences/ImageSequence';
import { TitleSequence } from '@components/sequences/TitleSequence';
import { Animation } from '@components/ui/Animation';
import { useInterpolate } from '@hooks';
import React, { useCallback, useEffect, useState } from 'react';
import {
	continueRender,
	delayRender,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	staticFile,
	Audio,
} from 'remotion';
import { apiKey } from '../../constants/api';

export const NasaApodComposition = () => {
	return (
		<>
			<TiktokComposition
				id="NasaApod"
				durationInFrames={8 * 30}
				component={NasaApodVideo}
			></TiktokComposition>
		</>
	);
};

const NasaApodVideo = () => {
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	const [data, setData] = useState({} as { [key: string]: any });
	const [handle] = useState(() => delayRender());

	const fetchData = useCallback(async () => {
		const response = await fetch(
			'https://api.nasa.gov/planetary/apod?api_key=' + apiKey
		);
		const json = await response.json();
		setData(json);

		continueRender(handle);
	}, [handle]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	const backgroundMusic = staticFile('musicnasaapod.webm');
	const blurLayerOpacity = interpolate(frame, [45, 60], [1, 0]);
	const imageTranslation = interpolate(
		frame,
		[130, 160, 215, 225],
		[0, 16, 16, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const imageScale = interpolate(frame, [0, 214, 215, 8 * 30], [1, 1, 1, 5], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Audio src={backgroundMusic} startFrom={8}></Audio>
			<div className="bg-gradient-to-r rotate-45 scale-[2] from-green-400 to-blue-500 absolute w-full h-full z-[-1]"></div>
			<ImageSequence
				from={0}
				durationInFrames={15 * fps}
				src={data?.url}
				className={' m-auto w-11/12 shadow-2xl'}
				imgProps={{
					style: {
						translate: `0 -${imageTranslation}rem`,
						scale: imageScale * 100 + '%',
					},
				}}
			></ImageSequence>

			<Sequence from={0} durationInFrames={2 * fps}>
				<div
					className="backdrop-blur-3xl bg-black/30 z-10 h-full w-full absolute"
					style={{ opacity: blurLayerOpacity }}
				/>
				<TitleSequence
					from={0}
					durationInFrames={60 + 1}
					animated={true}
					className="self-center text-center text-[10rem] text-blue-50"
				>
					Astronomy Picture of the Day.<br></br>
					<small className="text-[5rem]">{data?.date}</small>
				</TitleSequence>
			</Sequence>
			<TitleSequence
				from={150}
				animated={true}
				useContainer={false}
				to={7.2 * 30}
				className=" absolute top-2/3 w-full text-center text-[4rem] text-blue-50"
			>
				{data?.title}
			</TitleSequence>
		</>
	);
};
