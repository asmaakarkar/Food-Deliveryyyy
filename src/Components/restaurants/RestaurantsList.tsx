/* eslint-disable array-callback-return */
import React, { useEffect, useState, FC } from "react";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import RestaurantBox from "./RestaurantCard";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useResturants } from "./RestaurantsHook";
import { css } from "@emotion/core";

interface RestaurantsListProps {
  handlePageClick?: () => void;
  handlePageChange?: (e: any) => void;
  filteredRestaurants?: any[];
}
const override = css`
  display: block;
  border-color: red;
  margin-top: 20%;
`;
const RestaurantsList: FC<RestaurantsListProps> = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const { data, isLoading, error, isSuccess } = useResturants(currentPage);
  useEffect(() => {
    if (isSuccess) {
      console.log("ddfg", data);
      setFilteredRestaurants(
        data.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [isSuccess, data, search]);


  if (error) {
    return <div>Error:{error.message}</div>;
  }
  const handlePageClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePageChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div id="restaurants">

      {isLoading ? (
        <PropagateLoader
          color={"#3d2514"}
          loading={isLoading}
          css={override}
          size={40}
        />
      ) : (
        <div>
          <h1>CHOOSE & ENJOY</h1>
          <p>
            At six o'clock we pulled off the highway and found a family style
            restaurant in a small Maryland town.!!!{" "}
          </p>
          <SearchBar onChange={handlePageChange} />

          <div className="a-container">
            {isSuccess
              ? filteredRestaurants.map((restaurant) => (
                  <div key={restaurant.id}>
                    <RestaurantBox
                      street={restaurant.street}
                      image_url={restaurant.image_url}
                      name={restaurant.name}
                      id={restaurant.id}
                    />
                  </div>
                ))
              : null}
          </div>
          <Pagination pageCount={1000} onPageChange={handlePageClick} />
        </div>
      )}
    </div>
  );
};

export default RestaurantsList;
