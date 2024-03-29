import { View, TouchableOpacity } from "react-native";
import React from "react";

export default function AvailableRadioButton({
  onPress,
  initial,
}: {
  onPress: (value: boolean) => void;
  initial: boolean;
}) {
  const [available, setAvailable] = React.useState<boolean>(initial);

  React.useEffect(() => {
    onPress(available);
  }, [available]);

  return (
    <TouchableOpacity
      onPress={() => setAvailable(!available)}
      className="px-2 py-2  mx-1 border rounded-full border-color3/50"
    >
      <View className="border w-4 h-4 rounded-full justify-center items-center">
        {available && <View className="bg-black w-2 h-2 rounded-full"></View>}
      </View>
    </TouchableOpacity>
  );
}
