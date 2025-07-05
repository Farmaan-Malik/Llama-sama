import { useRouter } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { Keyboard, ScrollView, TextInput } from 'react-native'
import { UseSignup } from '../types/signupTypes'


const useSignup = (): UseSignup => {
 const [firstName,setFirstName] = useState('')
 const [lastName,setLastName] = useState('')
 const [email,setEmail] = useState('')
 const [username,setUsername] = useState('')
 const [password,setPassword] = useState('')
 const [confirmPassword,setConfirmPassword] = useState('')
 const [showPassword,setShowPassword] = useState(false)
 const [showModal,setShowModal] = useState(false)
 const [showConfirmPassword,setShowConfirmPassword] = useState(false)
 const [height,setHeight] = useState<number | null>(null)
 const scrollRef = useRef<ScrollView>(null)
 const lastNameRef = useRef<TextInput>(null)
 const confirmPasswordRef = useRef<TextInput>(null)
 const passwordRef = useRef<TextInput>(null)
 const usernameRef = useRef<TextInput>(null)
 const emailRef = useRef<TextInput>(null)
 const router = useRouter()

  useEffect(() => {
   const showSub = Keyboard.addListener('keyboardDidShow', () => {
     setTimeout(()=>scrollRef.current?.scrollToEnd(),500)
   })
   const hideSub = Keyboard.addListener('keyboardDidHide', () => {
   })
 
   return () => {
     showSub.remove()
     hideSub.remove()
   }
   }, [])
return {
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
    scrollRef,
    lastNameRef,
    confirmPasswordRef,
    passwordRef,
    usernameRef,
    emailRef,
    router,
    showModal,
    setShowModal
}
}

export default useSignup