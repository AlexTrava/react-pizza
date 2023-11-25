import React from "react";
import styles from "./Categories.module.scss";
import uniqId from "lodash.uniqueid";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/optionsSlice";

const Categories: React.FC = () => {
  const categoriesArr:string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const filterId = useSelector((state) => state.options.categoryId);
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
