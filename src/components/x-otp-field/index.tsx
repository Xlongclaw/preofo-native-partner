// NEEDS OPTIMISATION
import { View, Text, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";

export default function XOtpField({getOtp}:{getOtp:(value:number)=>void}) {
  const [otp, setOtp] = useState<[string, string, string, string]>([
    "",
    "",
    "",
    "",
  ]);
  const field0Ref = useRef<any>(null);
  const field1Ref = useRef<any>(null);
  const field2Ref = useRef<any>(null);
  const field3Ref = useRef<any>(null);

  

  return (
    <View className="flex-row gap-2">
      <TextInput
        inputMode="numeric"
        maxLength={1}
        onChangeText={(value) => {
          setOtp((x) => {
            return [value, x[1], x[2], x[3]];
          });
          value!=='' && field1Ref.current?.focus();
        }}
        className=" font-semibold border text-center px-5 py-4 justify-center items-center rounded-xl border-color3"
      />
      <TextInput
        inputMode="numeric"
        ref={field1Ref}
        maxLength={1}
        onChangeText={(value) => {
          setOtp((x) => {
            return [x[0], value, x[2], x[3]];
          });
          value!=='' && field2Ref.current?.focus();
        }}
        className=" font-semibold border text-center px-5 py-4 rounded-xl border-color3"
      />
      <TextInput
        inputMode="numeric"
        ref={field2Ref}
        maxLength={1}
        onChangeText={(value) => {
          setOtp((x) => {
            return [x[0], x[1], value, x[3]];
          });
          value!=='' && field3Ref.current?.focus();
        }}
        className=" font-semibold border px-5 py-4 text-center rounded-xl border-color3"
      />
      <TextInput
        inputMode="numeric"
        ref={field3Ref}
        maxLength={1}
        onChangeText={(value) => {
           setOtp((x) => {
            return [x[0], x[1], x[2], value];
          });
          otp[0] && otp[1] && otp[2] &&  value  && getOtp(Number([...otp,value].join('')))
        }}
        className=" font-semibold border px-5 py-4 text-center rounded-xl border-color3"
      />
    </View>
  );
}
