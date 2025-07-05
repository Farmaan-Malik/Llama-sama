import Colors from '@/shared/themes/Colors'
import bg from '@assets/images/bg.png'
import bushes from '@assets/images/bushes.png'
import llama from '@assets/images/Llama-sama.png'
import { router } from 'expo-router'
import React from 'react'
import { Animated, BackHandler, Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useHome from './viewmodel/useHome'

const HomeScreen = () => {
  const {
    anim,
    llamaAnim,
    scaleAnim
  } = useHome()
  return (
    <ImageBackground source={bg} style={styles.container}>
      <Animated.View  style={[styles.llama,{transform:[{translateX:llamaAnim},{rotate:'-30deg'}]}]}>
      <Image source={llama}/>
      </Animated.View>
      <View style={styles.inner}>
      <TouchableOpacity activeOpacity={0.9} onPress={()=>{router.navigate('/(public)/option')}} style={[styles.button,{transform:[{scale:scaleAnim}]}]}>
        <Text style={styles.buttonText}>
          PLAY
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>Platform.OS === 'ios' ? router.navigate('/(auth)/login') : BackHandler.exitApp()} style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>
         {Platform.OS === 'ios' ? 'LOGOUT' : 'QUIT'}
        </Text>
      </TouchableOpacity>
      </View>
      <Animated.View  style={[styles.bushes,{transform:[{translateY:anim}]}]}>
      <Image source={bushes}/>
      </Animated.View>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
    // borderWidth:1,
    position:'relative'
  },
  llama:{
    position:'absolute'
  },
  bushes:{
    position:'absolute',
    bottom:0
  },
  inner:{
    justifyContent:'flex-end',
    alignItems:'center',
    flex:1,
    paddingBottom:200
  },
  button:{
    marginTop:30,
    paddingHorizontal:60,
    paddingVertical:8,
    backgroundColor:Colors.primary,
    borderRadius:100,
    zIndex:2
  },
  buttonSecondary:{
    paddingHorizontal:30,
    paddingVertical:8,
    backgroundColor:Colors.secondary,
    borderRadius:100,
    marginTop:10,
    zIndex:2

  },
  buttonText:{
    fontFamily:'BagelFat',
    fontSize:40,
    textAlign:'center',
    color:Colors.white
  }
})