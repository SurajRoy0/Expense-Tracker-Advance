import React, { useContext, useState } from "react";

import styles from "./ShowItems.module.css";
import Item from "./Item";
import ItemContext from "../../Store/ItemContext";
const ShowItems = () => {
  const itemCtx = useContext(ItemContext);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Expenses</h1>
      <div className={styles.items}>
        {itemCtx.items.map((item) => {
          return <Item key={item[0]} item={item[1]} />;
        })}
      </div>
    </div>
  );
};

export default ShowItems;
