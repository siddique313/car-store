import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const SeplaceScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.head}>CarStore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    alignItems: "center",
    backgroundColor: "orange",
    fontSize: 25,
    fontWeight: "bold",
  },
  body: {
    height: "100vh",

    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
