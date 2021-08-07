import axios from "axios";
import { SERVER_URL } from "../config";
import { Restaurant } from "../view-model/RestaurantVm";

export function getDishes(id?: number) {
  return axios(
    `${SERVER_URL}restaurants/details_and_menu?format=json&restaurant_id=${id}`
  ).then((result) => {
    
    
    console.log("DdsfsD",(result.data.restaurant));
    const t=new Restaurant(result.data.restaurant)
    console.log("DdsfsD",t);

    return t;

    
    
  });
}
