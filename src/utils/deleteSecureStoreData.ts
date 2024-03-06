import * as SecureStore from "expo-secure-store";

const deleteSecureStoreData = async function getValueFor(key: string) {
  let result = await SecureStore.deleteItemAsync(key);
  return result
}

export default deleteSecureStoreData