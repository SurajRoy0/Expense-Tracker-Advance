import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div>Welcome to expense tracker</div>
      <div>
        <NavLink to={"/user-profile"} className={styles["update-profile"]}>
          Update Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
