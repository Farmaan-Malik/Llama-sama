import { WIDTH } from '@/shared/utils/utils'
import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { UseHome } from '../types/homeTypes'

const useHome = ():UseHome => {
    const anim = useRef(new Animated.Value(200)).current
    const llamaAnim = useRef(new Animated.Value(WIDTH*2)).current
      const scaleAnim = useRef(new Animated.Value(1)).current
    useEffect(()=>{
        Animated.parallel([
            Animated.spring(anim,{
                toValue:0,
                velocity:10,
                useNativeDriver:true
            }),
            Animated.spring(llamaAnim,{
                toValue:WIDTH/1.8,
                velocity:10,
                useNativeDriver:true
            })
        ]).start()
         Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 900,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true
        })
      ])
    ).start()
        
    },[])
    return{
        anim,
        llamaAnim,
        scaleAnim
    }

}

export default useHome