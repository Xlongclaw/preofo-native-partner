import { View, Text, ScrollView, Image, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import FoodItemWrapper from "../food-item-wrapper";
import { DishType, RootStackParamList } from "@types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import fetchCategoryById from "utils/fetchCategoryById";


export default function FoodCategoryList({expanded,categoryData,restaurantId}:{expanded:boolean,categoryData:any,restaurantId:string}) {
  const [expand,setExpand] = useState<boolean>(expanded)


  // const [categoryData,setCategoryData] = React.useState<any>()

  // React.useEffect(()=>{
  // fetchCategoryById(_id).then((res)=>{
  //   setCategoryData(res.foodCategory)
  // })
  // },[])
  



  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View className="flex-col ml-2 border-b border-color3/40 pb-2">
      <View className="flex-row justify-between mx-4 items-center">
        <Text className="font-bold text-base mb-2 mt-6">{categoryData.name}</Text>
        <View className="flex-row items-center">
        <TouchableHighlight
        underlayColor={"#dfdfdf"}
        onPress={() => navigation.navigate("AddDishScreen",{categoryId:categoryData._id,restaurantId})}
        className="p-4 mt-2 rounded-full"
      >
        <Image
              className="w-8 h-8"
              source={require("@images/add.png")}
            />
      </TouchableHighlight>
        <TouchableHighlight
        underlayColor={"#dfdfdf"}
        onPress={() => setExpand(!expand)}
        className="p-4 mt-2 rounded-full"
      >
        <Image
              className="w-[15px] h-[15px]"
              source={require("@images/caretdown.png")}
            />
      </TouchableHighlight>

        </View>
      </View>
      {expand && categoryData.dishIds.map((dishId:string, i:number) => (
        <FoodItemWrapper dishId={dishId} key={`FOOD_ITEM_${i}`} />
      ))}
    </View>
  );
}
