import { Dispatch, SetStateAction } from "react"
import { TextInput } from "react-native"

export interface UseSignup {
    firstName: string
    setFirstName:Dispatch<SetStateAction<string>>
    lastName: string
    setLastName:Dispatch<SetStateAction<string>>
    email: string
    setEmail:Dispatch<SetStateAction<string>>
    username: string | null
    setUsername:Dispatch<SetStateAction<string | null>>
    password: string
    setPassword:Dispatch<SetStateAction<string>>
    confirmPassword: string
    setConfirmPassword:Dispatch<SetStateAction<string>>
    showPassword: boolean
    setShowPassword:Dispatch<SetStateAction<boolean>>
    showConfirmPassword: boolean
    setShowConfirmPassword:Dispatch<SetStateAction<boolean>>
    height:number | null
    setHeight: Dispatch<SetStateAction<number | null>>
    lastNameRef: React.RefObject<TextInput | null>
    emailRef: React.RefObject<TextInput | null>
    passwordRef: React.RefObject<TextInput | null>
    confirmPasswordRef: React.RefObject<TextInput | null>
    firstNameRef: React.RefObject<TextInput | null>
    svg:string | null
    setSvg : Dispatch<SetStateAction<string | null>>    

}