import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Fonts from "./src/config/Fonts";
import StackNavigator from "./src/navigations/StackNavigator";

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts(Fonts);
  return !fontsLoaded ? null : (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
