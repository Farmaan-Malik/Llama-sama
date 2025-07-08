import { Animated } from "react-native"

export interface UseWelcome {
  svgHeight: number | null
  setSvgHeight: React.Dispatch<React.SetStateAction<number | null>>
  anim : Animated.Value
  scaleIcon: () => void
  updateFirstTime:() => void
}
