import { TouchableOpacity, Image } from "react-native";
import React from "react";

export default function DeleteButton() {
  return (
    <TouchableOpacity className="px-2 py-2  mx-1 border rounded-full border-color3/50">
      <Image
        className="w-4 h-4 rounded-[35px]"
        source={require("@images/delete.png")}
      />
    </TouchableOpacity>
  );
}
