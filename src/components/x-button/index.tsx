import { Text, TouchableOpacity } from "react-native";
import React from "react";
import classnames from "classnames";

export default function XButton({
  title,
  onPress,
  type="transparent",
  width='full',
  marginY='none'
}: {
  title: string;
  onPress: () => void;
  type?: "transparent" | "dark";
  width?: "half" | "full" | "one-third" | 'two-fifth';
  marginY?:'sm'|'md'|'lg'|'none'
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={classnames(
        "justify-center items-center px-4 rounded-3xl ",
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
          "bg-color2 py-4": type === "dark",
          "bg-transparent": type === "transparent",
          /**
           * Margin Y
           */
          "my-2": marginY === "sm",
          "my-4": marginY === "md",
          "my-6": marginY === "lg",
          "my-0": marginY === "none",

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
