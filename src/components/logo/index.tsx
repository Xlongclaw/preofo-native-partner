import { View, Text } from "react-native";
import React from "react";

/**
 * Prop Type of this React Component.
 */
type PropType = {};

/**
 * This component Renders a Logo that displays the Restaurant Name followed by
 * the app name in the next line.
 *
 * @returns a JSX.Element that displays the Logo in the Home Screen.
 */
export default function Logo({}: PropType) {
  return (
    <View>
      <Text className="font-black text-lg text-color2">Cafe Rogue</Text>
      <Text className="text-[9px] font-black text-color2/50 tracking-[1px] -mt-[1px]">
        PREOFO
      </Text>
    </View>
  );
}
