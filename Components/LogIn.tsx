import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import Main from "./Main";

const LogIn = () => {
  const navigation = useNavigation();
  const [screen, setScreen] = useState("login");
  console.log(screen);
  return (
    <View>
      {screen === "login" && (
        <View style={styles.page}>
          <Image
            style={styles.img}
            source={require("@/assets/images/logo.jpg")}
          />
          <Text style={styles.head}>LOGIN</Text>
          <Text style={styles.topic}>Wellcome to CarStore</Text>
          <View style={styles.input}>
            <Image
              style={styles.image}
              source={require("@/assets/images/user.jpg")}
            />
            <TextInput style={styles.input} placeholder="Username" />
          </View>
          <View style={styles.input}>
            <Image
              style={styles.image}
              source={require("@/assets/images/lock1.jpg")}
            />
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <View>
            <Pressable>
              <Text style={styles.forgot}>Forgot password?</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable onPress={() => setScreen("main")}>
              <Text style={styles.login}>LOGIN</Text>
            </Pressable>
          </View>
          <View style={styles.account}>
            <Text style={styles.paragraph}>
              don't have an account?<Text style={styles.title}>Sign Up</Text>
            </Text>
          </View>
        </View>
      )}
      {screen === "main" && <Main />}
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  img: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    marginTop: 120,
  },
  page: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
    alignItems: "center",
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
    marginTop: 25,
    width: "85%",
    gap: 15,
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    marginBottom: 20,
    borderRadius: 8,
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
    width: "85%",
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
  },
});
