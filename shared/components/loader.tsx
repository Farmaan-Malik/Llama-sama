import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'
import Colors from '../themes/Colors'

type LoaderProps = {
    visible:boolean
}

const Loader = ({visible}:LoaderProps) => {
  return (
   
     <Modal style={{flex:1}} visible={visible} animationType='slide' transparent={true}>
            <View style={{flex:1,backgroundColor: 'rgba(0, 0, 0, 0.56)',justifyContent:'center',alignItems:'center'}}>
               <View style={styles.container}>
                    <ActivityIndicator size={'large'} color={Colors.primary}/>
                </View>
            </View>
     </Modal>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})