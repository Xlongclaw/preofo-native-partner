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
  categories,
}: {
  restaurantId: string;
  categories: Array<{ name: string; _id: string }>;
}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="h-screen">
      {categories.map((category, i) => (
        <FoodCategoryList
        restaurantId={restaurantId}
          categoryData={category}
          key={`CATEGORY_${i}`}
          expanded={!i}
        />
      ))}
    </ScrollView>
  );
}
