import { View, Text, ScrollView } from "react-native";
import React from "react";
import OrderNavigator from "./order-navigator";
import PendingOrderWrapper from "./pending-order-wrapper";

export default function OrderContainer() {
  return (
    <View>
      <OrderNavigator />
      <ScrollView className="border border-color3/50 mt-2 p-2 mx-2 rounded-3xl h-[60vh]">
        <PendingOrderWrapper/>
        <PendingOrderWrapper/>
        <PendingOrderWrapper/>    
      </ScrollView>
    </View>
  );
}
