import React, { useState, useEffect, useContext } from "react";
import uniqId from "lodash.uniqueid";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Skeleton from "../../components/Skeleton/Skeleton";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import Pagination from "../../components/Pagination/Pagination";
import { SearchContext } from "../../App";

const URL_ITEMS = "https://651e965944a3a8aa4768a0da.mockapi.io/items";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState("");

  const { searchValue, setSearchValue } = useContext(SearchContext);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${URL_ITEMS}?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType}${
        searchValue ? `&search=${searchValue}` : ""
      }&order=desc`
    )
      .then((data) => data.json())
      .then((data2) => {
        setLoading(false);
        setItems(data2);
      })
      .catch((e) => console.log(e));
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items
    // .filter((obj) =>
    //   obj.title.toLowerCase().includes(searchValue.toLowerCase())
    // )
    .map(({ id, title, price, imageUrl, sizes, types }) => (
      <PizzaCard
        pizzaName={title}
        price={price}
        img={imageUrl}
        size={sizes}
        types={types}
        key={uniqId("card_")}
      />
    ));
  return (
    <>
      <div className="content__top">
        <Categories funcCategory={setCategoryId} />
        <Sort funcSort={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
