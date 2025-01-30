import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigate = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigate.navigate("Second")} title="Press btn" />
    </View>
  );
}
