import { Router } from "expo-router"
import { Dispatch, SetStateAction } from "react"
import { ScrollView, TextInput } from "react-native"

export interface UseSignup {
    firstName: string
    setFirstName:Dispatch<SetStateAction<string>>
    lastName: string
    setLastName:Dispatch<SetStateAction<string>>
    email: string
    setEmail:Dispatch<SetStateAction<string>>
    username: string
    setUsername:Dispatch<SetStateAction<string>>
    password: string
    setPassword:Dispatch<SetStateAction<string>>
    confirmPassword: string
    setConfirmPassword:Dispatch<SetStateAction<string>>
    showPassword: boolean
    setShowPassword:Dispatch<SetStateAction<boolean>>
    showConfirmPassword: boolean
    setShowConfirmPassword:Dispatch<SetStateAction<boolean>>
    showModal: boolean
    setShowModal:Dispatch<SetStateAction<boolean>>
    height:number | null
    setHeight: Dispatch<SetStateAction<number | null>>
    scrollRef: React.RefObject<ScrollView | null>
    lastNameRef: React.RefObject<TextInput | null>
    emailRef: React.RefObject<TextInput | null>
    passwordRef: React.RefObject<TextInput | null>
    confirmPasswordRef: React.RefObject<TextInput | null>
    usernameRef: React.RefObject<TextInput | null>
    router:Router

}