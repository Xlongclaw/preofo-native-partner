import { View, Text, Keyboard } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
import BorderInputField from "@components/border-input-field";
import XStatusBar from "@components/x-status-bar";
import XButton from "@components/x-button";
type Props = NativeStackScreenProps<RootStackParamList, "Registeration">;

export default function RegisterationScreen({ navigation, route }: Props) {
  const [keyboardVisible,setKeyboardVisible] = useState(false)
  useEffect(()=>{
    Keyboard.addListener('keyboardDidShow',()=>{
      setKeyboardVisible(true)
    })
    Keyboard.addListener('keyboardDidHide',()=>{
      setKeyboardVisible(false)
    })
  },[])
  return (
    <View className={` px-8 h-screen ${keyboardVisible ?"justify-start":"justify-center pb-16"}`}>
      {/* <Text>{route.params.userToken}</Text> */}
      <XStatusBar />
      <View className={`mx-3 my-10 ${keyboardVisible?'mb-2':'mb-6'}`} >
        <Text className="text-4xl font-bold text-color2">Hello There,</Text>
        <Text className="text-2xl font-bold text-color2/70">
          So, What are you doing for your Craving
        </Text>
      </View>
      <View className="flex-co space-y-2">
        <View className="my-4">
          <BorderInputField
            placeholder={`What's your name ?`}
            type="text"
            onChange={() => {}}
          />
        </View>
        <View className="my-4">
          <BorderInputField
            placeholder={`Password`}
            type="text"
            onChange={() => {}}
          />
        </View>
        <View className="my-4">
          <BorderInputField
            placeholder={`Confirm Password`}
            type="text"
            onChange={() => {}}
          />
        </View>
        <View className="w-1/2">
          <XButton title="Continue" type="dark" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}
