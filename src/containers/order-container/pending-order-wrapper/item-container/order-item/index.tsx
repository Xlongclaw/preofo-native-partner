import { View, Text } from "react-native";
import React from "react";

export default function OrderItem({itemName}:{itemName:string}) {
  return (
    <View className="flex-row space-x-2 items-center bordr-b border-color3/40 py-0">
      <Text className="font-bold text-base">⦿</Text>
      <Text className="font-bold text-color2/70">
        {itemName}
      </Text>
    </View>
  );
}
