import api from "@/shared/lib/axios-instance"
import { GetQuestionPayload } from "../game/types/gameTypes"
import { InitialPromptPayload } from "../option/types/optionTypes"

export const SetInitialData=async(data:InitialPromptPayload)=>{
    console.log("DATA: ",data)
    const response = await api.post("/user/initial",data)
    return response
}

export const GetQuestion=async(data:GetQuestionPayload)=>{
    const response = await api.get("user/question",{params:{
        userId:data.user,
        correctResponses:data.correctResponses
    }})
    return response
}