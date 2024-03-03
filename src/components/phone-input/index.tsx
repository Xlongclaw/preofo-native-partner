import { TextInput, View } from "react-native";
import React from "react";
import XButton from "@components/x-button";

export default function PhoneInput({
  type,
  onChange,
  onRequestOtpButtonPress
}: {
  type: "with-otp-button" | "without-otp-button";
  onChange: (value: string) => void;
  onRequestOtpButtonPress?:()=>void
}) {
  return (
    <View className="flex-row border border-color3 px-4 py-5 my-4 rounded-2xl">
      <TextInput
        className=" font-semibold flex-1 border-r border-color3"
        placeholder="Enter Your Phone Number"
        inputMode="numeric"
        onChangeText={(value)=>onChange(value)}
      />
      {type == "with-otp-button" && (
        <XButton type="transparent" title="Request OTP" onPress={() => onRequestOtpButtonPress!()} />
      )}
    </View>
  );
}
