import React, { useContext } from "react";

import styles from "./Item.module.css";
import Button from "./Button";
import ItemContext from "../../Store/ItemContext";
const Item = (props) => {
  const itemCtx = useContext(ItemContext);

  const editItemHandler = () => {
    itemCtx.editItemHandler({
      id: props.id,
      amount: props.item.amount,
      description: props.item.description,
      category: props.item.category,
    });
  };
  return (
    <div className={styles.item}>
      <h5 className={styles.amount}>Rs. {props.item.amount}</h5>
      <p className={styles.description}>{props.item.description}</p>
      <h5 className={styles.category}>{props.item.category}</h5>
      <div className={styles.actions}>
        <Button name="EDIT" action={editItemHandler} />
        <Button name="DELETE" action={() => itemCtx.deleteItem(props.id)} />
      </div>
    </div>
  );
};

export default Item;
