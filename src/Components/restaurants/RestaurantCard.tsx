import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "../view-model/RestaurantVm";
// import Badge from "@material-ui/core/Badge";

const RestaurantBox: FC<Restaurant> = function ({
  name,
  image_url,
  id,
  street,
}: Restaurant) {
  return (
    <div className="a-box">
      {/* <span>
        <Badge
          color="error"
          style={{ right: "20px" }}
          badgeContent="online"
        ></Badge>
      </span> */}
      <div className="a-b-img img-status-container">
        <img src={image_url} alt="" />
        <span className="restaurant-status active">Online</span>
          <span className="restaurant-status">Offline</span>
      </div>
      <div></div>
      <div className="a-b-text">
        <h2>{name}</h2>
        <h4>{street}</h4>
        <Link to={`/dishes/${id}`}>
          <button className="productbox-button">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantBox;
