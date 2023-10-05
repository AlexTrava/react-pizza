import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaCard from "./components/PizzaCard/PizzaCard";
import uniqId from "lodash.uniqueid";
// import axios from "axios";
import { useState, useEffect } from "react";
// import pizzas from "./pizza.json";

const URL_ITEMS = "https://651e965944a3a8aa4768a0da.mockapi.io/items";

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const resp =  () => {
       fetch(URL_ITEMS)
        .then((data) => data.json())
        .then((data2) => setItems(data2))
        .catch((e) => console.log(e));
    };
    resp();
  }, []);

  console.log(items, "its items");

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
            ;
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
