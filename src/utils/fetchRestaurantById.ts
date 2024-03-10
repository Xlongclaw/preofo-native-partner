import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

const fetchRestaurantById = async (restaurantId: string) => {
  try {
    const restaurant = await fetch(
      `${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.GET_RESTAURANT}?_id=${restaurantId}`
    );
    const JSONData = await restaurant.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default fetchRestaurantById