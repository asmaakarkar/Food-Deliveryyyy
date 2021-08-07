import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Dishes from "../dishes/DishesCard";
import Pagination from "../Pagination";
import { getSearchDishes } from "../services/DishesSearchApi";
import { useSerachDishes } from "./SearchDihesHook";

function DishesSearch() {
  const { query }: any = useParams();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, isSuccess } = useSerachDishes(
    query,
    currentPage
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error:{error.message}</div>;
  }
  const handlePageChange = () => {
    setCurrentPage(currentPage + 1);
    getSearchDishes(query, currentPage);
  };

  return (
    <div style={{ paddingTop: "15rem" }}>
      {isSuccess ? (
        data.map((item) => {
          console.log("fsdf", data);
          return (
            <Dishes
              key={item.id}
              id={item.restaurant_id}
              price={item.price}
              name={item.name}
              image_path={item.image_path}
              description={item.restaurant_name}
            />
          );
        })
      ) : (
        <div></div>
      )}
      {isSuccess ? (
        <Pagination pageCount={1000} onPageChange={handlePageChange} />
      ) : (
        <div>Nothing to display</div>
      )}
    </div>
  );
}

export default DishesSearch;
