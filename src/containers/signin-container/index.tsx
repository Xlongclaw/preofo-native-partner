import { View } from "react-native";
import React from "react";
import BulletHeading from "@components/bullet-heading";
import PhoneInput from "@components/phone-input";
import XButton from "@components/x-button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import BorderInputField from "@components/border-input-field";

/**
 * This Components renders Application Heading and an
 * input form to get user Details and sign him/her into the application.
 *
 * @returns a jsx element of sign in form.
 */
export default function SignInContainer() {
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

      {/* Basically an input Field to get phone number from the user */}
      <PhoneInput
        onChange={(value) => {
          console.log(value)
        }}
        type="without-otp-button"
      />

      {/* Input Field to take password as input from the user */}
      <BorderInputField
        onChange={(value) => {
          console.log(value);
        }}
        type="text"
        placeholder="Password"
      />

      <View className="w-1/2 mt-4">
        {/* Continue Button to submit user phone number and password to sign him in. */}
        <XButton onPress={() => {}} title="Continue" type="dark" />

        {/* A button that takes user to the signUp page */}
        <XButton
          onPress={() => navigation.navigate("SignUp")}
          title="New User ? SignUp"
          type="transparent"
        />
      </View>
    </View>
  );
}
