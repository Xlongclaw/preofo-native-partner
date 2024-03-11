import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

const fetchDishById = async (dishId: string) => {
  try {
    const category = await fetch(
      `${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.GET_DISH}?_id=${dishId}`
    );
    const JSONData = await category.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default fetchDishById