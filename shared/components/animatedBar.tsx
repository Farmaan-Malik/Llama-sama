import React, { useEffect, useRef } from 'react'
import { Animated, FlexAlignType, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native'
import Colors from '../themes/Colors'

type AnimatedTextBarProps = {
    titleStyle: StyleProp<TextStyle>,
    viewStyle?: StyleProp<ViewStyle>,
    text:string,
    animatedAlignment?: "auto" | FlexAlignType | undefined
}
 
const AnimatedTextBar = ({titleStyle,viewStyle,text,animatedAlignment}:AnimatedTextBarProps) => {
    const anim = useRef(new Animated.Value(0)).current
  useEffect(()=>{
    Animated.timing(anim,{
      toValue:10,
      duration:2000,
      useNativeDriver:true
    }
    ).start()
  },[])
  return (
   <View style={{overflow:'hidden',alignSelf:'flex-start'}}>
      <Text style={titleStyle}>{text}</Text>
      <Animated.View style={[{width:25,borderWidth:2,borderColor:Colors.secondary,alignSelf:animatedAlignment ?? 'flex-start' ,transform:[{scaleX:anim}]},viewStyle,]}></Animated.View>
      </View>
  )
}

export default AnimatedTextBar
