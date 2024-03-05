import { View, TextInput, InputModeOptions } from "react-native";
import React, { useState } from "react";

export default function BorderInputField({
  placeholder,
  type = "text",
  onChange,
  onFocus,
  onBlur
}: {
  placeholder: string;
  type?: InputModeOptions;
  onChange: (value:string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
  return (
    <View className="flex-row border border-color3 px-4  my-0 rounded-2xl">
      <TextInput
        className=" font-semibold flex-1 py-5 "
        placeholder={placeholder}
        inputMode={type}
        onChangeText={(value) => onChange(value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
}
