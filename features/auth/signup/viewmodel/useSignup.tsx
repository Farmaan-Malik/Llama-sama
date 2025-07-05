
import { createAvatarFromString } from '@/shared/utils/utils';
import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { UseSignup } from '../types/signupTypes';


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
 const lastNameRef = useRef<TextInput>(null)
 const confirmPasswordRef = useRef<TextInput>(null)
 const passwordRef = useRef<TextInput>(null)
 const firstNameRef = useRef<TextInput>(null)
 const emailRef = useRef<TextInput>(null)

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
    setSvg,
}
}

export default useSignup