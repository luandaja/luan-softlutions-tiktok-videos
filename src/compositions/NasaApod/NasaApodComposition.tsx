import { TiktokComposition } from '@components/compositions/TiktokComposition';
import { ImageSequence } from '@components/sequences/ImageSequence';
import { TitleSequence } from '@components/sequences/TitleSequence';
import React, { useCallback, useEffect, useState } from 'react';
import {
	continueRender,
	delayRender,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { apiKey } from '../../constants/api';

export const NasaApodComposition = () => {
	return (
		<>
			<TiktokComposition
				id="NasaApod"
				durationInFrames={7.5 * 30}
				component={NasaApodVideo}
			></TiktokComposition>
		</>
	);
};

const NasaApodVideo = () => {
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	const [data, setData] = useState(null);
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

	return (
		<>
			<div className="bg-gradient-to-r rotate-45 scale-[2] from-green-400 to-blue-500 absolute w-full h-full z-[-1]"></div>
			<ImageSequence
				from={0}
				durationInFrames={15 * fps}
				src={data?.url}
				className={
					frame < 150
						? 'transition ease-in-out m-auto w-11/12 shadow-2xl '
						: frame < 7 * 30
						? 'transition duration-1000 ease-in-out m-auto w-11/12 shadow-2xl -translate-y-2/4'
						: 'transition duration-500 ease-in-out m-auto w-11/12 shadow-2xl -translate-y-2/4 scale-[5] blur-3xl'
				}
			></ImageSequence>

			<Sequence from={0} durationInFrames={3 * fps}>
				<div
					className={
						frame < 60
							? ' transition ease-in-out backdrop-blur-md bg-black/30 z-10 h-full w-full absolute'
							: ' transition duration-1000 ease-in-out backdrop-blur-md scale-y-0 bg-black/30 z-0 h-full w-full absolute'
					}
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
