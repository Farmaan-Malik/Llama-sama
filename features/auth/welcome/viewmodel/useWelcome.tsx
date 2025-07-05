import { useCallback, useRef, useState } from 'react'
import { Animated } from 'react-native'
import { UseWelcome } from '../types/welcomeTypes'


const useWelcome = (): UseWelcome => {
    const [svgHeight, setSvgHeight] = useState<number | null>(null)
    const anim =useRef(new Animated.Value(1)).current
    const scaleIcon = useCallback(() => {
    Animated.sequence([
      Animated.timing(anim, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(anim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start()
  },[anim])
  return{
    svgHeight,
    setSvgHeight,
    anim,
    scaleIcon,
  }
}

export default useWelcome