import { useAuthStore } from "@/shared/store/auth.store"
import { useMutation } from "@tanstack/react-query"
import { useFocusEffect, useNavigation } from "expo-router"
import { useCallback, useRef, useState } from "react"
import { Alert, TextInput } from "react-native"
import { Login } from "../../api/auth.api"
import { LoginPayload, UseLogin } from "../types/loginTypes"



const useLogin = () : UseLogin => {
  const passwordRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const [height, setHeight] = useState<number | null>(null)
  const [showPassword,setShowPassword] = useState(false)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {setToken,setUsernameInStore,setUserId} = useAuthStore()
  const {mutate,isPending,isError,error,data} = useMutation({
  mutationKey: ["login"],
  mutationFn: (payload: LoginPayload) => Login(payload),
  onSuccess:(data)=>{
    setToken(data.token)
    setUserId(data.data.ID)
    setUsernameInStore(data.data.Username)
  },
  onError:(error)=> {
    if (error instanceof Error) {
      console.log("API Error:", error.message)
      Alert.alert(error.message)
    } else {
      console.log("Unknown error", error)
            Alert.alert(error)
    }
  },
});
  useFocusEffect(
    useCallback(()=>{
 const sub = navigation.addListener('beforeRemove', (e) => {
      if (!navigation.canGoBack()) return
      e.preventDefault()
    })

    return () => sub()
    },[navigation])
  )

  const handleLogin = () =>{
    mutate({email,password})
  }
  return{
    passwordRef,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    email,
    setEmail,
    height,
    setHeight,
    isPending,
    isError,
    data,
    handleLogin,
}
}
export default useLogin