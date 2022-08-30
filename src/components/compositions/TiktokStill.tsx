import { CustomCompositionProps } from "@custom-types"
import { getRemotionCompositionTiktokSettings } from "@services"
import { Still } from "remotion"

export const TiktokStill: <T>(props: CustomCompositionProps<T>) => JSX.Element = (props) => {
  return <Still
    {...props}
    {...getRemotionCompositionTiktokSettings()}
  />
}
