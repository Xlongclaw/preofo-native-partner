import { View, Text, ScrollView } from "react-native";
import React from "react";
import OrderNavigator from "./order-navigator";
import PendingOrderWrapper from "./pending-order-wrapper";

export default function OrderContainer() {
  return (
    <View className="h-full overflow-hidden">
      <OrderNavigator />
      <ScrollView showsVerticalScrollIndicator={false} className="border border-color3/50 mt-2 p-2 mx-2 flex- overflow-hidden">
        <PendingOrderWrapper/>
        <PendingOrderWrapper/>
        <PendingOrderWrapper/>    
      </ScrollView>
    </View>
  );
}
