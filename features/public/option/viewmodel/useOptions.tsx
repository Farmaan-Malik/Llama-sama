import { useAuthStore } from "@/shared/store/auth.store"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"
import { useState } from "react"
import { Alert, ToastAndroid } from "react-native"
import { SetInitialData } from "../../api/public.api"
import { InitialPromptPayload, UseOptions } from "../types/optionTypes"

const useOptions = (): UseOptions => {
 const classData :number[]=[1,2,3,4,5,6,7,8]
 const subjectData:string[]= ['History','Geography','English','Physics','Chemistry','Biology']
 const [selectedClass,setSelectedClass]= useState<number | null>(null)
 const [selectedSubject,setSelectedSubject]= useState<string | null>(null)
 const {userId}=useAuthStore()

 const {mutate,isPending} = useMutation({
   mutationKey:['options'],
   mutationFn:(payload:InitialPromptPayload)=>SetInitialData(payload),
    onError:(error)=> {
        if (error instanceof Error) {
          console.log("API Error:", error.message)
          Alert.alert(error.message)
        } else {
          console.log("Unknown error", error)
           Alert.alert(error)
        }
      },
   onSuccess:(data)=>{
      router.navigate("/(public)/game")
   }
})

const handleSubmit = ()=>{
   if (!(userId.length >= 0) ) {
      ToastAndroid.show("Invalid User Id",ToastAndroid.LONG)
      return
   }
   if (!selectedClass) {
      ToastAndroid.show("Select a level",ToastAndroid.LONG)
      return
   }
   if (!selectedSubject) {
      ToastAndroid.show("Select a subject",ToastAndroid.LONG)
      return
   }

   mutate({user:userId,standard:selectedClass?.toString()!,subject:selectedSubject!})
}


 return{
    classData,
    subjectData,
    selectedClass,
    setSelectedClass,
    selectedSubject,
    setSelectedSubject,
    handleSubmit,
    isPending
 }
}

export default useOptions