import { View, Text, Dimensions } from "react-native";
import React, { useEffect } from "react";
import XStatusBar from "@components/x-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
import useUserData from "hooks/useUserData";
import Logo from "@components/logo";
import OrderContainer from "@containers/order-container";
import XSwitch from "@components/x-switch";
import FoodItemContainer from "@containers/food-item-container";
import RestaurantButtonContainer from "@containers/restaurant-button-container";
import mutateDataIntoSanity from "sanity/sanity-utils/mutateDataIntoSanity";
import XLoading from "@components/x-loading";
import RestaurantContainer from "@containers/restaurant-container";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation, route }: Props) {
  const { userData, isLoading } = useUserData();
  const [selected, setSelected] = React.useState<"ORDERS" | "RESTAURANT">(
    "RESTAURANT"
  );
  useEffect(()=>{
    // mutateDataIntoSanity()
  },[])


  if (!isLoading)
    return (
      <View className="px-4 pt-4 h-[100vh]">
        <XStatusBar />
        <View className="flex-row items-center justify-between px-4">
          <Logo restaurantName={userData.name} />
          <View>
            <XSwitch
              selected={(value) => {
                setSelected(value);
              }}
            />
          </View>
        </View>
        {selected === "ORDERS" ? (
          <OrderContainer />
        ) : (
          <RestaurantContainer restaurantId={userData.restaurantId}/>
        )}
      </View>
    );
  return <XLoading/>;
}
