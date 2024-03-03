import { Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

export default function XButton({
  title,
  onPress,
  type,
}: {
  title: string;
  onPress: () => void;
  type: "transparent" | "dark";
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` ${ type == "dark" && "bg-color2" }
       justify-center items-center px-4 rounded-3xl py-4`}
    >
      <Text className={`${type == 'transparent' ? 'text-color2':'text-color1'} font-bold `}>{title}</Text>
    </TouchableOpacity>
  );
}
