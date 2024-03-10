import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS"

const addCategory = async({categoryName,restaurantId}:{categoryName:string,restaurantId:string}) =>{
  try {
    const category = await fetch(`${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.POST_CATEGORY}`,{
      method:'POST',
      body: JSON.stringify({
        name:categoryName,
        restaurantId
      }),
      headers: { "Content-Type": "application/json" },
    })   
    const JSONData = await category.json()
    return JSONData
  } catch (error) {
    console.log(error);
    return {code:'SOMETHING_WENT_WRONG'}
  }
}

export default addCategory