import { useQuery } from "react-query";
import { APIResponse } from "../interfaces";
import { getDishes } from "../services/DihesApi";
import { Menu } from "../view-model/DishesVm";
import { Restaurant } from "../view-model/RestaurantVm";

export function useDishes(id: number): APIResponse<Restaurant> {
  return useQuery(["GET/dishes", id], () => getDishes(id), {
    keepPreviousData: true,
    staleTime: 0,
  });
}
