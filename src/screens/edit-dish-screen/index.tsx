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
import editDish from "utils/editDish";
import fetchDishById from "utils/fetchDishById";
type Props = NativeStackScreenProps<RootStackParamList, "EditDishScreen">;

export default function AddDishScreen({ navigation, route }: Props) {
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [prepTime, setPrepTime] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [nonVeg, setNonVeg] = React.useState<boolean>(false);
  const [images, setImages] = React.useState<Array<string>>([]);
  const [dishhImage, setDishhImage] = React.useState<{
    url: string;
    signature: string;
    publicId: string;
  }>();

  React.useEffect(() => {
    fetchDishById(route.params.dishId).then((res) => {
      setName(res.dish.name);
      setDescription(res.dish.description),
        setPrepTime(res.dish.prepTime),
        setPrice(res.dish.price),
        setDishhImage(res.dish.image);
        setImages([res.dish.image.url])
      setNonVeg(res.dish.nonVeg);
    });
  }, []);

  const handleSubmit = async () => {
    if(!images[0].startsWith("http")){
      const dishImage = await generateCloudinaryImageUrl(images[0]);
      const res = await editDish({
        dishId: route.params.dishId,
        dish: {
          description,
          image: dishImage,
          name,
          nonVeg,
          prepTime,
          price,
        },
      });
      if (res.code === "SUCCESS")
        navigation.reset({ routes: [{ name: "Home" }] });
      else showToast("error", "Something went wrong");
    }
    else{
      const res = await editDish({
        dishId: route.params.dishId,
        dish: {
          description,
          image: dishhImage!,
          name,
          nonVeg,
          prepTime,
          price,
        },
      });
      if (res.code === "SUCCESS")
        navigation.reset({ routes: [{ name: "Home" }] });
      else showToast("error", "Something went wrong");
    }
  };

  return (
    <View className="px-6 justify-center h-screen">
      <XStatusBar />
      <Text className="text-3xl my-2 font-bold px-2">Edit Dish.</Text>
      <Text className="text-lg text-color2/60 mb-6 font-semibold px-2">
        So, What sre you going to change in your dish.
      </Text>
      <ScrollView>
        <BorderInputField
          value={name}
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
          value={description}
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {
            setPrepTime(Number(value));
          }}
          type="numeric"
          placeholder="Preparation time"
          value={String(prepTime)}
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {
            setPrice(Number(value));
          }}
          type="numeric"
          placeholder="Price"
          value={String(price)}
        />
        {nonVeg && (
          <BouncyCheckbox
            text="Is the dish Non Veg"
            onPress={(isChecked) => {
              setNonVeg(isChecked);
            }}
            isChecked={nonVeg}
          />
        )}
        {dishhImage && (
          <XImagePicker
            title="Add Dish Image"
            getImage={(images) => {
              setImages(images);
            }}
            initialImages={[dishhImage?.url!]}
            maximum={1}
          />
        )}
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
