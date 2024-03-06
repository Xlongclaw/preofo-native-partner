const fetchUserData = async (userToken: string) => {
  try {
    const data = await fetch(
      `${process.env.SERVER_ADDRESS}getUserFromUserToken?userToken=${userToken}`,
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