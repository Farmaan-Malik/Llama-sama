
import { useAuthStore } from '@/shared/store/auth.store';
import { ErrorResponse } from '@/shared/types/apiTypes';
import { createAvatarFromString } from '@/shared/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { TextInput, ToastAndroid } from 'react-native';
import { Signup } from '../../api/auth.api';
import { SignupPayload, UseSignup } from '../types/signupTypes';


const useSignup = (): UseSignup => {
 const [firstName,setFirstName] = useState('')
 const [lastName,setLastName] = useState('')
 const [email,setEmail] = useState('')
 const [username,setUsername] = useState<string | null>(null)
 const [password,setPassword] = useState('')
 const [confirmPassword,setConfirmPassword] = useState('')
 const [showPassword,setShowPassword] = useState(false)
 const [showConfirmPassword,setShowConfirmPassword] = useState(false)
 const [height,setHeight] = useState<number | null>(null)
 const [svg,setSvg] = useState<string | null>(null)
 const {setToken,setUsernameInStore,setUserId} = useAuthStore()
 const lastNameRef = useRef<TextInput>(null)
 const confirmPasswordRef = useRef<TextInput>(null)
 const passwordRef = useRef<TextInput>(null)
 const firstNameRef = useRef<TextInput>(null)
 const emailRef = useRef<TextInput>(null)
const {mutate,isPending} = useMutation({
  mutationKey:["signup"],
  mutationFn:(payload:SignupPayload)=>Signup(payload),
  onError:(error:ErrorResponse)=>{
    ToastAndroid.show(error?.response?.data?.message,ToastAndroid.LONG)
  },
  onSuccess:(data)=>{
     setToken(data.token)
     setUserId(data.ID)
     setUsernameInStore(username!)
     router.navigate("/(public)")
  }})
   const createSvg =()=> {
    if (username) {
      const svg = createAvatarFromString(username)
      const dataUri = svg.toString()
      setSvg(dataUri)
    }
   }
   
   useEffect(()=>{
    createSvg()
   },[username])

   const handleSubmit = ()=>{
      mutate({Username:username!,FirstName:firstName,LastName:lastName,Email:email,Password:password})
   }

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
    lastNameRef,
    confirmPasswordRef,
    passwordRef,
    firstNameRef,
    emailRef,
    svg,
    handleSubmit,
    isPending
}
}

export default useSignup