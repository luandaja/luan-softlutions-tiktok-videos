import { Tiktok } from "@components/compositions"
import { TitleSequence } from "@components/sequences/TitleSequence"
import { Alert, Avatar, Stack } from "@mui/material"
import { Img, Sequence, staticFile } from "remotion"

import React from 'react'


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const TiktokTestComposition = () => {
  return (
    <Tiktok.Still
      durationInFrames={3000}
      id="Tiktok-Test"
      component={Test}
    ></Tiktok.Still>
  )
}

export const Test = () => {
  const tiktokSafeZoneImage = staticFile("/feed_1.png")
  return <>
    <Sequence from={0}>

      <Img src={tiktokSafeZoneImage}></Img>
    </Sequence>
    {/* <Sequence from={0}>
      <div className="container px-32 pt-56 pb-144 opacity-90">
        <div className="bg-gray-100 w-full h-full "></div>
      </div>
    </Sequence> */}

    <TitleSequence from={0} animated={true} to={200} className="self-start text-white">
      Esto es un test muy largo
    </TitleSequence>

    <TitleSequence from={100} animated={true} durationInFrames={100} className="text-red-400 self-center">
      Esto es un test muy largo
    </TitleSequence>
    <TitleSequence from={0} animated={true} to={200} className=" text-amber-500 self-end">
      Esto es un test muy largo
    </TitleSequence>

    <Avatar >H</Avatar>


  </>
}
