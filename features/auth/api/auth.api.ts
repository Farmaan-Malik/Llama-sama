import api from "@/shared/lib/axios-instance"
import { LoginPayload, LoginResponse } from "../login/types/loginTypes"
import { SignupPayload, SignupResponse } from "../signup/types/signupTypes"

export const Login = async (payload: LoginPayload):Promise<LoginResponse> => {
        const response = await api.post("/login", payload)
        return response.data
}


export const Signup = async(payload:SignupPayload):Promise<SignupResponse> =>{
    const response = await api.post("/signup",payload)
    return response.data
}