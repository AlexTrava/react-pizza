import styles from "./PizzaCard.module.scss";
import React, { useState } from "react";
import uniqId from "lodash.uniqueid";
import { useSelector, useDispatch } from "react-redux";

import { addProduct, cartItemByIdSelector } from "../../redux/slices/cartSlice";

export type PizzaCardProps = {
  id:number,
  pizzaName:string,
  price:number,
  img:string,
  size:string[],
  types:number[],
}

const PizzaCard: React.FC<PizzaCardProps> = ({ id, pizzaName, price, img, size, types }) => {
  const typesPizza = ["Тонкое", "Традиционное"];
  const typeNames = ["тонкое", "традиционное"];
  const typeSizes = ["26 см", "30 см", "40 см"];
  const dispatch = useDispatch();

  const cartItem = useSelector(cartItemByIdSelector(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const [typeActive, setTypeActive] = useState<number>(0);
  const [sizeActive, setSizeActive] = useState<number>(0);

  const onClickAdd = () => {
    const item = {
      id,
      pizzaName,
      price,
      img,
      type: typeNames[typeActive!],
      size: typeSizes[sizeActive!],
    };
    dispatch(addProduct(item));
  };

  const typeActiveHandler = (number:number) => {
    setTypeActive(() => number);
  };

  const sizeActiveHandler = (number:number) => {
    setSizeActive(() => number);
  };

  return (
    <div className={styles.pizza_block}>
      <img className={styles.pizza_block__image} src={img} alt="Pizza" />
      <h4 className={styles.pizza_block__title}>{pizzaName}</h4>
      <div className={styles.pizza_block__selector}>
        <ul>
          {types!.map((number) => (
            <li
              onClick={() => typeActiveHandler(number)}
              className={typeActive === number ? styles.active : ""}
              key={uniqId("type_")}
            >
              {typesPizza[number]}
            </li>
          ))}
        </ul>
        <ul>
          {size!.map((item, index) => (
            <li
              onClick={() => sizeActiveHandler(index)}
              className={sizeActive === index ? styles.active : ""}
              key={uniqId("size_")}
            >
              {item} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pizza_block__bottom}>
        <div className={styles.pizza_block__price}>{`от ${price}₽`}</div>
        <button
          className="button button__outline button__add"
          onClick={onClickAdd}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i> {addedCount > 0 && addedCount}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
