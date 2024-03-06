import { View, TextInput, InputModeOptions } from "react-native";
import React, { useState } from "react";
import classnames from "classnames";

export default function BorderInputField({
  placeholder,
  type = "text",
  onChange,
  onFocus,
  onBlur,
  marginX,
  marginY
}: {
  placeholder: string;
  type?: InputModeOptions;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  marginY?: "sm"|"md"|"lg";
  marginX?: "sm"|"md"|"lg";
}) {
  return (
    <View className={classnames("flex-row border border-color3 px-4 rounded-2xl ",{
      "my-2":marginY=='sm',
      "my-4":marginY=='md',
      "my-6":marginY=='lg',
    })}>
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
