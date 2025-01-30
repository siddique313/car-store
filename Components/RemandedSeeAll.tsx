import { View, Text } from "react-native";
import React from "react";

export default function RecommendedSeeAll() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "600" }}>Recommended</Text>
      <Text style={{ fontSize: 20, color: "gray" }}>See all</Text>
    </View>
  );
}
