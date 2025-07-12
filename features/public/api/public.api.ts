import api from "@/shared/lib/axios-instance"
import { InitialPromptPayload } from "../option/types/optionTypes"

export const SetInitialData=async(data:InitialPromptPayload)=>{
    try {
        const response = await api.post("/user/initial",data)
        return response
    } catch (error:any) {
        const message =
      error?.response?.data?.message || "Something went wrong"
      throw new Error(message)
    }
}
