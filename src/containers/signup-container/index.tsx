import { ActivityIndicator, View } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

import PhoneInput from "@components/phone-input";
import BulletHeading from "@components/bullet-heading";
import XOtpField from "@components/x-otp-field";
import XButton from "@components/x-button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { sendOtp, validateUser } from "@utils";

/**
 * This Components renders Application Heading and an
 * input form to get user Phone Number to register him into the application.
 *
 * @returns a JSX component of sign up form.
 */
export default function SignUpContainer() {
  /**
   * otp - state variable to store the OTP taken as input from the user.
   */
  const [otp, setOtp] = React.useState<string>("");

  /**
   * phoneNumber - state variable to store the Phone Number taken as input from the user.
   *
   * Its value change as the user enters something in the phoneInput Field
   */
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");

  /**
   * ActivityIndicaterVisible - state variable to set activityIndicator visible after
   * the submission of otp.
   *
   * It is set to true just before OTP is sent for validation
   * and set to false again after the validation is completed or rejected.
   */
  const [ActivityIndicatorVisible, setActivityIndicatorVisible] =
    React.useState(false);

  /**
   *
   */
  React.useEffect(() => {
    otp !== "" && ValidateOtp();
  }, [otp]);

  /**
   * A function that checks whether the otp is correct.
   * If user is Authenticated then the function redirects user to the
   * registeration page for user data collection.
   */
  const ValidateOtp = async () => {
    /**
     * displays loading while the OTP Validates.
     */
    setActivityIndicatorVisible(true);
    const validation = await validateUser(phoneNumber, otp);
    if (validation.code == "OTP_EXPIRED")
      Toast.show({
        type: "error",
        text1: "OTP expired. Try again !",
        topOffset: 60,
      });
    else if (validation.code == "SUCCESS") {
      navigation.navigate("Registeration", { userToken: validation.userToken });
    } else
      Toast.show({
        type: "error",
        text1: "Invalid OTP !",
        topOffset: 60,
      });
    setActivityIndicatorVisible(false);
  };

  /**
   * Function that handles any change in OTP Field.
   * @param value - changed value of the OTP
   */
  const onChange = (value: string) => {
    setOtp(value);
  };

  /**
   * Reference of the Otp Input.
   */
  const otpFieldRef = React.useRef<any>(null);

  /**
   * This function decides what happen when the Request Otp Button is pressed
   * invovke a sentOtp function that sends an api request to the server for
   * sending otp to the given Phone Number.
   */
  const handleRequestOtpButtonPress = () => {
    if (phoneNumber.length === 10) {
      sendOtp(phoneNumber);
      Toast.show({
        type: "success",
        text1: "OTP sent Successfully",
        topOffset: 60,
      });
      otpFieldRef.current?.focus();
    } else {
      Toast.show({
        type: "error",
        text1: "Enter a valid Phone Number.",
        topOffset: 60,
      });
    }
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

      <View className="flex-row items-center">
        {/* An OTP field to ake OTP input from the User */}
        <XOtpField
          getOtp={(value) => {
            onChange(value);
          }}
          field0Ref={otpFieldRef}
        />
        {ActivityIndicatorVisible && (
          <ActivityIndicator size={32} className="mx-6" />
        )}
      </View>

      <View className="w-1/2 mt-4">
        {/* Continue Button to submit OTP and register him in the Application */}
        <XButton onPress={ValidateOtp} title="Continue" type="dark" />

        {/* A button that takes user to the signIn page */}
        <XButton
          onPress={() => navigation.navigate("SignIn")}
          title="Existing User ? Login"
          type="transparent"
          marginY="md"
        />
      </View>
    </View>
  );
}
