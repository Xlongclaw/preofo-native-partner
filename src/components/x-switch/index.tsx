import { Animated, TouchableOpacity, Easing } from "react-native";
import React from "react";

export default function XSwitch({selected}:{selected:(selected:"ORDERS" | "RESTAURANT")=>void}) {
  const [switchPosition, setSwitchPosition] = React.useState<"ORDERS" | "RESTAURANT">(
    "RESTAURANT"
  );
  const dotAnim = React.useRef(new Animated.Value(0)).current;
  const textAnim = React.useRef(new Animated.Value(0)).current;

  const hanldePress = () => {
    if (switchPosition === "RESTAURANT") {
      Animated.timing(dotAnim, {
        toValue: 100,
        duration: 300,
        easing:Easing.ease,
        useNativeDriver: true,
      }).start();
      Animated.timing(textAnim, {
        toValue: -20,
        duration: 300,
        easing:Easing.ease,
        useNativeDriver: true,
      }).start();
      selected('ORDERS')
      setSwitchPosition('ORDERS')
    } else {
      Animated.timing(dotAnim, {
        toValue: 0,
        duration: 300,
        easing:Easing.ease,
        useNativeDriver: true,
      }).start();
      Animated.timing(textAnim, {
        toValue: 0,
        duration: 300,
        easing:Easing.ease,
        useNativeDriver: true,
      }).start();
      setSwitchPosition('RESTAURANT')
      selected('RESTAURANT')
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={hanldePress}>
      <Animated.View className={`${switchPosition === 'ORDERS'?"bg-green-400":"bg-blue-400"} flex-row rounded-full w-[130px] overflow-hidden items-center p-2 `}>
        <Animated.View
          style={{ transform: [{ translateX: dotAnim }] }}
          className="bg-color2 w-4 h-4 rounded-full"
        ></Animated.View>
        <Animated.Text style={{ transform: [{ translateX: textAnim }] }} className="text-color1 text-xs px-2 font-bold">{switchPosition=== "ORDERS"?'ORDERS':'RESTAURANTS'}</Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
}
