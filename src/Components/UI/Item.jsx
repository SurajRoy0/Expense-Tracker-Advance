import styles from "./Item.module.css";
import Button from "./Button";
import { itemActions } from "../../Store/Items";
import { deleteItem, fetchItems } from "../../Api/api";
import { useDispatch, useSelector } from "react-redux";
const Item = (props) => {
  const authData = useSelector((state) => state.auth);
  const modifiedEmail = authData.userEmail.replace(/[.@]/g, "-");
  const dispatch = useDispatch();

  const editItemHandler = () => {
    dispatch(
      itemActions.setEditData({
        id: props.id,
        amount: props.item.amount,
        description: props.item.description,
        category: props.item.category,
      })
    );
  };

  const deleteItemHandler = () => {
    deleteItem(props.id, modifiedEmail);
    dispatch(fetchItems(modifiedEmail));
  };

  return (
    <div className={styles.item}>
      <h5 className={styles.amount}>Rs. {props.item.amount}</h5>
      <p className={styles.description}>{props.item.description}</p>
      <h5 className={styles.category}>{props.item.category}</h5>
      <div className={styles.actions}>
        <Button name="EDIT" action={editItemHandler} />
        <Button name="DELETE" action={deleteItemHandler} />
      </div>
    </div>
  );
};

export default Item;
