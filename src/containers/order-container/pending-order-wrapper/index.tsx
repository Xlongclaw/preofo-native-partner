import { View, Text } from "react-native";
import React from "react";
import OrderId from "./order-id";
import ItemContainer from "./item-container";
import ButtonContainer from "./button-container";

export default function PendingOrderWrapper() {
  return (
    <View className="border-b border-color3/50 py-4">
      <OrderId id="JHFHJFHFVHF7659HF7568JK" />
      <View className="flex-row items-center mt-2">
        <ItemContainer />
        <ButtonContainer />
      </View>
      
    </View>
  );
}
