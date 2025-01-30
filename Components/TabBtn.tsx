import { View, Text, Image } from "react-native";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
export default function TabBtn() {
  return (
    <View
      style={{
        zIndex: 1,
        width: "100%",
        height: 70,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: "plum",
        top: 300,
      }}
    >
      {/* <Image
        style={{ width: 40, height: 40, borderRadius: 50 }}
        source={require("@/assets/images/HomeIcon.png")}
      /> */}
      <IoMdHome style={{ color: "gray", width: 40, height: 40 }} />
      <FaHeart style={{ color: "gray", width: 40, height: 40 }} />
      <IoPersonSharp style={{ color: "gray", width: 40, height: 40 }} />
    </View>
  );
}
