import { Text, TouchableOpacity } from "react-native";
import React from "react";
import classNames from "classnames";

export default function ({
  title,
  marginR = "none",
  marginB = 'none',
  isSelected
}: {
  title: string;
  isSelected:(value:boolean)=>void
  marginR?: "xs"|"sm" | "md" | "lg" | "none";
  marginB?: "xs"|"sm" | "md" | "lg" | "none";
}) {
  const [selected, setSelected] = React.useState(false);

  React.useEffect(()=>{
    isSelected(selected)
  },[selected])
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      activeOpacity={0.7}
      className={classNames(
        "p-3  rounded-2xl h-12 items-center justify-center",
        {
          "border-color2 border ": selected === true,
          "border-color3 border ": selected === false,
          /**
           * Right margins.
           */
          "mr-1": marginR === "xs",
          "mr-2": marginR === "sm",
          "mr-4": marginR === "md",
          "mr-6": marginR === "lg",
          "mr-0": marginR === "none",
          /**
           * Bottom
           */
          "mb-1": marginB === "xs",
          "mb-2": marginB === "sm",
          "mb-4": marginB === "md",
          "mb-6": marginB === "lg",
          "mb-0": marginB === "none",
        }
      )}
    >
      <Text
        className={classNames("font-semibold", {
          "text-color2/90": selected === true,
          "text-color2/50 ": selected === false,
        })}
      >
        {title}
        {selected && <Text className="text-xs font-bold">  X </Text>}
      </Text>
    </TouchableOpacity>
  );
}
