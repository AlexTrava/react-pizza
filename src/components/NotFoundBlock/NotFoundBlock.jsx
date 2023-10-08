import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <br />
      <h1>Not Found. Please try again.</h1>
    </div>
  );
};

export default NotFoundBlock;
