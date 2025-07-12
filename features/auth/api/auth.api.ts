import api from "@/shared/lib/axios-instance"
import { LoginPayload, LoginResponse } from "../login/types/loginTypes"
import { SignupPayload, SignupResponse } from "../signup/types/signupTypes"

export const Login = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const response = await api.post("/login", payload)
    return response.data
  } catch (error: any) {
    const message =
      error?.response?.data?.message || "Something went wrong"
    throw new Error(message)
  }
}


export const Signup = async(payload:SignupPayload):Promise<SignupResponse> =>{
    try {
        const response = await api.post("/signup",payload)
        return response.data
    } catch (error:any) {
    const message =
      error?.response?.data?.message || "Something went wrong"
      throw new Error(message)
    }
}