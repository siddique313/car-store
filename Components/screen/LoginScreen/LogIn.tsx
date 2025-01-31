import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { rootStackPharmList } from "../StackNavigator";
type SignupProop = NativeStackScreenProps<rootStackPharmList, "Signup">;

const LogIn = ({ navigation }: SignupProop) => {
  const [screen, setScreen] = useState<unknown>("");

  return (
    <>
      {screen == "" ? (
        <View style={styles.page}>
          {/* <Image style={styles.img} source={require("@/assets/images/man")} /> */}
          <Text style={styles.head}>LOGIN</Text>
          <Text style={styles.topic}>Welcome to CarStore</Text>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              gap: 30,
              marginTop: 20,
            }}
          >
            <View style={{ width: "95%" }}>
              <TextInput style={styles.input} placeholder="Username" />
            </View>
            <View style={{ width: "95%" }}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View>
            <Pressable>
              <Text style={styles.forgot}>Forgot password?</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable>
              <Text style={styles.login}>LOGIN</Text>
            </Pressable>
          </View>
          <View style={styles.account}>
            <Text style={styles.paragraph}>
              don't have an account?
              <Text
                style={styles.title}
                onPress={() => navigation.navigate("Signup")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    marginTop: 120,
  },
  page: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  head: {
    fontSize: 30,
    color: "black",
    marginTop: 50,
    fontWeight: "bold",
  },
  topic: {
    fontSize: 20,
  },
  input: {
    backgroundColor: "silver",
    paddingVertical: 20,
    paddingLeft: 10,
    borderRadius: 10,
    outlineColor: "transparent",
    paddingHorizontal: 10,
    fontSize: 24,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 5,
  },
  forgot: {
    fontSize: 22,
  },
  button: {
    marginTop: 50,
    backgroundColor: "black",
    width: "95%",
    borderRadius: 8,
    paddingVertical: 15,
  },
  login: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  account: {
    marginTop: 50,
  },
  paragraph: {
    fontSize: 20,
  },
  title: {
    color: "green",
    fontWeight: "bold",
    paddingLeft: 7,
  },
});
