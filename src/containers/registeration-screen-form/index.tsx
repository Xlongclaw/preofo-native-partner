import { ScrollView, View } from "react-native";
import React from "react";
import BorderInputField from "@components/border-input-field";
import XButton from "@components/x-button";
import Toast from "react-native-toast-message";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import storeData from "utils/storeData";
import submitUserData from "utils/submitUserData";
import XImagePicker from "@components/x-image-picker";
import XTagSelector from "@components/x-tags-selector";
import RESTAURANT_TAGS from "constants/RESTAURANT_TAGS";
import FOOD_TAGS from "constants/FOOD_TAGS";
import {
  AdvancedImage,
  UploadApiOptions,
  upload,
} from "cloudinary-react-native";
import { Cloudinary } from "@cloudinary/url-gen";
import generateCloudinaryImageUrl from "utils/generateCloudinaryImageUrl";
import XLoading from "@components/x-loading";

/**
 * This component provide a form with three input fields name, password
 * and confirm password and a continue button to submit the form.
 *
 * @returns a JSX ELement Component that renders a form collecting user
 * data after successful OTP Validation.
 */
export default function RegisterationScreenForm({
  userToken,
  isDataLoading
}: {
  userToken: string;
  isDataLoading:(loading:boolean)=>void
}) {
  /**
   * State Variables the store the name, password and
   * confirm password from the user input.
   */
  const [name, setName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const [imageArray, setImagesArray] = React.useState<Array<string>>([]);

  const [restaurantName, setRestaurantName] = React.useState<string>("");
  const [restaurantAddress, setRestaurantAddress] = React.useState<string>("");
  const [restaurantDescription, setRestaurantDescription] =
    React.useState<string>("");
  const [minPrepTime, setMinPrepTime] = React.useState<number>(30);
  const [maxPrepTime, setMaxPrepTime] = React.useState<number>(60);
  const [foodTags, setFoodTags] = React.useState<Array<string>>([]);
  const [restaurantTags, setRestaurantTags] = React.useState<Array<string>>([]);


  /**
   * useNavigation - hook that give access to navigation object and let you navigate
   * in the through the navigation stack.
   */
  const navigation: NavigationProp<any> = useNavigation();
  // console.log(userToken);
  
  const handleFormData = async () => {
    isDataLoading(true)

     const restaurantImages =await Promise.all(imageArray.map( (imageURI) => {
       return generateCloudinaryImageUrl(imageURI)
    }))
    
    
    /**
     * Different codes:
     *
     * SUCCESS - userToken was valid and data submitted suvccessfully without any error.
     * PASSWORD_DOES_NOT_MATCH - password and confirmPassword Does not match.
     * INVALID_TOKEN - userToken is invalid.
     */
    type CodeType = {
      code: "SUCCESS" | "PASSWORD_DOES_NOT_MATCH" | "INVALID_TOKEN";
    };
    const { code }: CodeType = await submitUserData({
      name,
      confirmPassword,
      password,
      userToken,
      restaurantData: {
        address: restaurantAddress,
        description: restaurantDescription,
        foodTags: foodTags,
        images: restaurantImages,
        maxPrepTime: maxPrepTime,
        minPrepTime: minPrepTime,
        name: restaurantName,
        restaurantTags,
      },
    }).catch((err) => console.log(err));

    switch (code) {
      case "SUCCESS": {
        /**
         * Stored the user token in the storage through expo secure store.
         */
        await storeData("userToken", userToken);

        /**
         * Navigating to Home Screen after the user is succesfully registered.
         */
        navigation.navigate("Home");
        break;
      }
      case "PASSWORD_DOES_NOT_MATCH": {
        /**
         * Displaying message that password does not exist.
         */
        Toast.show({
          type: "error",
          text1: "Password dosen't match!",
          topOffset: 60,
        });
        break;
      }
      case "INVALID_TOKEN": {
        /**
         * Displaying message that the token is not valid
         * and redirecting user to SignUp Screen.
         */
        Toast.show({
          type: "error",
          text1: "INVALID userToken! Try again",
          topOffset: 60,
        });
        navigation.navigate("SignUp");
        break;
      }
    }
    isDataLoading(false)
  };
  return (
    <ScrollView className="flex-co space-y-2">
      {/* Name Input Field */}
      <BorderInputField
        placeholder={`What's your name ?`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setName(value);
        }}
      />

      {/* Password Input Field */}
      <BorderInputField
        placeholder={`Password`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setPassword(value);
        }}
      />

      {/* Confirm Password Field */}
      <BorderInputField
        placeholder={`Confirm Password`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setConfirmPassword(value);
        }}
      />

      <BorderInputField
        placeholder={`Restaurant Name`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setRestaurantName(value);
        }}
      />

      <BorderInputField
        placeholder={`Restaurant Address`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setRestaurantAddress(value);
        }}
      />

      <BorderInputField
        placeholder={`Restaurant Description`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setRestaurantDescription(value);
        }}
      />
      <BorderInputField
        placeholder={`Minimum Preparation time (in munutes)`}
        type="numeric"
        marginY="sm"
        onChange={(value) => {
          setMinPrepTime(Number(value));
        }}
      />
      <BorderInputField
        placeholder={`Maximum Preparation time (in minutes)`}
        type="numeric"
        marginY="sm"
        onChange={(value) => {
          setMaxPrepTime(Number(value));
        }}
      />
      <XTagSelector
        title="Restaurant Tags"
        getTags={(tags) => setRestaurantTags(tags)}
        tags={RESTAURANT_TAGS}
      />
      <XTagSelector
        title="Food Tags"
        getTags={(tags) => setFoodTags(tags)}
        tags={FOOD_TAGS}
      />
      <XImagePicker getImage={(images) => setImagesArray(images)} />

      {/* Dark Continue Button to submit all above fields Data */}
      <XButton
        title="Continue"
        width="half"
        type="dark"
        onPress={handleFormData}
      />
    </ScrollView>
  );
}
