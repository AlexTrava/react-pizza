import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import uniqId from "lodash.uniqueid";
import axios from "axios";
import qs from "qs";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Skeleton from "../../components/Skeleton/Skeleton";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import Pagination from "../../components/Pagination/Pagination";

import { setPageCurrent, setFilters } from "../../redux/slices/optionsSlice";

const URL_ITEMS = "https://651e965944a3a8aa4768a0da.mockapi.io/items";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const categoryId = useSelector((state) => state.options.categoryId);
  const typeSort = useSelector((state) => state.options.activeSortType);
  const searchValue = useSelector((state) => state.search.searchValue);
  const currentPage = useSelector((state) => state.options.activePageCount);

  const onChangePage = (number) => {
    dispatch(setPageCurrent(number));
  };

  const fetchPizzas = () => {
    setLoading(true);
    axios
      .get(
        `${URL_ITEMS}?page=${currentPage}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${typeSort}${
          searchValue ? `&search=${searchValue}` : ""
        }&order=desc`
      )
      .then((responce) => responce.data)
      .then((data) => {
        setLoading(false);
        setItems(data);
      })
      .catch((e) => console.log(e));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: typeSort,
        categoryId: categoryId,
        currentPage: currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, typeSort, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params));
      isSearch.current = true;
      // console.log(params, "params");
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
