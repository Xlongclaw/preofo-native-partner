import { View, Text } from 'react-native'
import React from 'react'

export default function OrderId({id}:{id:string}) {
  return (
    <View className='flex-row space-x-1 bg-color1 py-3 rounded-full justify-center'>
        <Text className="text-xs font-bold text-color2 text-center">
          ORDER ID: 
        </Text>
        <Text className='text-xs font-bold text-color2/70'>{id}</Text>
      </View>
  )
}