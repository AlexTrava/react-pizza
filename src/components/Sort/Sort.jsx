import styles from "./Sort.module.scss";
import { useState, useRef, useEffect } from "react";
import uniqId from "lodash.uniqueid";
import { useSelector, useDispatch } from "react-redux";
import {
  setSortId,
  setActiveSortType,
  selectorActiveId,
} from "../../redux/slices/optionsSlice";

const Sort = () => {
  const listPop = ["Популярности", "Цене", "Алфавиту"];
  const sortList = ["rating", "price", "title"];
  const [isVisiblePopUp, setIsVisiblePopUp] = useState(false);
  const sortRef = useRef();

  const sortId = useSelector(selectorActiveId);
  const dispatch = useDispatch();
  let sortName = listPop[sortId];

  const onClickPop = (index) => {
    dispatch(setSortId(index));
    dispatch(setActiveSortType(sortList[sortId]));
    setIsVisiblePopUp(() => false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setIsVisiblePopUp(false);
        console.log("click outside");
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sort} ref={sortRef}>
      <div className={styles.sort__label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisiblePopUp(() => !isVisiblePopUp)}>
          {sortName}
        </span>
      </div>
      {isVisiblePopUp && (
        <div className={styles.sort__popup}>
          <ul>
            {listPop.map((item, index) => (
              <li
                className={sortId === index ? styles.active : ""}
                key={uniqId("list_pop_")}
                onClick={() => onClickPop(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
