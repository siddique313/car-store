import { View, Text, TextInput } from "react-native";
import React from "react";

export default function SearchInput() {
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: "#EDEEF0",
          paddingVertical: 16,
          fontSize: 25,
          paddingHorizontal: 10,
          borderRadius: 16,
          outlineColor: "#EDEEF0",
        }}
        placeholderTextColor={"gray"}
        placeholder="Search Car"
      />
    </View>
  );
}
