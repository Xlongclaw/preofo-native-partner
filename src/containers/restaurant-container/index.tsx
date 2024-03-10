import { View, Text } from "react-native";
import React from "react";
import RestaurantButtonContainer from "@containers/restaurant-button-container";
import FoodItemContainer from "@containers/food-item-container";
import useFetch from "hooks/useFetch";
import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";
import XLoading from "@components/x-loading";
import fetchRestaurantById from "utils/fetchRestaurantById";

export default function RestaurantContainer({
  restaurantId,
}: {
  restaurantId: string;
}) {
  const [isLoading,setIsLoading] = React.useState(true)

  const [restaurant,setRestaurant] = React.useState<any>({})

  React.useEffect(()=>{
    fetchRestaurantById(restaurantId).then((res)=>{
      setRestaurant(res.data)
      setIsLoading(false)
    })
  },[])

  // const { data,error,isLoading} = useFetch({
  //   method:"GET",
  //   type:'normal',
  //   url:`${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.GET_RESTAURANT}?_id=${restaurantId}`
  // })

  if(!isLoading)
  return (
    <View>
      <RestaurantButtonContainer restaurantId={restaurantId} />
      <FoodItemContainer restaurantId={restaurantId} />
    </View>
  );
  return <XLoading/>
}
