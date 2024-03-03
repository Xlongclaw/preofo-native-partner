import { View } from "react-native";
import React from "react";
import XStatusBar from "@components/x-status-bar";
import SignUpContainer from "@containers/signup-container";

export default function SignUp() {
  return (
    <View>
      <XStatusBar/>
      <SignUpContainer/>
    </View>
  );
}
