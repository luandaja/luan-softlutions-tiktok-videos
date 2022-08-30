import { CustomCompositionProps } from "@custom-types/CompositionProps"
import { getRemotionCompositionTiktokSettings } from "@services/remotion-composition.service"
import React from "react";
import { Composition, Still } from "remotion"

export const TiktokComposition: <T>(props: CustomCompositionProps<T>) => JSX.Element = (props) => {
  return <Composition
    {...props}
    {...getRemotionCompositionTiktokSettings()}
  />
}
