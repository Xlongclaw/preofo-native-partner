import { View, TextInput, InputModeOptions } from "react-native";
import React from "react";

export default function BorderInputField({
  placeholder,
  type = "text",
  onChange
}: {
  placeholder: string;
  type?: InputModeOptions;
  onChange: (value:string) => void;
}) {
  return (
    <View className="flex-row border border-color3 px-4 py-5 my-0 rounded-2xl">
      <TextInput
        className=" font-semibold flex-1 border-r border-color3"
        placeholder={placeholder}
        inputMode={type}
        onChangeText={(value) => onChange(value)}
      />
    </View>
  );
}
