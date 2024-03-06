import { View, Text } from "react-native";
import React, { useState } from "react";
import XStatusBar from "@components/x-status-bar";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";
import fetchUserData from "utils/fetchUserData";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;


export default function Home({navigation,route}:Props) {
  const [userData,setUserData] = useState<any>()

  React.useEffect(() => {
    retrieveSecureStoreData("userToken").then((token) => {
      if(token){
        fetchUserData(token!).then((res) => {
          setUserData(res.data)
        })
      }
    });
  }, []);

  React.useEffect(()=>{
    // console.log(userData);  
  },[userData])
if(userData!== undefined)
  return (
    <View>
      <XStatusBar />
      <Text>{userData.name}r</Text>
    </View>
  );
}
