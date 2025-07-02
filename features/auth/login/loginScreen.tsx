import LocalSvg from '@/assets/svg/LocalSvg'
import AnimatedTextBar from '@/shared/components/animatedBar'
import Colors from '@/shared/themes/Colors'
import { HEIGHT } from '@/shared/utils/utils'
import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const LoginScreen = () => {
  const [height,setHeight]=useState<number|null>(null)

 
  return (
    <View style={styles.container}>
      <LocalSvg.MediumCurve onLayout={(event)=>{
        const {height}=event.nativeEvent.layout
        setHeight(height)
      }}
      style={styles.svg}/>
      <View style={[styles.innerContainer,{marginTop:(height ?? HEIGHT/2) * 0.75}]}>
        <AnimatedTextBar titleStyle={styles.title} text='Sign In' animatedAlignment='flex-start' />
        <View style={[styles.inputContainer]}>
          <TextInput/>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen

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
    marginHorizontal: 16,
    flex:1
    // gap:30,
    // borderWidth:1
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 35,
    color: Colors.black,
    // borderWidth:1,
    alignSelf:'flex-start'
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
  },
  inputContainer:{
    borderWidth:1,
    flex:1,
    paddingVertical:30,

  }
})