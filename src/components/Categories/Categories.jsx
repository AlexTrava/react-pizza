import { useState } from "react";
import styles from "./Categories.module.scss";
import uniqId from "lodash.uniqueid";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/categorySlice";

const Categories = () => {
  const categoriesArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const filterId = useSelector((state) => state.category.categoryId);
  const dispatch = useDispatch();

  return (
    <div className={styles.categories}>
      <ul>
        {categoriesArr.map((item, index) => (
          <li
            onClick={() => dispatch(setCategoryId(index))}
            key={uniqId("category_")}
            className={filterId === index ? styles.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
