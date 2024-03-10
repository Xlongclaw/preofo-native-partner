import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import XButton from "@components/x-button";
import deleteSecureStoreData from "utils/deleteSecureStoreData";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@types";

export default function RestaurantButtonContainer({restaurantId}:{restaurantId:string}) {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View className="pt-3 pb-3 mt-2 mx-4 flex-row border-b border-color3/40 justify-between">
      <TouchableOpacity onPress={()=>navigation.navigate('AddCategoryScreen',{restaurantId:restaurantId})} className="bg-color3/60 py-3 px-5 rounded-full items-center justify-center">
        <Text className="text-xs font-bold">+ Add Category</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          deleteSecureStoreData("userToken");
          navigation.reset({ routes: [{ name: "AppLoadingScreen" }] });
        }}
        className="bg-color1 py-3 px-5 rounded-full items-center justify-center"
      >
        <Image className="w-5 h-5" source={require("@images/power-red.png")} />
      </TouchableOpacity>

      {/* <XButton
          onPress={async () => {
            deleteSecureStoreData("userToken");
            navigation.reset({routes:[{name:'AppLoadingScreen'}]});
          }}
          title="Log Out"
          type="dark"
          width="one-third"
          textSize="xs"
        /> */}
    </View>
  );
}
