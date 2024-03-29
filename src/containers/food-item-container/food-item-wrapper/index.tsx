import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { DishType, foodItemDataType } from "@types";
import ItemOptions from "./item-options";
import fetchDishById from "utils/fetchDishById";
import FoodItemWrapperSkeleton from "../food-item-wrapper-skeleton";

export default function FoodItemWrapper({
  dishId,
  categoryId,
  restaurantId,
}: {
  dishId: string;
  restaurantId: string;
  categoryId: string;
}) {
  const [foodItem, setFoodItem] = useState<any>();

  React.useEffect(() => {
    fetchDishById(dishId).then((res) => {
      setFoodItem(res.dish);
    });
  }, []);

  if (foodItem)
    return (
      <View className="border relative w-full rounded-[40px] flex-row justify-between items-center border-color3 p-2 my-3">
        <View className="max-w-[50%] pl-4 space-y-1">
          <View className="flex-row gap-2">
            {foodItem.nonVeg ? (
              <Image
                className="w-[20px] h-[20px] ]"
                source={require("@images/nonveg.png")}
              />
            ) : (
              <Image
                className="w-[20px] h-[20px] ]"
                source={require("@images/veg.png")}
              />
            )}
            <View className="flex-row items-center space-x-[2px]">
              {Array.from({ length: foodItem.rating }).map((_, i) => (
                <Image
                  key={`FOOD_ITEM_RATING_STAR_${i}`}
                  className="w-[10px] h-[10px] "
                  source={require("@images/star.png")}
                />
              ))}
              {foodItem.rating % 1 !== 0 && (
                <Image
                  className="w-[10px] h-[10px] "
                  source={require("@images/star-half2.png")}
                />
              )}
            </View>
          </View>
          <Text className="font-bold text-color2/90">{foodItem.name}</Text>
          <Text className="text-[11px] font-semibold text-color2/40">
            {foodItem.description}
          </Text>
          <Text className=" font-bold text-color2/90">₹{foodItem.price}</Text>
        </View>
        <View>
          <Image
            className="w-[40vw] h-[150px] rounded-[35px]"
            src={foodItem.image.url}
          />
          <ItemOptions
            categoryId={categoryId}
            restaurantId={restaurantId}
            dishId={dishId}
          />
        </View>
      </View>
    );
  return <FoodItemWrapperSkeleton />;
}
