import LocalSvg from '@/assets/svg/LocalSvg'
import Colors from '@/shared/themes/Colors'
import { HEIGHT } from '@/shared/utils/utils'
import { navigate } from 'expo-router/build/global-state/routing'
import React, { useCallback, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const WelcomeScreen = () => {
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
  
  return (
    <View style={styles.container}>
      <LocalSvg.LargeCurve
        style={styles.svg}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout
          setSvgHeight(height)
        }}
      />
        <View style={[styles.innerContainer,{marginTop:(svgHeight?? HEIGHT) * 0.8}]}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.message}>Get ready for a fun and personalized quiz journey powered by AI.</Text>
        </View>
        <View style={[styles.buttonContainer]}>
          <TouchableOpacity onPress={()=>{scaleIcon()
            navigate('/(auth)/login')
          }} activeOpacity={0.9} style={styles.touchable}>
          <Text style={styles.message}>
            Continue
          </Text>
          <Animated.View style={[{transform:[{scale:anim}]}]}>
          <LocalSvg.Continue/>
          </Animated.View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  svg: {
    position:'absolute',
    top:0,
    width: '100%',
    zIndex:0
  },
  innerContainer: {
    paddingHorizontal: 16,
    gap:30,
    // borderWidth:1
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 40,
    color: Colors.black,
  },
  message:{
    fontFamily:'Rubik-Light',
    fontSize:16,
  },
  buttonContainer:{
    flex:1,
    flexDirection:'row',
    padding:16,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    // borderWidth:1
  },
  touchable:{
    // borderWidth:1, 
    flexDirection:'row',
    gap:15,
    alignItems:'center'
  }
})
