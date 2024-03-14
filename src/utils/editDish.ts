import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

const editDish = async ({
  dishId,
  dish,
}: {
  dishId:string
  dish: {
    name:string,
    description:string,
    prepTime:number,
    price:number,
    nonVeg:boolean,
    image:{
      publicId:string,
      url:string,
      signature:string
    }
  };
}) => {
  try {
    const category = await fetch(
      `${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.POST_DISH}`,
      {
        method: "PUT",
        body: JSON.stringify({
          dishId,
          dish,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const JSONData = await category.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default editDish;
