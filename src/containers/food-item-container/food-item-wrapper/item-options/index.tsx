import { View } from "react-native";
import React from "react";
import AvailableRadioButton from "./available-radio-btn";
import EditButton from "./edit-button";
import DeleteButton from "./delete-button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@types";
import deleteDish from "utils/deleteDish";

export default function ItemOptions({
  dishId,
  categoryId,
  restaurantId,
}: {
  dishId: string;
  restaurantId: string;
  categoryId: string;
}) {
  const { navigate,reset, }: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View
      className={` text-xs flex-row items-center justify-center mt-1 font-bold`}
    >
      <AvailableRadioButton initial={true} onPress={(value) => {}} />
      <EditButton onPress={() => navigate("EditDishScreen",{dishId})} />
      <DeleteButton
        onPress={() => {
          deleteDish({ categoryId, dishId, restaurantId });
          reset({routes:[{name:"Home"}]})
        }}
      />
    </View>
  );
}
