import { View } from "react-native";
import React from "react";
import XStatusBar from "@components/x-status-bar";
import SignInContainer from "@containers/signin-container";

export default function SignIn() {
  return (
    <View>
      <XStatusBar/>
      <SignInContainer/>
    </View>
  );
}
