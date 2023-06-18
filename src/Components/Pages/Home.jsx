import React, { useState } from "react";

import styles from "./Home.module.css";
import AddExpense from "../UI/AddExpense";
import ShowItems from "../UI/ShowItems";
const Home = () => {
  const [items, setItems] = useState([]);
  const addItemHandler = (item) => {
    setItems((prev) => [item, ...prev]);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to expense tracker</h2>
      <div className={styles["expense-form"]}>
        <AddExpense addItemHandler={addItemHandler} />
        <ShowItems items={items} />
      </div>
    </div>
  );
};

export default Home;
