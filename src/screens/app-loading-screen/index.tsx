import { View, Text } from "react-native";
import React from "react";
import XStatusBar from "@components/x-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";
import fetchUserData from "utils/fetchUserData";
type Props = NativeStackScreenProps<RootStackParamList, "AppLoadingScreen">;

export default function AppLoadingScreen({ navigation, route }: Props) {
  const [userAuthenticated, setUserAuthenticated] = React.useState(false);

  React.useEffect(() => {
    retrieveSecureStoreData("userToken").then((token) => {
      if (token) {
        fetchUserData(token).then((res) => {
          if (res.code == "SUCCESS")
            navigation.navigate("Home");
          else navigation.navigate("SignUp");
        });
      } else {
        navigation.navigate("SignUp");
      }
      // CHeck for authentication
    });
  }, []);

  return (
    <View>
      <XStatusBar />
      <Text>AppLoadingScreen</Text>
    </View>
  );
}
