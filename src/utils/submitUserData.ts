import Toast from "react-native-toast-message";
import passwordValidation from "./passwordValidation";
import { restaurant2DataType } from "@types";
import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

type submitDataPropType = {
  password: string;
  confirmPassword: string;
  name: string;
  userToken: string;
  restaurantData:restaurant2DataType
};

const submitUserData = async ({
  password,
  confirmPassword,
  name,
  userToken,
  restaurantData
}: submitDataPropType) => {
  if (passwordValidation(password, confirmPassword)) {
    const res = await fetch(`${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.ADD_PARTNER_POST}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
        userToken,
        restaurantData
      }),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  } else return { code: "PASSWORD_DOES_NOT_MATCH" };
};

export default submitUserData;
