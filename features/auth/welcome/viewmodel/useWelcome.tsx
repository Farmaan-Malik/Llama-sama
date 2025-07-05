import { useCallback, useRef, useState } from 'react'
import { Animated } from 'react-native'

interface UseWelcome {
  svgHeight: number | null
  setSvgHeight: React.Dispatch<React.SetStateAction<number | null>>
  anim : Animated.Value
  scaleIcon: () => void
}

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