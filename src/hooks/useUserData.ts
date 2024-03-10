import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";
import { useEffect, useState } from "react";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";

const useUserData = () => {
  const [userData, setUserData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userToken, setUserToken] = useState<null | string>(null);

  useEffect(() => {
    setIsLoading(true);
    retrieveSecureStoreData("userToken").then((userToken) => {
      setUserToken(userToken);
    });
  }, []);

  useEffect(() => {
    if (userToken)
      fetch(
        `${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.GET_PARTNER_FROM_TOKEN_GET}?userToken=${userToken}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((responseData) => {
          setUserData(responseData.data[0]);
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
  }, [userToken]);
  return { userData, isLoading, error };
};

export default useUserData;
