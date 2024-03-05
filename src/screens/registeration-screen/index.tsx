import { View, Text, Keyboard } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
import BorderInputField from "@components/border-input-field";
import XStatusBar from "@components/x-status-bar";
import XButton from "@components/x-button";
import Toast from "react-native-toast-message";
type Props = NativeStackScreenProps<RootStackParamList, "Registeration">;
import * as SecureStore from "expo-secure-store";

export default function RegisterationScreen({ navigation, route }: Props) {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
  }, []);

  async function storeData(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  const submitData = async () => {
    if (password === confirmPassword) {
      await fetch(`${process.env.SERVER_ADDRESS}addUser`, {
        method: "POST",
        body: JSON.stringify({
          name,
          password,
          userToken: route.params.userToken,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.code == "SUCCESS") {
            storeData('userToken',route.params.userToken)
            navigation.navigate("Home");
          } else {
            Toast.show({
              type: "error",
              text1: "INVALID REQUEST!",
              topOffset: 60,
            });
            navigation.navigate("SignUp");
          }
        })
        .catch((err) => console.log(err));
    } else {
      Toast.show({
        type: "error",
        text1: "Password Dosen't match!",
        topOffset: 60,
      });
    }
  };
  return (
    <View
      className={` px-8 h-screen ${
        keyboardVisible ? "justify-start" : "justify-center pb-16"
      }`}
    >
      <XStatusBar />
      <View className={`mx-3 my-10 ${keyboardVisible ? "mb-2" : "mb-6"}`}>
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
            onChange={(value) => {
              setName(value);
            }}
          />
        </View>
        <View className="my-4">
          <BorderInputField
            placeholder={`Password`}
            type="text"
            onChange={(value) => {
              setPassword(value);
            }}
          />
        </View>
        <View className="my-4">
          <BorderInputField
            placeholder={`Confirm Password`}
            type="text"
            onChange={(value) => {
              setConfirmPassword(value);
            }}
          />
        </View>
        <View className="w-1/2">
          <XButton title="Continue" type="dark" onPress={submitData} />
        </View>
      </View>
    </View>
  );
}
