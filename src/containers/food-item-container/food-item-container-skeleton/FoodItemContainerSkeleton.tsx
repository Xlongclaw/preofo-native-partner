import { View, Text } from "react-native";
import React from "react";
import Skeleton from "@components/skeleton";
import FoodItemWrapperSkeleton from "../food-item-wrapper-skeleton";

export default function FoodItemContainerSkeleton() {
  return (
    <View>
      <View className="flex-row justify-between my-4 mx-6">
        <Skeleton height={30} width={40} rounded={20} />
        <Skeleton height={30} width={10} rounded={20} />
      </View>
      <FoodItemWrapperSkeleton />
      <FoodItemWrapperSkeleton />
      <FoodItemWrapperSkeleton />
    </View>
  );
}
