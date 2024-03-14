import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

const deleteDish = async ({
  categoryId,
  restaurantId,
  dishId,
}: {
  categoryId: string;
  restaurantId: string;
  dishId: string;
}) => {
  try {
    const dish = await fetch(
      `${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.DELETE_DISH}`,
      {
        method: "DELETE",
        body: JSON.stringify({
          categoryId,
          restaurantId,
          dishId,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const JSONData = await dish.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default deleteDish;
