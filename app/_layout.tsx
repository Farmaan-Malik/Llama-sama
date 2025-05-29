import { Stack } from "expo-router";

const CommonRoutes=()=>{
  return <Stack>
    <Stack.Screen name="index" options={{headerShown:false}}/>
    <Stack.Screen name="login" options={{headerShown:false}}/>
  </Stack>
}


export default function RootLayout() {
  return(<CommonRoutes/>)
}

