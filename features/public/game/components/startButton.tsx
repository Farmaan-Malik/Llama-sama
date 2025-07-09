import Colors from '@/shared/themes/Colors'
import Arrow from '@assets/images/arrowRight.png'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { StartButtonProps } from '../types/gameTypes'

const StartButton = ({onPress,first,disabled}:StartButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} style={[styles.container,first ?{backgroundColor:Colors.primary,elevation:3} : {}]} onPress={onPress}>
        {first ? 
        <Text style={styles.text}>Start</Text> :
        <Image style={styles.image} source={Arrow}/>
        }
    </TouchableOpacity>
  )
}

export default StartButton

const styles = StyleSheet.create({
    container:{
        // borderWidth:1,
        padding:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        zIndex:2
    },
    image:{
        width:70,
        height:50,
        resizeMode:'stretch'
    },
    text:{
        fontSize:22,
        fontFamily:'BagelFat',
        color:Colors.darkBrown,

    }
})