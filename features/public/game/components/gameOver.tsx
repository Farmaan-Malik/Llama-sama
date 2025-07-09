import Colors from '@/shared/themes/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'

type GameOverModalProps={
    visible:boolean,
    isError:boolean,
    total:number,
    correct:number,
    onPress:()=>void
}

const GameOverModal = ({visible,total,correct,onPress,isError}:GameOverModalProps) => {
  return(
     <Modal style={{flex:1}} visible={visible} animationType='slide' transparent={true}>
            <View style={{flex:1,backgroundColor: 'rgba(0, 0, 0, 0.56)',justifyContent:'center',alignItems:'center'}}>
              <View style={styles.container}>
              {!isError ?  <>
                <Text style={styles.text}>GAME OVER</Text>
                <Text style={styles.subText}>Your Score</Text>
                <Text style={styles.subText}>{`${correct}/${total}`}</Text>
              </>
                : 
                <>
                <Text style={styles.text}>Something went wrong...</Text>
                <Text style={styles.subText}>{"\nPlease try again later"}</Text>
                </>
                }
               <FontAwesome onPress={onPress} style={styles.icon} name='refresh' />
                </View>
            </View>
     </Modal>
  )
}

export default GameOverModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:"BagelFat",
        fontSize:40,
        textAlign:'center',
        color:Colors.primary
    },
    subText:{
        fontFamily:"BagelFat",
        fontSize:25,
        textAlign:'center',
        color:Colors.primary
    },
    icon:{
        color:Colors.primary,
        fontSize:70,
        marginTop:20
    }
})