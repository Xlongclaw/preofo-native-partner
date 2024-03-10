import { View, Text, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@types";
import XStatusBar from "@components/x-status-bar";
import BorderInputField from "@components/border-input-field";
import XButton from "@components/x-button";
import XImagePicker from "@components/x-image-picker";
type Props = NativeStackScreenProps<RootStackParamList, "AddDishScreen">;

export default function AddDishScreen({ navigation, route }: Props) {
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
          onChange={(value) => {}}
          placeholder="Name of the Dish"
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {}}
          placeholder="Description"
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {}}
          type="numeric"
          placeholder="Preparation time"
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {}}
          type="numeric"
          placeholder="Price"
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {}}
          type="numeric"
          placeholder="nonVeg"
        />
        <BorderInputField
          marginY="sm"
          onChange={(value) => {}}
          type="numeric"
          placeholder="Available"
        />
        <XImagePicker title="Add Dish Image" getImage={() => {}} />
        <XButton
          onPress={() => {}}
          title="ADD"
          type="dark"
          width="half"
          marginY="md"
        />
      </ScrollView>
    </View>
  );
}
