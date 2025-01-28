import { Stack } from "expo-router";
import { Text, View } from "react-native";
import Main from "@/app-example/components/Main";
// import LogIn from "@/app-example/components/LogIn";
import Index from "@/app-example/components/LogIn";

export default function RootLayout() {
  // return <LogIn />;
  return <Index />;
}
