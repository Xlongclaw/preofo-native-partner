import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

export default function ItemOptions() {
  const [count, setCounter] = useState(0);
  return (
    <View
      className={`border text-xs flex-row items-center justify-center bg-color5 ${
        count !== 0 ? "border-color2" : "border-color3 "
      } rounded-full font-bold`}
    >
      <TouchableOpacity className="px-3 py-1">
      <Image
          className="w-5 h-5 rounded-[35px]"
          source={require('@images/edit2.png')}
          />

      </TouchableOpacity>
          <View className="border-r border-color3 h-4"></View>
          <TouchableOpacity className="px-3 py-2">
      <Image
          className="w-5 h-5 rounded-[35px]"
          source={require('@images/delete.png')}
          />

          </TouchableOpacity>
    </View>
  );
}
