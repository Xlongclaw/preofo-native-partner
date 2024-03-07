import { View, Text } from 'react-native'
import React from 'react'
import OrderItem from './order-item'

export default function ItemContainer() {
  return (
    <View className="bg-color1 rounded-2xl flex-1 overflow-hidden p-3">
    <Text className="bg-color2 text-color1 text-center py-2 text-xs font-bold px-2 rounded-full">
      TOTAL ITEMS: 3
    </Text>
    <View className=" my-2 ">
      <OrderItem itemName='2x Extra large Cheese Burst Pizza' />
      <OrderItem itemName='1x Vanilla Ice cream' />
      <OrderItem itemName='3x coke (400ml)' />
    </View>
  </View>
  )
}