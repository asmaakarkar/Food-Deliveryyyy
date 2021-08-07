import React, { useState, StrictMode, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/HomePage";
import { ReactQueryDevtools } from "react-query/devtools";
import DishesResults from "./Components/searchDishes/DishesSearch";
import RestaurantsList from "./Components/restaurants/RestaurantsList";
import DishesDetailsMenu from "./Components/dishes/DishesDetailsMenu";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <StrictMode>
      <div className="App">
        {loading ? (
          <PropagateLoader
            color={"#3d2514"}
            loading={loading}
            css={override}
            size={40}
          />
        ) : (
          <header>
            <Navbar />
          </header>
        )}
        <main className="container p-4 mx-auto mt-8 lg:w-screen-lg">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/dishes/search/:query" exact >
              <DishesResults />
            </Route>
            <Route path="/restaurants">
              <RestaurantsList />
            </Route>
            <Route path="/dishes/:id">
              <DishesDetailsMenu />
            </Route>
          </Switch>
          <ReactQueryDevtools initialIsOpen={false} />
        </main>
      </div>
    </StrictMode>
  );
}

export default App;
