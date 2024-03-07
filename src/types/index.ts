type RootStackParamList = {
  Home: undefined;
  AppLoadingScreen: undefined;
  Registeration: { userToken:string };
  SignUp:undefined;
  SignIn:undefined
};

type DishType = {
  _id:string,
  image:string,
  price:number,
  rating:number,
  name:string,
  prepTime:number;
  available:boolean,
  nonVeg:boolean
  description:string,
}

type foodItemDataType = {
  name: string;
  goto: string;
  rating: Number;
  images: Array<any>;
  price: string;
  nonVeg: boolean;
  description: string;
};

type restaurantDataType = {
  _id:string
  name: string;
  goto: string;
  tags: Array<string>;
  minPrepTime: number;
  maxPrepTime: number;
  rating: number;
  reviews: string;
  images: Array<string>;
  foodCategories:Array<{category:string,dishes:Array<DishType>}>
};

export {RootStackParamList,DishType,foodItemDataType,restaurantDataType}