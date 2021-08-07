import { useQuery } from "react-query";
import { APIResponse } from "../interfaces";
import { getSearchDishes } from "../services/DishesSearchApi";
import { Dishes } from "../view-model/SearchVm";

export function useSerachDishes(
  query: string,
  currentPage: number
): APIResponse<Dishes[]> {
  return useQuery(
    ["GET/searchdishes", query, currentPage],
    () => getSearchDishes(query, currentPage),
    {
      keepPreviousData: true,
      staleTime: 0,
    }
  );
}
