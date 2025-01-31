import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { data } from "./data";

export default function DataFetching() {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          gap: 17,
          flexWrap: "wrap",
          alignSelf: "center",
        }}
      >
        {data.map<any>((item, idx) => {
          return (
            <View key={idx}>
              <View style={{ width: "100%" }}>
                <Image
                  style={{ width: 180, height: 170, borderRadius: 17 }}
                  source={item.image}
                />
              </View>
              <View>
                <Text style={{ fontSize: 30, fontWeight: "600" }}>
                  {item.name}
                </Text>
                <Text style={{ color: "gray", fontSize: 20 }}>
                  Rs: {item.price}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
