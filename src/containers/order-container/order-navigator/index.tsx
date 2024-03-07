import { View, Text } from "react-native";
import React from "react";
import XButton from "@components/x-button";

export default function OrderNavigator() {
  const [activeTab, setActiveTab] = React.useState<
    "PENDING" | "RUNNING" | "COMPLETED"
  >("PENDING");
  return (
    <View className="mt-4 p-2 rounded-full">
      <View className=" bg-color3/30 rounded-full w-full flex-row overflow-hidden">
        <XButton
          onPress={() => {
            setActiveTab("PENDING");
          }}
          title="PENDING"
          width="one-third"
          type={activeTab === "PENDING" ? "dark" : "transparent"}
          textSize="xs"
          rounded="none"
        />
        <XButton
          onPress={() => {
            setActiveTab("RUNNING");
          }}
          title="RUNNING"
          width="one-third"
          type={activeTab === "RUNNING" ? "dark" : "transparent"}
          textSize="xs"
          rounded="none"
        />
        <XButton
          onPress={() => {
            setActiveTab("COMPLETED");
          }}
          title="COMPLETED"
          width="one-third"
          type={activeTab === "COMPLETED" ? "dark" : "transparent"}
          textSize="xs"
          rounded="none"
        />
      </View>
    </View>
  );
}
