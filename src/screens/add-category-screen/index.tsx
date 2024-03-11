import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BorderInputField from '@components/border-input-field'
import XStatusBar from '@components/x-status-bar'
import XButton from '@components/x-button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@types'
import addCategory from 'utils/addCategory'
import { showToast } from '@utils'

type Props = NativeStackScreenProps<RootStackParamList, "AddCategoryScreen">;

export default function AddCategoryScreen({navigation,route}:Props) {
  const [categoryName,setCategoryName] = useState<string>("")

  const handleSubmit = async ()=>{
    const res = await addCategory({categoryName,restaurantId:route.params.restaurantId})
    if(res.code==="SUCCESS") navigation.reset({routes:[{ name: "Home" }]})
    else showToast("error","Something went wrong")
  }
  return (
    <View className='px-6 justify-center h-screen'>
      <XStatusBar/>
      <Text className='text-3xl my-2 font-bold px-2'>Add new category</Text>
      <Text className='text-lg text-color2/60 mb-6 font-semibold px-2'>So, What do you think the category name would be.</Text>
      <BorderInputField onChange={(value)=>{setCategoryName(value)}} placeholder='Category Name'/>
      <XButton onPress={handleSubmit} title='ADD' type='dark' width='half' marginY='md'/>
    </View>
  )
}