import { View } from "react-native";
import React, { useState } from "react";
import PhoneInput from "../../components/phone-input";
import BulletHeading from "../../components/bullet-heading";
import XOtpField from "@components/x-otp-field";
import XButton from "@components/x-button";
import { NavigationProp, useNavigation } from "@react-navigation/native";

/**
 * This Components renders Application Heading and an
 * input form to get user Phone Number to register him into the application.
 *
 * @returns a jsx element of sign up form.
 */
export default function SignUpContainer() {
  /**
   * otp - state variable to store the OTP taken as input from the user.
   */
  const [otp, setOtp] = useState<number>();

  /**
   * Function that handles any change in OTP Field.
   * @param value - changed value of the OTP
   */
  const onChange = (value: number) => {
    setOtp(value);
  };

  const [phoneNumber, setPhoneNumber] = useState<string>();

  const handleRequestOtpButtonPress = async () => {
    await fetch(
      `${process.env.SERVER_ADDRESS}sendOtp?phoneNumber=${phoneNumber}&serverKey=${process.env.SERVER_KEY}`,
      {
        method: "GET",
      }
    ).catch((err) => {
      console.log(err);
    });
  };

  const validateUser = async () => {
    await fetch(
      `${process.env.SERVER_ADDRESS}validateOtp?phoneNumber=${phoneNumber}&otp=${otp}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  /**
   * useNavigation - hook that give access to navigation object and let you navigate
   * in the through the navigation stack.
   */
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <View className="px-4 h-screen flex-col mt-32">
      <BulletHeading
        subtitle="The incredible service that we provide."
        appName="Preofo"
      />

      {/* Basically an input Field to get phone number from the user with a request OTP button */}
      <PhoneInput
        onChange={(value) => {
          setPhoneNumber(value);
        }}
        onRequestOtpButtonPress={handleRequestOtpButtonPress}
        type="with-otp-button"
      />

      {/* An OTP field to ake OTP input from the User */}
      <XOtpField
        getOtp={(value) => {
          onChange(value);
          console.log(value);
        }}
      />

      <View className="w-1/2 mt-4">
        {/* Continue Button to submit OTP and register him in the Application */}
        <XButton onPress={validateUser} title="Continue" type="dark" />

        {/* A button that takes user to the signIn page */}
        <XButton
          onPress={() => navigation.navigate("SignIn")}
          title="Existing User ? Login"
          type="transparent"
        />
      </View>
    </View>
  );
}
