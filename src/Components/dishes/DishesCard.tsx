import React,{FC} from "react";
import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Dish } from "../view-model/DishesVm";
import DishesInfo from "./DishesInfo";


// interface DishProps{
//   id ?:number;
//   name:string;
//   image:string;
//   description:string;
//   price:number;

// }

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      padding: "3rem",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
  })
);


const DishesCard:FC<Dish> =function ({id,name,image_path,description,price}:Dish) {
  const classes = useStyles();
  DishesCard.defaultProps = {
    image_path: "https://widgets.truekonnects.com/images/default_food.jpg;jsessionid=3213D246B6B2FBFF6BF99E4B11274BD8"
  }
  return (
    <>
      <Card className={classes.root}>
        {image_path ? (
          <CardMedia
            className={classes.cover}
            image={image_path}
            title="Live from space album cover"
          />
        ) : (
          <CardMedia
            className={classes.cover}
            image="https://widgets.truekonnects.com/images/default_food.jpg;jsessionid=3213D246B6B2FBFF6BF99E4B11274BD8"
            title="no image"
          />
        )}
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <Link
                to={{
                  pathname: `/details/${id}`,
                }}
              >
                {description}
              </Link>
              <h3>
                {" "}
                <span
                  style={{
                    float: "left",
                    fontWeight: "bold",
                    color: "#bf2222",
                  }}
                >
                  {" "}
                  Price:{price}
                </span>
              </h3>
            </Typography>
            <span>
              <div className="dish-card">
            <button className="button js-ripple"></button>
            <i className="ripple" style={{top: "11px" , left: "13px"}}></i>
            </div>
            </span>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
export default DishesCard;
