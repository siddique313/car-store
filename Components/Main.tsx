import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Main = () => {
  return (
    <View style={styles.main}>
      {/* <Image style={styles.img} source={require("@/assets/images/logo.jpg")} /> */}
      <Text style={styles.carname}>CAR STORE</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "orange",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: "50%",
  },
  carname: {
    marginTop: 17,
    fontSize: 25,
    fontWeight: "bold",
  },
});
