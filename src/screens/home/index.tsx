import { View, Text, Pressable } from "react-native";
import React from "react";
import XStatusBar from "@components/x-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
import useUserData from "hooks/useUserData";
import XButton from "@components/x-button";
import deleteSecureStoreData from "utils/deleteSecureStoreData";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation, route }: Props) {
  const { userData, isLoading } = useUserData();

  if (!isLoading)
    return (
      <View>
        <XStatusBar />
        <Text>{userData.name} Hello</Text>
        <XButton
          onPress={async () => {
            deleteSecureStoreData("userToken");
            navigation.reset({routes:[{name:'AppLoadingScreen'}]});
          }}
          title="Log Out"
          type="dark"
          width="half"
        />
      </View>
    );
  return <Text>LOADING DATA</Text>;
}
