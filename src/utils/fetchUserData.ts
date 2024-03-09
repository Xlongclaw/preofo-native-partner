import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

const fetchUserData = async (userToken: string) => {
  try {
    const data = await fetch(
      `${process.env.SERVER_ADDRESS}/${SERVER_ENDPOINTS.GET_PARTNER_FROM_TOKEN_GET}?userToken=${userToken}`,
      {
        method: "GET",
      }
    );
    return (await data).json();
  } catch (err) {
    return { code: "UDNE" };
  }
};
export default fetchUserData;
