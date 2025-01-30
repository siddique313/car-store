import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import RadioButton from "react-native-radio-buttons-group/lib/RadioButton";
export default function CarFeature() {
  const [redioBtn, setRedioBtn] = useState<boolean>(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Title</Text>
        <TextInput
          style={[styles.inputStyle]}
          placeholder="Enter title"
          placeholderTextColor={"gray"}
        />
      </View>
      <View style={styles.condionAndYearContainer}>
        <View style={styles.condtionContainer}>
          <Text style={styles.inputTitle}>condition</Text>
          <View style={styles.btnContainer}>
            <RadioButton
              label="New"
              labelStyle={{ fontSize: 17 }}
              borderSize={redioBtn === false ? 6 : 2}
              size={18}
              id={""}
              color={redioBtn === false ? "blue" : " black"}
              onPress={() => setRedioBtn(!redioBtn)}
            />
            <RadioButton
              label="Used"
              labelStyle={{ fontSize: 17 }}
              borderSize={redioBtn === false ? 2 : 6}
              size={18}
              id={""}
              color={redioBtn === true ? "blue" : " black"}
              onPress={() => setRedioBtn(!redioBtn)}
              containerStyle={{ width: 30, alignItems: "flex-start" }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.inputTitle}>Year</Text>
          <TextInput
            placeholder="Enter Year"
            style={styles.yearInput}
            placeholderTextColor={"gray"}
          />
        </View>
      </View>
      <View style={styles.brandAndContainer}>
        <View style={styles.brandContainer}>
          <Text style={styles.inputTitle}>Brand</Text>
          <Pressable style={styles.pressableStyle}>
            <Text style={styles.pressbtnText}>Select Brand</Text>
          </Pressable>
        </View>
        <View style={styles.modelContainer}>
          <Text style={styles.inputTitle}>Model</Text>
          <Pressable style={styles.pressableStyle}>
            <Text style={styles.pressbtnText}>Select Model</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <View>
          <Text style={styles.inputTitle}>Features</Text>
          <TextInput
            placeholder="Search"
            style={styles.featureInput}
            placeholderTextColor={"gray"}
          />
        </View>
      </View>
      <View style={styles.brandAndContainer}>
        <View style={styles.brandContainer}>
          <Text style={styles.inputTitle}>Loaction</Text>
          <Pressable style={styles.pressableStyle}>
            <Text style={styles.pressbtnText}>search loaction</Text>
          </Pressable>
        </View>
        <View style={styles.modelContainer}>
          <Text style={styles.inputTitle}>Price</Text>
          <Pressable style={styles.pressableStyle}>
            <Text style={styles.pressbtnText}>Enter price</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.inputTitle}>Description</Text>
        <TextInput
          placeholder="Write description about your car"
          style={styles.descriptionInput}
          placeholderTextColor={"gray"}
          multiline
          numberOfLines={4}
        />
      </View>
      <View>
        <Pressable style={styles.sellbtn}>
          <Text style={styles.sellText}>Sell your car</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 20,
    height: 20,
  },
  inputStyle: {
    backgroundColor: "#EDEEF0",
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 10,
    outlineColor: "transparent",
    paddingBottom: 15,
    paddingTop: 15,
  },
  inputContainer: { marginTop: 10 },
  mainContainer: {
    width: "100%",
    height: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  inputTitle: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 10,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  yearInput: {
    width: "100%",
    outlineColor: "transparent",
    backgroundColor: "#EDEEF0",
    paddingVertical: 10,
    fontSize: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  condionAndYearContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    gap: 20,
  },
  condtionContainer: { gap: 11 },
  pressableStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EDEEF0",
    paddingVertical: 20,
    fontSize: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  brandAndContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  pressbtnText: {
    color: "gray",
  },
  brandContainer: {
    width: "47%",
  },
  modelContainer: {
    width: "47%",
  },
  featureInput: {
    backgroundColor: "#EDEEF0",
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 10,
    outlineColor: "transparent",
    paddingBottom: 15,
    paddingTop: 15,
  },
  featureContainer: {},
  descriptionInput: {
    textAlign: "left",
    backgroundColor: "#EDEEF0",
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 10,
    outlineColor: "transparent",
    height: 150,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  descriptionContainer: { marginBottom: 20 },
  sellbtn: {
    backgroundColor: "#ff5c01",
    paddingVertical: 20,
    width: "100%",
    borderRadius: 10,
  },

  sellText: { width: "100%", textAlign: "center", fontSize: 24 },
});
