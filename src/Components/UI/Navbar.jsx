import React, { useContext } from "react";

import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

import AuthContext from "../../Store/AuthContext";
const Navbar = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>
      <ul className={styles.nav}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.ActiveNav : styles.options
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) =>
              isActive ? styles.ActiveNav : styles.options
            }
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
