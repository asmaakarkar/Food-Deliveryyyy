/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Hero from "./HeroHeader";
import { useParams } from "react-router-dom";
import DishesCard from "./DishesCard";
import { useDishes } from "./DishesHook";
import DishesInfo from "./DishesInfo";

function DishesDetailsMenu() {
  const { id }: any = useParams();
  const [visibleTab, setVisibleTab] = React.useState<number>(null);

  const { data, isLoading, error, isSuccess } = useDishes(id);

  useEffect(() => {
    if (isSuccess) {
      setVisibleTab(data.menu.sub_menus[0].id);
    }
  }, [data, isSuccess]);

  const listTitles = isSuccess
    ? data.menu.sub_menus.map((item: any) => (
        <li
          onClick={() => setVisibleTab(item.id)}
          className={
            visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
          }
        >
          {item.name}
        </li>
      ))
    : null;

  const listContent = isSuccess
    ? data.menu.sub_menus.map(({ dishes, id }) => {
        return dishes
          ? dishes.map((item: any) =>
              visibleTab === id ? (
                <DishesCard
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  name={item.name}
                  image_path={item.image_path}
                  description={item.description}
                />
              ) : (
                ""
              )
            )
          : isSuccess
          ? data.menu.sub_menus.map(({ sub_menus, id }) => {
              return sub_menus
                ? sub_menus.map(({ dishes }) => {
                    return dishes
                      ? dishes.map((item: any) =>
                          visibleTab === id ? (
                            <DishesCard
                              id={item.id}
                              price={item.price}
                              name={item.name}
                              image_path={item.image_path}
                              description={item.description}
                            />
                          ) : (
                            ""
                          )
                        )
                      : [];
                  })
                : "";
            })
          : [];
      })
    : null;

  return (
    <>
      <Hero />
      <DishesInfo/>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error:{error.message} </div>}
      <div className="tabs">
        <ul className="tabs-titles">{listTitles}</ul>
        <div className="tab-content">{listContent}</div>
      </div>
    </>
  );
}
export default DishesDetailsMenu;
