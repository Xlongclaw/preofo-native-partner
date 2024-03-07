import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function RestaurantButtonContainer() {
  return (
    <View className="pt-3 pb-3 mt-2 flex-row border-b border-color3/40">
      <TouchableOpacity className="bg-color3/60 py-3 px-5 rounded-full">
        <Text className="text-xs font-bold">+ Add Category</Text>
      </TouchableOpacity>
    </View>
  );
}
