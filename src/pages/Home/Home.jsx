import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import uniqId from "lodash.uniqueid";
import axios from "axios";

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

  const categoryId = useSelector((state) => state.category.categoryId);
  const typeSort = useSelector((state) => state.sort.activeSortType);
  const searchValue = useSelector((state) => state.search.searchValue);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${URL_ITEMS}?page=${currentPage}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${typeSort}${
          searchValue ? `&search=${searchValue}` : ""
        }&order=desc`,
      )
      .then((responce) => responce.data)
      .then((data) => {
        setLoading(false);
        setItems(data);
      })
      .catch((e) => console.log(e));
    window.scrollTo(0, 0);
  }, [categoryId, typeSort, searchValue, currentPage]);

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
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
