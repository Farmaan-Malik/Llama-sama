import { TextInput } from "react-native"

export interface UseLogin{
    passwordRef:React.RefObject<TextInput | null>
    password:string
    setPassword:React.Dispatch<React.SetStateAction<string>>
    showPassword:boolean
    setShowPassword:React.Dispatch<React.SetStateAction<boolean>>
    email:string
    setEmail:React.Dispatch<React.SetStateAction<string>>
    height:number | null
    setHeight:React.Dispatch<React.SetStateAction<number | null>>
}
