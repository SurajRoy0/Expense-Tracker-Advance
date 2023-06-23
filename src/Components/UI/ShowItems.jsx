import React, { useEffect, useState } from "react";

import styles from "./ShowItems.module.css";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../Api/api";
const ShowItems = () => {
  const dispatch = useDispatch();
  const itemsData = useSelector((state) => state.items);
  const authData = useSelector((state) => state.auth);
  const modifiedEmail = authData.userEmail.replace(/[.@]/g, "-");

  useEffect(() => {
    dispatch(fetchItems(modifiedEmail));
  }, []);

  return (
    <div className={styles.container}>
      {itemsData.isLoading && <h1>Please Wait ...</h1>}
      {!itemsData.isLoading && (
        <>
          <h1 className={styles.title}>All Expenses</h1>
          <div className={styles.items}>
            {itemsData.items?.map((item) => {
              return <Item key={item[0]} item={item[1]} id={item[0]} />;
            })}
          </div>
        </>
      )}
      {itemsData.isError && (
        <h3>Faild to load data. Please Refresh the page</h3>
      )}
    </div>
  );
};

export default ShowItems;
