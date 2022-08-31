import { Alert } from '@components/ui/Alert';
import { Tiktok } from '@components/compositions';
import { TitleSequence } from '@components/sequences/TitleSequence';
import { Avatar } from '@mui/material';
import React from 'react';
import { Img, Sequence, staticFile } from 'remotion';
import { WithContainer } from '@components/layout/Container';
import { AlertSequence } from '@components/sequences/AlertSequence';
import { ImageSequence } from '@components/sequences/ImageSequence';

export const TiktokTestComposition = () => {
	return (
		<Tiktok.Still
			durationInFrames={3000}
			id="Tiktok-Test"
			component={Test}
		></Tiktok.Still>
	);
};

export const Test = () => {
	const tiktokSafeZoneImage = staticFile('/feed_1.png');
	return (
		<>
			<Sequence from={0}>
				<Img src={tiktokSafeZoneImage}></Img>
			</Sequence>
			{/* <Sequence from={0}>
      <div className="container px-32 pt-56 pb-144 opacity-90">
        <div className="bg-gray-100 w-full h-full "></div>
      </div>
    </Sequence> */}

			<TitleSequence
				from={0}
				animated={true}
				to={200}
				className="self-start text-white"
			>
				Esto es un test muy largo
			</TitleSequence>

			<TitleSequence
				from={100}
				animated={true}
				durationInFrames={100}
				className="text-red-400 self-center"
			>
				Esto es un test muy largo
			</TitleSequence>
			<TitleSequence
				from={0}
				animated={true}
				to={200}
				className=" text-amber-500 self-end"
			>
				Esto es un test muy largo
			</TitleSequence>

			<AlertSequence.Container>
				<AlertSequence.Alert from={0} to={100} animated={true} type="info">
					asd
				</AlertSequence.Alert>

				<AlertSequence.Alert from={0} to={200} animated={true} type="danger">
					asddd
				</AlertSequence.Alert>
				<AlertSequence.Alert from={0} to={200} animated={true} type="danger">
					asddd
				</AlertSequence.Alert>
			</AlertSequence.Container>

			<ImageSequence
				src={tiktokSafeZoneImage}
				from={0}
				useContainer={true}
				// className="justify-around content-end "
				containerProps={{
					className: 'z-[55] opacity-100 justify-around content-end',
				}}
				className="w-6/12 h-fit bg-purple-500"
			></ImageSequence>

			<ImageSequence
				src={tiktokSafeZoneImage}
				from={0}
				useContainer={false}
				// className="justify-around content-end "
				className="w-8/12 h-fit self-center mt-[120%] mb-auto bg-red-500 z-50"
				imgProps={{}}
			></ImageSequence>
			{/* 
			<AlertSequence.Container className="justify-end">
				<AlertSequence.Alert from={0} to={100} animated={true} type="info">
					asd
				</AlertSequence.Alert>

				<AlertSequence.Alert from={0} to={100} animated={true} type="danger">
					asddd
				</AlertSequence.Alert>
			</AlertSequence.Container> */}
			{/* 
			<Avatar>H</Avatar>

			<WithContainer className="z-50 flex-wrap content-start flex-col">
				<Alert.Info>Hola</Alert.Info>
				<Alert.Warning>Como</Alert.Warning>
				<Alert.Success>Estas</Alert.Success>
				<Alert.Danger>????</Alert.Danger>
			</WithContainer> */}
			<WithContainer></WithContainer>
		</>
	);
};
