import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "@screens/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackNavigatorOptions from "./options/RootStackNavigatorOptions";
import SignIn from "@screens/authentication/sign-in";
import SignUp from "@screens/authentication/sign-up";
import RegisterationScreen from "@screens/registeration-screen";
import { RootStackParamList } from "types";
import AppLoadingScreen from "@screens/app-loading-screen";

/**
 * Calling the stack navigator in root stack from react-navigation
 */
const RootStack = createNativeStackNavigator<RootStackParamList>();

/**
 * This Component renders the Root Navigation Container Containing 
 * root stack.
 * 
 * @returns The root Navigation Container JSX
 */
export default function Navigation() {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Registeration" screenOptions={RootStackNavigatorOptions}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="SignUp" component={SignUp} />
        <RootStack.Screen name="Registeration" component={RegisterationScreen} />
        <RootStack.Screen name="AppLoadingScreen" component={AppLoadingScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
