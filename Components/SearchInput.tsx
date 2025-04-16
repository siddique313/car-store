import { View, Text, TextInput } from "react-native";
import React from "react";

export default function SearchInput() {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor={"gray"}
        placeholder="Search Car"
      />
    </View>
  );
}
const styles = {
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#000",
    marginVertical: 10,
  },
};
