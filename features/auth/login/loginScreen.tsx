import LocalSvg from '@/assets/svg/LocalSvg'
import AnimatedTextBar from '@/shared/components/animatedBar'
import Loader from '@/shared/components/loader'
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
import useLogin from './viewmodel/useLogin'

const LoginScreen = () => {
  const {
    password,
    passwordRef,
    setPassword,
    showPassword,
    setShowPassword,
    email,
    setEmail,
    height,
    setHeight,
    isPending,
    isError,
    error,
    data,
    handleLogin,
  } = useLogin()

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <KeyboardAvoidingScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        stickyFooter={
          <View style={styles.footer}>
            <TouchableOpacity onPress={()=>handleLogin()} style={styles.touchable}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.bottomRow}>
              <Text style={styles.SignupString}>{"Don't have an account? "}</Text>
              <Text
                onPress={() => router.navigate('/(auth)/signup')}
                style={styles.Signup}
              >
                Sign up
              </Text>
            </View>
          </View>
        }
      >
        <View style={styles.inner}>
          <View style={styles.content}>
            <LocalSvg.MediumCurve
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout
                setHeight(height)
              }}
              style={styles.svg}
            />
            <AnimatedTextBar
              titleStyle={[
                styles.title,
                { marginTop: (height ?? HEIGHT) * 0.65 },
              ]}
              text="Sign In"
              animatedAlignment="flex-start"
            />
            <View style={{ marginTop: 20 }} />
            <View>
              <Text style={styles.inputTitle}>Email</Text>
              <View style={styles.inputRow}>
                <Ionicons name="mail-outline" size={20} style={styles.icon} />
                <TextInput
                  autoComplete="off"
                  onSubmitEditing={() => passwordRef.current?.focus()}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                />
              </View>
            </View>
            <View>
              <Text style={styles.inputTitle}>Password</Text>
              <View style={styles.inputRow}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  style={styles.icon}
                />
                <TextInput
                  ref={passwordRef}
                  autoComplete="off"
                  secureTextEntry={!showPassword}
                  onSubmitEditing={() => {}}
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                />
                {showPassword ? (
                  <Ionicons
                    name="eye-outline"
                    size={20}
                    onPress={() => setShowPassword(false)}
                    style={styles.icon}
                  />
                ) : (
                  <Ionicons
                    name="eye-off-outline"
                    size={20}
                    onPress={() => setShowPassword(true)}
                    style={styles.icon}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingScrollView>
      <Loader visible={isPending}/>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    justifyContent: 'space-between',
    gap: 10,
    paddingBottom: 40,
    flexGrow: 1,
  },
  inner: {
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 16,
  },
  input: {
    padding: 12,
    flex: 1,
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
    marginTop: 20,
  },
  icon: {
    paddingHorizontal: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: Colors.secondary,
  },
  forgotText: {
    color: Colors.secondary,
    fontFamily: 'Rubik-Medium',
    padding: 10,
    alignSelf: 'flex-end',
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'flex-end',
  },
  touchable: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'Rubik-SemiBold',
    color: Colors.white,
    fontSize: 18,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  SignupString: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: Colors.lightGrey,
  },
  Signup: {
    fontSize: 15,
    fontFamily: 'Rubik-Medium',
    color: Colors.secondary,
  },
})
