import { ScrollView, Text, View } from "react-native";
import React from "react";
import { restaurantDataType } from "@types";
import FoodCategoryList from "./food-category-list";
import FoodItemContainerSkeleton from "./food-item-container-skeleton/FoodItemContainerSkeleton";
import { getRestaurantById } from "sanity/sanity-queries";
import useFetch from "hooks/useFetch";
import RestaurantButtonContainer from "../restaurant-button-container";




export default function FoodItemContainer() {
  /**
    * Fetching Restaurant Data through Sanity.
    */
  const { data, isLoading }: { data: restaurantDataType; isLoading: boolean } =
  useFetch({
    method: "POST",
    type: "sanity",
    url: getRestaurantById("1423a317-7449-4b4b-9c90-46c1e00fd346"),
  });

  if(!isLoading)
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="h-screen">
      {data.foodCategories.map((categoryData, i) => (
        <FoodCategoryList
          key={`CATEGORY_${i}`}
          dishes={categoryData.dishes}
          expanded={!i}
          category={categoryData.category}
        />
      ))}
    </ScrollView>
  );
  return <FoodItemContainerSkeleton/>
}
