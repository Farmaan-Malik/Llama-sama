import LocalSvg from '@/assets/svg/LocalSvg'
import AnimatedTextBar from '@/shared/components/animatedBar'
import Colors from '@/shared/themes/Colors'
import { HEIGHT } from '@/shared/utils/utils'
import { router } from 'expo-router'
import React from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useWelcome from './viewmodel/useWelcome'

const WelcomeScreen = () => {
 const {
  svgHeight,
  setSvgHeight,
  anim,
  scaleIcon,
  updateFirstTime
 } = useWelcome()
 
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
          <AnimatedTextBar titleStyle={styles.title} text='Welcome' viewStyle={{width:30}} />
          <Text style={styles.message}>Get ready for a fun and personalized quiz journey powered by AI.</Text>
        </View>
        <View style={[styles.buttonContainer]}>
          <TouchableOpacity onPress={()=>{scaleIcon()
          updateFirstTime()
          setTimeout(()=>{
            router.navigate('/(auth)/login')
          },400)
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
