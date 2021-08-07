import { useQuery } from "react-query";
import { APIResponse } from "../interfaces";
import { getResturants } from "../services/RestaurantApi";
import { Restaurant } from "../view-model/RestaurantVm";

export function useResturants(currentPage): APIResponse<Restaurant[]> {
  return useQuery(
    ["GET/resturants", currentPage],
    () => getResturants(currentPage),
    { keepPreviousData: true, staleTime: 5000 }
  );
}
