import { View, Text } from "react-native";
import React from "react";

/**
 * This component renders the App name and a subtitle.
 * 
 * @returns JSX Elemnent - the heading and subheading of signup Page.
 */
export default function BulletHeading({appName,subtitle}:{appName:string,subtitle:string}) {
  return (
    <View>
      <View className="flex-row items-center space-x-2">
      <Text className="font-black text-4xl text-color2">{appName}</Text>
      <Text className="font-black text-base text-color2">PARTNER</Text>

      </View>
      {/* <Text className="font-extrabold text-xs text-color2/40">
        {subtitle}
      </Text> */}
    </View>
  );
}
