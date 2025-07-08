import { ErrorResponse } from "@/shared/types/apiTypes"
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
    isPending:boolean
    isError:boolean
    error: ErrorResponse | null
    data:LoginResponse | undefined
    handleLogin: () => void
}

export type LoginPayload = {
    email:string,
    password:string
}

export type LoginResponse = {
  data: {
      CreatedAt:string,
      Email:string,
      FirstName:string,
      ID:string,
      LastName:string,
      Password:string,
      UpdatedAt:string,
      Username:string
   },
  success: boolean,
  token: string
}