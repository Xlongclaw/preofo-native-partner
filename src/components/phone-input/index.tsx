import { Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import XButton from "@components/x-button";
import Timer from "@components/timer/Timer";

export default function PhoneInput({
  type,
  onChange,
  onRequestOtpButtonPress,
}: {
  type: "with-otp-button" | "without-otp-button";
  onChange: (value: string) => void;
  onRequestOtpButtonPress?: () => void;
}) {
  const [timerVisible, setTimerVisibile] = useState(false);

  return (
    <View className="flex-row border border-color3 px-4 py-5 my-4 rounded-2xl">
      <TextInput
        className=" font-semibold text-sm flex-1 border-r border-color3"
        placeholder="Enter Your Phone Number"
        inputMode="numeric"
        onChangeText={(value) => onChange(value)}
      />
      {!timerVisible && type == "with-otp-button" && (
        <XButton
          type="transparent"
          title="Request OTP"
          onPress={() => {
            onRequestOtpButtonPress!();
            setTimerVisibile(true)
            setTimeout(()=>{setTimerVisibile(false)},30000)
          }}
          width="two-fifth"
        />
      )}
      {type!=='without-otp-button' && timerVisible && <Text className="font-bold py-4 ml-3">Wait <Timer seconds={30}/> seconds</Text>}
    </View>
  );
}
