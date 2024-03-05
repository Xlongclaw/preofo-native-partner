import { View, Text } from 'react-native'
import React from 'react'

export default function AppLoadingScreen() {
  const [userAuthenticated,setUserAuthenticated] = React.useState(false)
  return (
    <View>
      <Text>AppLoadingScreen</Text>
    </View>
  )
}