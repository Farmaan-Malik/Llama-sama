import { Animated } from "react-native"

export interface UseHome {
    anim : Animated.Value
    llamaAnim : Animated.Value
    scaleAnim:Animated.Value
    signAnim:Animated.Value,
    clearStore: () => void
}

export type HeaderProps = {
  onPress:()=>void
}