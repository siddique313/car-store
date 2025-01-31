import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "./LoginScreen/LogIn";
import { SignUp } from "./SignUpScreen/SignUpForm";
import HomeScreen from "./HomeScreen/HomeScreen";
export type rootStackPharmList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};
const Stack = createNativeStackNavigator<rootStackPharmList>();
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
