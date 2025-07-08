import { WIDTH } from '@/shared/utils/utils'
import bg from '@assets/images/bg.png'
import board from '@assets/images/Board.png'
import llama from '@assets/images/LlamaStick.png'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Option from './components/option'
import useGame from './viewmodel/useGame'

const GameScreen = () => {
  const {
    options
  } = useGame()
  return (
    <ImageBackground source={bg} style={styles.container}>

      <ImageBackground imageStyle={{resizeMode:'stretch'}} source={board} style={styles.img}>
        <Text style={styles.text}>sadadasd</Text>
      </ImageBackground>
      <View style={styles.optionContainer}>
{options.map((v,i)=>
<Option onPress={()=>{}} key={i} selected={i==3} correct={false} option={v}/>
)}
</View>
<Image source={llama} style={styles.llama}/>

    </ImageBackground>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    flex:.5,
    width:WIDTH,
    marginVertical:30,
    // justifyContent:'center',
    paddingHorizontal:40,
    paddingTop:40,
    overflow:'hidden',
  },
  optionContainer:{
    flex:.5,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    // alignItems:'center',
    // borderWidth:1,
    alignContent:'flex-start',
    paddingTop:30
  },
  llama:{
    position:'absolute',
    width:200,
    resizeMode:'contain',
    top:50,
    right:-18,
    transform:[{rotate:'-0deg'}],
    zIndex:1
  },
  text:{
    fontFamily:'Rubik-Medium'
  }
})