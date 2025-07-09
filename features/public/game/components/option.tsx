import Colors from '@/shared/themes/Colors'
import bg from '@assets/images/Rect-button.png'
import greenbutton from '@assets/images/RectButtonGreen.png'
import redButton from '@assets/images/RectButtonRed.png'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { optionProps } from '../types/gameTypes'

const Option = ({option,onPress,selected,correct,disabled=false,showAnswer}:optionProps) => {
  
  return (
    <TouchableOpacity
  disabled={disabled}
  onPress={onPress}
  activeOpacity={0.9}
  style={styles.container}
>
  <ImageBackground
source={
  selected ? (correct ? greenbutton : redButton) : showAnswer ? greenbutton : bg
}  

  style={styles.innerContainer}
  imageStyle={styles.imageStyle}
  >
    <Text style={styles.text}>{option}</Text>
  </ImageBackground>
</TouchableOpacity>

  )
}

export default Option

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 50,
    overflow: 'hidden',
    marginVertical: 10,
    zIndex:3
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  text: {
    fontFamily: 'BagelFat',
    fontSize: 14,
    color: Colors.white,
  },
})
