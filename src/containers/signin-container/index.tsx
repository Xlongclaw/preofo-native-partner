import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import BulletHeading from "@components/bullet-heading";
import PhoneInput from "@components/phone-input";
import XButton from "@components/x-button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import BorderInputField from "@components/border-input-field";
import useUserData from "hooks/useUserData";
import { RootStackParamList } from "@types";
import storeData from "utils/storeData";
import Toast from "react-native-toast-message";

/**
 * This Components renders Application Heading and an
 * input form to get user Details and sign him/her into the application.
 *
 * @returns a jsx element of sign in form.
 */
export default function SignInContainer() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /**
   * ActivityIndicaterVisible - state variable to set activityIndicator visible after
   * the submission of Credentials.
   *
   * It is set to true just before Credentials are sent for validation
   * and set to false again after the validation is completed or rejected.
   */
  const [ActivityIndicatorVisible, setActivityIndicatorVisible] =
    React.useState(false);

  /**
   * useNavigation - hook that give access to navigation object and let you navigate
   * in the through the navigation stack.
   */
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleCredentials = () => {
    setActivityIndicatorVisible(true);
    if (phoneNumber.length === 10) {
      fetch(
        `${process.env.SERVER_ADDRESS}getUserFromCredentials?phoneNumber=${phoneNumber}&password=${password}`
      )
        .then((res) => res.json())
        .then(async (data) => {
          if (data.code === "SUCCESS") {
            await storeData("userToken", data.userToken);
            navigation.reset({ routes: [{ name: "AppLoadingScreen" }] });
          } else if (data.code === "PASSWORD_DOES_NOT_MATCH") {
            Toast.show({
              type: "error",
              text1: "Incorrect Password!",
              topOffset: 60,
            });
          } else if (data.code === "USER_DOES_NOT_EXIST") {
            Toast.show({
              type: "error",
              text1: "User does not exists!",
              topOffset: 60,
            });
          } else {
            Toast.show({
              type: "error",
              text1: "Something Went Wrong.",
              topOffset: 60,
            });
          }
        });
    } else {
      Toast.show({
        type: "error",
        text1: "Enter a valid Phone Number.",
        topOffset: 60,
      });
    }
    setActivityIndicatorVisible(false);
  };

  return (
    <View className="px-4 h-screen flex-col mt-32">
      <BulletHeading
        subtitle="The incredible service that we provide."
        appName="Preofo"
      />

      {/* Basically an input Field to get phone number from the user */}
      <PhoneInput
        onChange={(value) => {
          setPhoneNumber(value);
        }}
        type="without-otp-button"
      />

      {/* Input Field to take password as input from the user */}
      <BorderInputField
        onChange={(value) => {
          setPassword(value);
        }}
        type="text"
        placeholder="Password"
      />

      <View className="flex-row">
        {/* Continue Button to submit user phone number and password to sign him in. */}
        <XButton
          onPress={handleCredentials}
          title="Continue"
          type="dark"
          width="half"
          marginY="md"
        />
        {ActivityIndicatorVisible && (
          <ActivityIndicator className="ml-6" color={"#000"} size={32} />
        )}
      </View>

      {/* A button that takes user to the signUp page */}
      <XButton
        onPress={() => navigation.navigate("SignUp")}
        title="New User ? SignUp"
        type="transparent"
        width="half"
      />
    </View>
  );
}
