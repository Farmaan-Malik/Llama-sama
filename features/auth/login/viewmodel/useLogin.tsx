import { useFocusEffect, useNavigation } from "expo-router"
import { useCallback, useRef, useState } from "react"
import { TextInput } from "react-native"
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated"
import { UseLogin } from "../types/loginTypes"



const useLogin = () : UseLogin => {
  const passwordRef = useRef<TextInput>(null)
  const scrollRef = useRef<ScrollView>(null)
  const navigation = useNavigation()
  const [height, setHeight] = useState<number | null>(null)
  const [showPassword,setShowPassword] = useState(false)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  useFocusEffect(
    useCallback(()=>{
 const sub = navigation.addListener('beforeRemove', (e) => {
      if (!navigation.canGoBack()) return
      e.preventDefault()
    })

    return () => sub()
    },[navigation])
  )
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
    scrollRef,
  }
}
export default useLogin