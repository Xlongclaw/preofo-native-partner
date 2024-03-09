import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import generateCloudinaryImageUrl from "utils/generateCloudinaryImageUrl";

/**
 * This component lets user to add or pick image from their own
 * storage, allowing the code to get access to the images.
 *
 * @returns a JSX Element that prompts the user to add a group of images.
 */
export default function XImagePicker({
  getImage,
}: {
  getImage: (
    imagesArray: Array<string>
  ) => void;
}) {
  const [images, setImages] = React.useState<Array<string>>([]);

  /**
   * This funtion launches image Picker and add the uri of the selected image to
   * images array.
   */
  const launchImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 2.5],
      quality: 1,
    });
    if (!result.canceled) {
        setImages([...images, result.assets![0].uri]);
    }
  };

  /**
   * This function remove the image from the image Array
   * at the given index i.
   *
   * @param i index of the image.
   */
  const removeImage = (i: number) => {
    setImages(images.filter((_, index) => index !== i));
  };

  React.useEffect(() => {
    getImage(images);
  }, [images]);

  return (
    <View className="my-6">
      <Text className="font-semibold text-center text-color2/70 mb-2">
        Add Restaurant Images
      </Text>
      {images.map((imageUrl, i) => (
        <View
          key={imageUrl}
          className="border border-color3 mb-2 p-1 rounded-3xl overflow-hidden"
        >
          <TouchableOpacity
            onPress={() => removeImage(i)}
            activeOpacity={0.7}
            className=" bg-color1 absolute right-3 top-3 z-10 px-4 py-2 rounded-full"
          >
            <Text className="font-black text-color2/50 text-xs">X</Text>
          </TouchableOpacity>
          <Image className="w-full h-40 rounded-[20px]" src={imageUrl} />
        </View>
      ))}
      <TouchableOpacity
        onPress={launchImagePicker}
        className="border border-color3 justify-center items-center p-5 rounded-2xl"
      >
        <Text className="font-semibold text-color2 text-xs">+ ADD IMAGE</Text>
      </TouchableOpacity>
    </View>
  );
}
