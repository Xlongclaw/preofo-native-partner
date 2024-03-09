import { View, Text } from "react-native";
import React from "react";
import XTag from "./x-tag";

export default function XTagSelector({
  tags,
  getTags,
  title
}: {
  tags: Array<string>;
  title:string
  getTags: (tagsArray: Array<string>) => void;
}) {
  const [selectedTags, setSelectedTags] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    getTags(selectedTags);
  }, [selectedTags]);
  return (
    <View>
      <Text className="font-semibold text-color2/100 text-center mt-4 mb-2">
        {title}
      </Text>
      {selectedTags.length < 5 && (
        <Text className="text-red-600 font-medium mb-2 text-center">
          {5-selectedTags.length} more tags to go
        </Text>
      )}
      <View className="flex-row flex-wrap mt-2">
        {tags.map((tag, i) => (
          <XTag
            isSelected={(value) => {
              if (value) {
                setSelectedTags([...selectedTags, tags[i]]);
              } else {
                setSelectedTags(selectedTags.filter((tag) => tag !== tags[i]));
              }
            }}
            key={tag}
            marginR="xs"
            marginB="sm"
            title={tag}
          />
        ))}
      </View>
     
    </View>
  );
}
