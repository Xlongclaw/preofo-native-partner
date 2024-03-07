import { View } from "react-native";
import React from "react";

/**
 * Prop Type of this React Component.
 */
type PropType = {
  width: number;
  height: number;
  rounded: number;
  mx?: number;
  my?: number;
};

/**
 * This Component renders a grey Container that can be used as Skeleton
 * or to generate a Sleleton.
 *
 * @returns a JSX Element that displays a grey Coloured Skeleton
 */
export default function Skeleton({ width, height, rounded, mx, my }: PropType) {
  return (
    <View
      style={{
        width: `${width}%`,
        height,
        borderRadius: rounded,
        backgroundColor: "#e6e6e6",
        marginVertical: my,
        marginHorizontal: mx,
      }}
    />
  );
}
