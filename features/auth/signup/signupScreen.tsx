import LocalSvg from '@/assets/svg/LocalSvg'
import AnimatedTextBar from '@/shared/components/animatedBar'
import Colors from '@/shared/themes/Colors'
import { HEIGHT } from '@/shared/utils/utils'
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'
import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'
import { SvgXml } from 'react-native-svg'
import useSignup from './viewmodel/useSignup'

const SignupScreen = () => {
 const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    height,
    setHeight,
    passwordRef,
    confirmPasswordRef,
    firstNameRef,
    emailRef,
    lastNameRef,
    svg,
    setSvg,
} = useSignup()

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={ Platform.OS === 'ios' ? 80 : 0}
    >
      <KeyboardAvoidingScrollView
      stickyFooter={ 
      <View style={styles.footer}>
            <TouchableOpacity onPress={()=>{router.navigate('/(public)')}} style={styles.touchable}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
      </View>
        }
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inner}>
        <View style={styles.content}>
        <LocalSvg.SmallCurve
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout
              setHeight(height)
            }}
            style={styles.svg}
          />
           <AnimatedTextBar
            titleStyle={[styles.title,{marginTop:(height ?? HEIGHT) * 0.55}]}
            text="Sign Up"
            animatedAlignment="flex-start"
          />
        <View style={{marginTop:50}}></View>
        <View>
            <Text style={[styles.inputTitle,{marginTop:0}]}>Username</Text>
            <View style={{flexDirection:'row'}}>
               <View style={[styles.inputRow,{flex:1}]}>
                 <Ionicons name="person-outline" size={20} style={styles.icon} />
                 <TextInput
                 ref={emailRef}
                 autoComplete='off'
                 placeholder="Username"
                 value={username ?? ''}
                 onSubmitEditing={()=>firstNameRef.current?.focus()}
                 onChangeText={(text)=>setUsername(text.trim())}
                 style={styles.input}
                 />
              </View>
               <View style={styles.avatarContainer}>
                  <SvgXml xml={svg} style={styles.avatar} />
               </View>
            </View>
        </View>
           <View>
               <Text style={styles.inputTitle}>First Name</Text>
               <View style={styles.inputRow}>
                 <Ionicons name="person-outline" size={20} style={styles.icon} />
                 <TextInput
                 autoComplete='off'
                  onSubmitEditing={() => lastNameRef.current?.focus()}
                  placeholder="First Name"
                  value={firstName}
                  ref={firstNameRef}
                  onChangeText={(text)=>setFirstName(text)}
                  style={styles.input}
                />
              </View>
            </View>
           <View>
               <Text style={styles.inputTitle}>Last Name</Text>
               <View style={styles.inputRow}>
                 <Ionicons name="person-outline" size={20} style={styles.icon} />
                 <TextInput
                 ref={lastNameRef}
                 autoComplete='off'
                  onSubmitEditing={() => emailRef.current?.focus()}
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={(text)=>setLastName(text)}
                  style={styles.input}
                />
              </View>
            </View>
           <View>
               <Text style={styles.inputTitle}>Email</Text>
               <View style={styles.inputRow}>
                 <Ionicons name="mail-outline" size={20} style={styles.icon} />
                 <TextInput
                 ref={emailRef}
                 autoComplete='off'
                  onSubmitEditing={() => passwordRef.current?.focus()}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text)=>setEmail(text)}
                  style={styles.input}
                />
              </View>
            </View>
           <View>
               <Text style={styles.inputTitle}>Password</Text>
               <View style={styles.inputRow}>
                 <Ionicons name="lock-closed-outline" size={20} style={styles.icon} />
                 <TextInput
                 ref={passwordRef}
                  autoComplete='off'
                  secureTextEntry={!showPassword}
                  onSubmitEditing={()=>{confirmPasswordRef.current?.focus()}}
                  placeholder="Password"
                  value={password}
                  onChangeText={(text)=>setPassword(text)}
                  style={styles.input}
                />
                {showPassword ?
                <Ionicons name='eye-outline' size={20} style={styles.icon} onPress={()=>setShowPassword(false)}/>
                :
                <Ionicons name='eye-off-outline' size={20} style={styles.icon} onPress={()=>setShowPassword(true)}/>
                }
              </View>
            </View>
           <View>
               <Text style={styles.inputTitle}>Confirm Password</Text>
               <View style={styles.inputRow}>
                 <Ionicons name="lock-closed-outline" size={20} style={styles.icon} />
                 <TextInput
                 ref={confirmPasswordRef}
                  autoComplete='off'
                  secureTextEntry={!showConfirmPassword}
                  onSubmitEditing={()=>{}}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={(text)=>setConfirmPassword(text)}
                  style={styles.input}
                />
                {showConfirmPassword ?
                <Ionicons name='eye-outline' size={20} style={styles.icon} onPress={()=>setShowConfirmPassword(false)}/>
                :
                <Ionicons name='eye-off-outline' size={20} style={styles.icon} onPress={()=>setShowConfirmPassword(true)}/>
                }
              </View>
            </View>
        </View>
          </View>
      </KeyboardAvoidingScrollView>
      </KeyboardAvoidingView>

  )
}

export default SignupScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    // flex: 1,
    justifyContent:'space-between',
    // gap:10,
    // paddingBottom:60,
    flexGrow:1
  },
    inner: {
    // flex: 1,
    justifyContent: 'space-between',
    // paddingHorizontal: 16,
    // paddingBottom: 20,
  },
  content: {
    paddingHorizontal:16,
  },
  input: {
    padding: 12,
    flex:1,
  },
   svg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 30,
    color: Colors.black,
    alignSelf: 'flex-start',
  },
    inputTitle: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    paddingHorizontal: 8,
    marginTop: 10,
  },
    icon: {
    padding: 8,
  },
    inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: Colors.secondary,
  },
  forgotText:{
    color:Colors.secondary,
    fontFamily:'Rubik-Medium',
    padding:10,
    alignSelf:'flex-end'
  },
   footer: {
    paddingHorizontal:16,
    paddingVertical:20,
    // flex:1,
    justifyContent:'flex-end',
  },
  touchable:{
    padding:15,
    alignItems:'center',
    backgroundColor:Colors.secondary,
    borderRadius:15,
  },
  buttonText:{
    fontFamily:'Rubik-SemiBold',
    color:Colors.white,
    fontSize:18
  },
  bottomRow:{
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:5
  },
  SignupString:{
    fontSize:16,
    fontFamily:'Rubik-Medium',
    color:Colors.lightGrey
  },
  Signup:{
    fontSize:15,
    fontFamily:'Rubik-Medium',
    color:Colors.secondary
  },
  touchableModal:{
    flex:1,
    marginVertical:30,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center'
  },
  modalView:{
    backgroundColor:Colors.white,
    width:'90%',
    flex:1,
    // borderWidth:1,
    padding:80,
    borderRadius:20,
  },
   avatar: {
        width: 70,
        height: 70,
        alignSelf: 'center'
    },
    avatarContainer: {
        overflow: 'hidden',
        width: 70,
        height: 70,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 100,
        alignSelf: 'center'
    },
})