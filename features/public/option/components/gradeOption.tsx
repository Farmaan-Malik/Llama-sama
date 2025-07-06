import Colors from '@/shared/themes/Colors'
import bg from '@assets/images/Button.png'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { gradeOptionProps } from '../types/optionTypes'

const GradeOption = ({standard,onPress,selected}:gradeOptionProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[styles.container,{transform:[{scale:selected ? 1 : 0.7}]}]}>
        <ImageBackground source={bg} style={styles.innerContainer}>
             <Text style={styles.text}>{standard}</Text>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default GradeOption

const styles = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:100,
        
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontFamily:'BagelFat',
        fontSize:30,
        color:Colors.white
    }
})