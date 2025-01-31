import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { TabRouter } from "@react-navigation/native";
const Tab = createBottomTabNavigator<tabParamList>();
type tabParamList = {
  Home: undefined;
};
export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
