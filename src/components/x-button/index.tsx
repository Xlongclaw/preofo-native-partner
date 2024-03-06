import { Text, TouchableOpacity } from "react-native";
import React from "react";
import classnames from "classnames";

export default function XButton({
  title,
  onPress,
  type="transparent",
  width='full',
}: {
  title: string;
  onPress: () => void;
  type?: "transparent" | "dark";
  width?: "half" | "full" | "one-third" | 'two-fifth';
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={classnames(
        "justify-center items-center px-4 rounded-3xl py-4",
        {
          /**
           * Different button widths
           */
          "w-full": width === "full",
          "w-1/2": width === "half",
          "w-[33.3%]": width === "one-third",
          "w-[40%]": width === "two-fifth",
          /**
           * Different button types
           */
          "bg-color2": type === "dark",
          "bg-transparent": type === "transparent",
        }
      )}
    >
      <Text
        className={classnames(`font-bold `,{
          "text-color2":type === "transparent",
          "text-color1":type ==="dark"
        })}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
