import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { restaurantDataType } from "@types";
import FoodCategoryList from "./food-category-list";
import FoodItemContainerSkeleton from "./food-item-container-skeleton/FoodItemContainerSkeleton";
import { getRestaurantById } from "sanity/sanity-queries";
import useFetch from "hooks/useFetch";
import RestaurantButtonContainer from "../restaurant-button-container";
import fetchRestaurantById from "utils/fetchRestaurantById";
import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

export default function FoodItemContainer({
  restaurantId,
}: {
  restaurantId: string;
}) {

  const [categories,setCategories] = React.useState<Array<string>>()

  React.useEffect(()=>{
    fetchRestaurantById(restaurantId).then((res)=>{
      setCategories(res.data.foodCategoryIds)
    })
  },[])

  if (categories)
    return (
      <ScrollView showsVerticalScrollIndicator={false} className="h-screen">
        {categories.map((categoryID, i) => (
          <FoodCategoryList
            key={`CATEGORY_${i}`}
            _id={categoryID}
            expanded={!i}
          />
        ))}
      </ScrollView>
    );
  return <FoodItemContainerSkeleton />;
}
