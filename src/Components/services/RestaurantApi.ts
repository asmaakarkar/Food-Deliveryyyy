import axios from "axios";
import { SERVER_URL } from "../config";
import { Restaurant } from "../view-model/RestaurantVm";

const pageCount: number = 12;

export function getResturants(currentPage = 1) {
  return axios(
    `${SERVER_URL}restaurants/restaurants_list_by_region_and_service?format=json&service=2&city_id=1&pagesize=${pageCount}&pagenum=${currentPage}&lat=33.513731&lng=36.275751`
  ).then((result) => {


    return  result.data.restaurants.map((data) => new Restaurant(data));
    
  });
}
