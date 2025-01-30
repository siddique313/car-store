import { View, Text, Image } from "react-native";
import React from "react";

export default function LogoAndIcons() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
      }}
    >
      <Image
        style={{ width: 45, height: 45 }}
        source={require("../assets/images/ThreeLineIcon.png")}
      />
      <Text style={{ fontSize: 28, color: "#FF5D02" }}>CarStore</Text>
      <Image
        style={{ width: 45, height: 45 }}
        source={require("../assets/images/bell.png")}
      />
    </View>
  );
}
