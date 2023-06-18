import React, { useContext, useState } from "react";
import styles from "./AddExpense.module.css";
import axios from "axios";
import ItemContext from "../../Store/ItemContext";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const itemCtx = useContext(ItemContext);

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
    itemCtx.addItems({
      amount: amount,
      description: description,
      category: category,
    });
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
