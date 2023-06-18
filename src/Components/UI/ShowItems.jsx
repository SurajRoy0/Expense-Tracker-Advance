import React from "react";

import styles from "./ShowItems.module.css";
import Item from "./Item";
const ShowItems = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Expenses</h1>
      <div className={styles.items}>
        {props.items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShowItems;
