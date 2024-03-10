import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

const fetchCategoryById = async (categoryId: string) => {
  try {
    const category = await fetch(
      `${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.GET_CATEGORY}?_id=${categoryId}`
    );
    const JSONData = await category.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default fetchCategoryById