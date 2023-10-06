import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaCard from "./components/PizzaCard/PizzaCard";
import uniqId from "lodash.uniqueid";
// import axios from "axios";
import { useState, useEffect } from "react";
// import pizzas from "./pizza.json";
import Skeleton from "./components/Skeleton/Skeleton";

const URL_ITEMS = "https://651e965944a3a8aa4768a0da.mockapi.io/items";

function App() {
  const [items, setItems] = useState([]);
<<<<<<< HEAD
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const resp = () => {
      fetch(URL_ITEMS)
        .then((data) => data.json())
        .then((data2) => {
          setLoading(false)
          setItems(data2)})
=======

  useEffect(() => {
    const resp = async () => {
      await fetch(URL_ITEMS)
        .then((data) => data.json())
        .then((item) => setItems(item))
>>>>>>> 6577f5f913c06ff5ff3568099c6b414ee65f053d
        .catch((e) => console.log(e));
    };
    resp();
  }, []);
<<<<<<< HEAD

  // console.log(items, "its items");
=======
  console.log(items, "render");
>>>>>>> 6577f5f913c06ff5ff3568099c6b414ee65f053d
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
<<<<<<< HEAD
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
=======
            {items.map(({ id, title, price, imageUrl, sizes, types }) => (
              <PizzaCard
                pizzaName={title}
                price={price}
                img={imageUrl}
                size={sizes}
                types={types}
                key={uniqId("card_")}
              />
            ))}
>>>>>>> 6577f5f913c06ff5ff3568099c6b414ee65f053d
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
