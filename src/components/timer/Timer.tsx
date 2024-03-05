import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function Timer({seconds}:{seconds:number}) {
  const [timerValue, setTimerValue] = useState(seconds);

  useEffect(() => {
    setInterval(() => {
      setTimerValue((x)=>x-1);
    }, 1000);
  }, []);
  return <Text>{timerValue}</Text>;
}
