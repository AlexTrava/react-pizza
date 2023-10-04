import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaCard from "./components/PizzaCard/PizzaCard";
import uniqId from 'lodash.uniqueid';

import pizzas from "./pizza.json";

function App() {
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
            {pizzas.map(({ id, title, price, imageUrl, sizes, types }) => (
              <PizzaCard
                pizzaName={title}
                price={price}
                img={imageUrl}
                size={sizes}
                types={types}
                key={uniqId('card_')}
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
