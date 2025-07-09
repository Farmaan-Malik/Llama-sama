import Colors from '@/shared/themes/Colors'
import { HEIGHT, WIDTH } from '@/shared/utils/utils'
import bg from '@assets/images/bg.png'
import board from '@assets/images/Board.png'
import llama from '@assets/images/LlamaStick.png'
import { router } from 'expo-router'
import React from 'react'
import { ActivityIndicator, Animated, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import GameOverModal from './components/gameOver'
import Option from './components/option'
import StartButton from './components/startButton'
import useGame from './viewmodel/useGame'

const GameScreen = () => {
  const {
    options,
    question,
    startGame,
    correct,
    selected,
    handleSelect,
    count,
    llamaAnim,
    isLoading,
    isAlive,
    correctResponseCount,
    isError
  } = useGame()
  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={[styles.statusBar,{width:`${count*20}%`}]}></View>
        <Text style={styles.countText}>{`${count}/5`}</Text>      
        <ImageBackground imageStyle={{resizeMode:'stretch'}} source={board} style={styles.img}>
        <Text style={styles.text}>{question}</Text>
      {isLoading && <ActivityIndicator size={'large'} color={Colors.primary}/>}
      </ImageBackground>
      </View>
      <View style={styles.optionContainer}>
{options.map((v, i) => {
  let o = ['A', 'B', 'C', 'D']
  const optionLetter = o[i];
  const isCorrect = optionLetter === correct;
  const isSelected = i === o.indexOf(selected!);

  return (
    <Option
      key={i}
      disabled={selected !== null}
      onPress={() => handleSelect(optionLetter)}
      showAnswer={selected!==null && isCorrect}
      selected={isSelected}
      correct={isCorrect}
      option={v}
    />
  );
})}

</View>
{!isLoading && ((count===0 && !question) || selected) && isAlive &&<View style={styles.inner}>
<StartButton disabled={selected===null && count!==0} first={count===0} onPress={()=>startGame()}/>
 {count!==0  && <Text style={styles.innerText}>NEXT</Text>}
</View>}
<GameOverModal isError={isError} onPress={()=>router.back()} total={count} correct={correctResponseCount} visible={!isAlive || isError}/>
<Animated.View style={[{transform:[{translateX:llamaAnim}]},styles.llamaView]}>
  <Image  style={[styles.llama]} source={llama} />
</Animated.View>
</ImageBackground>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  innerContainer:{
    height:HEIGHT/2,
    width:WIDTH,
    paddingTop:10,
  },
  img:{
    flex:1,
    width:WIDTH,
    marginVertical:30,
    paddingHorizontal:40,
    paddingTop:40,
    overflow:'hidden',
  },
  optionContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignContent:'flex-start',
    paddingTop:30
  },
  llama:{
    width:200,
    resizeMode:'contain',
    transform:[{rotate:'-0deg'}],
  },
  text:{
    fontFamily:'Rubik-Medium'
  },
  inner:{
    padding:20,
    marginTop:10
  },
  innerText:{
    textAlign:'center',
    fontFamily:'BagelFat',
    color:Colors.darkBrown,
    fontSize:18
  },
  llamaView:{
    zIndex:1,
    position:'absolute',
    top:0,
    right:0,
    flex:1,
    width:200,
  },
  countText:{
    fontFamily:"BagelFat",
    fontSize:25,
    textAlign:'left',
    color:Colors.darkBrown,
    alignSelf:'flex-start',
    marginStart:10
    },
    statusBar:{
      borderWidth:6,
      borderColor:Colors.primary,
      alignSelf:'flex-start',
    }
})