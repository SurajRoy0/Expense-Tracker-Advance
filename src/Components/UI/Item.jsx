import React from "react";

import styles from "./Item.module.css";
const Item = (props) => {
  return (
    <div className={styles.item}>
      <h5 className={styles.amount}>Rs. {props.item.amount}</h5>
      <p className={styles.description}>{props.item.description}</p>
      <h5 className={styles.category}>{props.item.category}</h5>
    </div>
  );
};

export default Item;
