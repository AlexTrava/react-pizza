import { useState } from "react";
import styles from "./Categories.module.scss";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const onClickCategory = (index) => {
    setActiveCategory(() => index);
  };

  return (
    <div className={styles.categories}>
      <ul>
        <li
          onClick={() => onClickCategory(0)}
          className={activeCategory === 0 ? styles.active : ""}
        >
          Все
        </li>
        <li
          onClick={() => onClickCategory(1)}
          className={activeCategory === 1 ? styles.active : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => onClickCategory(2)}
          className={activeCategory === 2 ? styles.active : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => onClickCategory(3)}
          className={activeCategory === 3 ? styles.active : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => onClickCategory(4)}
          className={activeCategory === 4 ? styles.active : ""}
        >
          Острые
        </li>
        <li
          onClick={() => onClickCategory(5)}
          className={activeCategory === 5 ? styles.active : ""}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
};

export default Categories;
