import { useState } from "react";
import styles from "./Categories.module.scss";
import uniqId from "lodash.uniqueid";

const Categories = () => {
  const categoriesArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeCategory, setActiveCategory] = useState(0);

  const onClickCategory = (index) => {
    setActiveCategory(() => index);
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categoriesArr.map((item, index) => (
          <li
            onClick={() => onClickCategory(index)}
            key={uniqId("category_")}
            className={activeCategory === index ? styles.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
