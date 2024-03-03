import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "@screens/home";
import Authentication from "@screens/authentication";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackNavigatorOptions from "./options/RootStackNavigatorOptions";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootStack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={RootStackNavigatorOptions}
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Authentication" component={Authentication} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
