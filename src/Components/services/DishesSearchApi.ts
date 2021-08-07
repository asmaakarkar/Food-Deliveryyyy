import axios from "axios";
import { SERVER_URL } from "../config";
import { Dishes } from "../view-model/SearchVm";

const pageCount: number = 9;

export function getSearchDishes(query : string, currentPage: number = 1) {
    return axios(
      `${SERVER_URL}search/search_dishes?pagesize=${pageCount}&pagenum=${currentPage}&city_id=1&value=${query}&format=json`
    ).then((result) => (result.data.rest_dishes.map((data)=> new Dishes(data)))
    );
  }