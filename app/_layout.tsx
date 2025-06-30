import { Slot } from "expo-router";
import 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {

  return (
      <SafeAreaView style={styles.container}>
        <Slot/>
      </SafeAreaView>
  );
}
const styles = {
  container: {
    flex: 1,
  }
}