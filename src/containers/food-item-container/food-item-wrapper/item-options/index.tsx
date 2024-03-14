import { View } from "react-native";
import React from "react";
import AvailableRadioButton from "./available-radio-btn";
import EditButton from "./edit-button";
import DeleteButton from "./delete-button";

export default function ItemOptions() {
  return (
    <View
      className={` text-xs flex-row items-center justify-center mt-1 font-bold`}
    >
      <AvailableRadioButton />
      <EditButton />
      <DeleteButton />
    </View>
  );
}
