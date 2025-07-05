import { useFocusEffect, useNavigation, useRouter } from "expo-router"
import { useCallback, useEffect, useRef, useState } from "react"
import { Keyboard, TextInput } from "react-native"
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
  const router = useRouter()
    useEffect(() => {
  const showSub = Keyboard.addListener('keyboardDidShow', () => {
    setTimeout(()=>scrollRef.current?.scrollToEnd(),500)
  })
  const hideSub = Keyboard.addListener('keyboardDidHide', () => {
    scrollRef.current?.scrollTo({y:0})
  })

  return () => {
    showSub.remove()
    hideSub.remove()
  }
  }, [])

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
    router
  }
}
export default useLogin