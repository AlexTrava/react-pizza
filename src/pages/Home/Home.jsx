import React, { useState, useEffect } from "react";
import uniqId from "lodash.uniqueid";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Skeleton from "../../components/Skeleton/Skeleton";
import PizzaCard from "../../components/PizzaCard/PizzaCard";

const URL_ITEMS = "https://651e965944a3a8aa4768a0da.mockapi.io/items";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL_ITEMS)
      .then((data) => data.json())
      .then((data2) => {
        setLoading(false);
        setItems(data2);
      })
      .catch((e) => console.log(e));

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map(({ id, title, price, imageUrl, sizes, types }) => (
              <PizzaCard
                pizzaName={title}
                price={price}
                img={imageUrl}
                size={sizes}
                types={types}
                key={uniqId("card_")}
              />
            ))}
      </div>
    </>
  );
};

export default Home;
