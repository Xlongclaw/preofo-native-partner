import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@types";
import XStatusBar from "@components/x-status-bar";
import BorderInputField from "@components/border-input-field";
import XButton from "@components/x-button";
import XImagePicker from "@components/x-image-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import generateCloudinaryImageUrl from "utils/generateCloudinaryImageUrl";
import addDish from "utils/addDish";
import { showToast } from "@utils";
type Props = NativeStackScreenProps<RootStackParamList, "AddDishScreen">;

export default function AddDishScreen({ navigation, route }: Props) {
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [prepTime, setPrepTime] = React.useState<number>(20);
  const [price, setPrice] = React.useState<number>(0);
  const [nonVeg, setNonVeg] = React.useState<boolean>(false);
  const [images, setImages] = React.useState<Array<string>>([]);


  
  const handleSubmit = async () => {
    const dishImage = await generateCloudinaryImageUrl(images[0]);
    const res = await addDish({
      categoryId: route.params.categoryId,
      restaurantId: route.params.restaurantId,
      dish: {
        description,
        image: dishImage,
        name,
        nonVeg,
        prepTime,
        price,
      },
    });
    if(res.code === "SUCCESS") navigation.navigate('Home')
    else showToast('error',"Something went wrong")
  };

  return (
    <View className="px-6 justify-center h-screen">
      <XStatusBar />
      <Text className="text-3xl my-2 font-bold px-2">Add new dish</Text>
      <Text className="text-lg text-color2/60 mb-6 font-semibold px-2">
        So, What new dish are you adding to you menu.
      </Text>
      <ScrollView>
        <BorderInputField
          marginY="sm"
          onChange={(value) => {
            setName(value);
          }}
          placeholder="Name of the Dish"
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {
            setDescription(value);
          }}
          placeholder="Description"
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {
            setPrepTime(Number(value));
          }}
          type="numeric"
          placeholder="Preparation time"
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {
            setPrice(Number(value));
          }}
          type="numeric"
          placeholder="Price"
        />

        <BouncyCheckbox
          text="Is the dish Non Veg"
          onPress={(isChecked) => {
            setNonVeg(isChecked);
          }}
        />

        <XImagePicker
          title="Add Dish Image"
          getImage={(images) => {
            setImages(images);
          }}
        />
        <XButton
          onPress={handleSubmit}
          title="ADD"
          type="dark"
          width="half"
          marginY="md"
        />
      </ScrollView>
    </View>
  );
}
