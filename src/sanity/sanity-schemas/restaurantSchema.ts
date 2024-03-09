class Restaurant {
  name!:string;
  _id!:string;
  description!:string;
  address!:string;
  latitude!:number;
  longitude!:number;
  minPrepTime!:number;
  maxPrepTime!:number;
  open!:boolean;
  rating!: number;
  review!:string;
  tags!:Array<string>
}