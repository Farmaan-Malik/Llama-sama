import Loader from '@/shared/components/loader'
import Colors from '@/shared/themes/Colors'
import { WIDTH } from '@/shared/utils/utils'
import bg from '@assets/images/bgWithBoard.png'
import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import GoButton from './components/goButton'
import GradeOption from './components/gradeOption'
import RectOption from './components/rectOptions'
import useOptions from './viewmodel/useOptions'

const OptionScreen = () => {
  const {
    classData,
    subjectData,
    selectedClass,
    setSelectedClass,
    selectedSubject,
    setSelectedSubject,
    handleSubmit,
    isPending
  }=useOptions()
  return (
    <ImageBackground source={bg} style={styles.container}>
      <Text style={styles.header}>{"Select level and subject"}</Text>
      <View>
        <Text style={styles.subHeader}>Choose your level</Text>
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      {classData.map((v,i)=>{
        return (<GradeOption standard={v} key={i} onPress={()=>setSelectedClass(v)} selected={selectedClass === v}/>)})}
      </View>
        <Text style={styles.subHeader}>Choose your Subject</Text>
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      {subjectData.map((v,i)=>{
        return (<RectOption subject={v} key={i} onPress={()=>setSelectedSubject(v)} selected={selectedSubject === v}/>)})}
      </View>
      </View>
      <GoButton onPress={()=>
      // router.navigate('/(public)/game')
        handleSubmit()
        }/>
        <Loader visible={isPending}/>
    </ImageBackground>
  )
}

export default OptionScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inner:{
    position:'absolute',
    bottom:0,
    
  },
  header:{
    fontFamily:'BagelFat',
    fontSize:25,
    position:'absolute',
    top:20,
    color:Colors.white,
    padding:10,
    backgroundColor:Colors.darkBrown,
    width:WIDTH,
    textAlign:'center'
  },
  subHeader:{
    fontFamily:'BagelFat',
    fontSize:20,
    alignSelf:'center',
    color:Colors.white,
    marginVertical:12,
    backgroundColor:Colors.primary,
    padding:8,
    borderRadius:100,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 12,
  }
})