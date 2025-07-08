import { client } from '@/shared/lib/tanstack-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from 'react';
import { StyleSheet } from "react-native";
import 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

  const [loaded,error]= useFonts({
    'Borel':require('@assets/fonts/Borel-Regular.ttf'),
    'SpaceMono':require('@assets/fonts/SpaceMono-Regular.ttf'),
    'BagelFat':require('@assets/fonts/BagelFatOne-Regular.ttf'),
    'Rubik':require('@assets/fonts/Rubik-VariableFont_wght.ttf'),
    'Rubik-Light':require('@assets/fonts/Rubik-Light.ttf'),
    'Rubik-Regular':require('@assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium':require('@assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold':require('@assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold':require('@assets/fonts/Rubik-Bold.ttf'),
    'Rubik-ExtraBold':require('@assets/fonts/Rubik-ExtraBold.ttf')
  })
   useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <SafeAreaView style={styles.container}>
        <Slot/>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
})