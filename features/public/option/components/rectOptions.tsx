import Colors from '@/shared/themes/Colors'
import bg from '@assets/images/Rect-button.png'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { rectOptionProps } from '../types/optionTypes'

const RectOption = ({subject,onPress,selected}:rectOptionProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[styles.container,{transform:[{scale:selected ? 1 : 0.7}]}]}>
        <ImageBackground source={bg} style={styles.innerContainer}>
             <Text style={styles.text}>{subject}</Text>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default RectOption

const styles = StyleSheet.create({
    container:{
        width:180,
        // height:60,
        // borderRadius:100,
        // borderWidth:1,
        overflow:'hidden'
        
    },
    innerContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:8
    },
    text:{
        fontFamily:'BagelFat',
        fontSize:25,
        color:Colors.white,
    }
})