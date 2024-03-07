import { View, Text } from 'react-native'
import React from 'react'

export default function XSwitch() {
  return (
    <View>
      <View className='bg-green-400 flex-row rounded-full overflow-hidden items-center p-2'>
        <View className='bg-color2 w-4 h-4 rounded-full'></View>
        <Text className='text-color1 text-xs px-2 font-bold'>ORDERS</Text>
      </View>
    </View>
  )
}