import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "@screens/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackNavigatorOptions from "./options/RootStackNavigatorOptions";
import SignIn from "@screens/authentication/sign-in";
import SignUp from "@screens/authentication/sign-up";

/**
 * Calling the stack navigator in root stack from react-navigation
 */
const RootStack = createNativeStackNavigator();

/**
 * This Component renders the Root Navigation Container Containing 
 * root stack.
 * 
 * @returns The root Navigation Container JSX
 */
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SignUp" screenOptions={RootStackNavigatorOptions}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="SignUp" component={SignUp} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
