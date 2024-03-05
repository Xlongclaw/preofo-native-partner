import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import XStatusBar from "@components/x-status-bar";
import * as SecureStore from "expo-secure-store";

export default function Home() {
  const [token,setToken] = useState("jskjsk")
  useEffect(() => {
    async function getValueFor(key: string) {
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        return result;
        // alert("🔐 Here's your value 🔐 \n" + result);
      } else {
        return "SOSO";
        // alert('No values stored under that key.');
      }
    }
    getValueFor("userToken").then((data)=>console.log(data)
    )
  }, []);

  return (
    <View>
      <XStatusBar />
      <Text>{token}</Text>
    </View>
  );
}
