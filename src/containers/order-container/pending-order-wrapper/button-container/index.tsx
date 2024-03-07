import { View, Text } from "react-native";
import React from "react";

export default function ButtonContainer() {
  return (
    <View className="h-full space-y-2 ml-2">
      <View className=" borde bg-color1 py-7 px-3 rounded-3xl">
        <Text className="text-xs font-bold text-green-600">ACCEPT</Text>
      </View>
      <View className=" borde bg-color1 py-7 px-3 rounded-3xl">
        <Text className="text-xs font-bold text-red-600">REJECT</Text>
      </View>
    </View>
  );
}
