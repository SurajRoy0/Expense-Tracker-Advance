import React, { useContext, useEffect, useState } from "react";
import styles from "./AddExpense.module.css";
import ItemContext from "../../Store/ItemContext";

const AddExpense = () => {
  const itemCtx = useContext(ItemContext);

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    if (itemCtx.editData.id) {
      setDescription(itemCtx.editData.description);
      setAmount(itemCtx.editData.amount);
      setCategory(itemCtx.editData.category);
      setEditItemId(itemCtx.editData.id);
    }
  }, [itemCtx.editData]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    itemCtx.addItems(
      {
        amount: amount,
        description: description,
        category: category,
      },
      editItemId
    );
    setEditItemId(null);
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <form className={styles.addExpenseForm} onSubmit={handleSubmit}>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={handleDescriptionChange}
        className={styles.inputField}
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={handleCategoryChange}
        className={styles.selectField}
      >
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Petrol">Petrol</option>
        <option value="Salary">Salary</option>
        <option value="Movie">Movie</option>
      </select>

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
        className={styles.inputField}
      />

      <div className={styles["action-div"]}>
        <button type="submit" className={styles.addButton}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default AddExpense;
