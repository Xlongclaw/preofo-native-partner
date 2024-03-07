import Toast from "react-native-toast-message";
import passwordValidation from "./passwordValidation";

type submitDataPropType = {
  password: string;
  confirmPassword: string;
  name: string;
  userToken: string;
};

const submitUserData = async ({
  password,
  confirmPassword,
  name,
  userToken,
}: submitDataPropType) => {
  if (passwordValidation(password, confirmPassword)) {
    const res = await fetch(`${process.env.SERVER_ADDRESS}addPartner`, {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
        userToken,
      }),
      headers: { "Content-Type": "application/json" },
    });
    return (await res).json();
  } else return { code: "PASSWORD_DOES_NOT_MATCH" };
};

export default submitUserData;
