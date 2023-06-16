import React, { useContext } from "react";

import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

import AuthContext from "../../Store/AuthContext";
const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const signOutHandler = () => {
    authCtx.logOut();
    navigate("/sign-in");
  };
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
        {!authCtx.isLoggedIn && (
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
        )}
        {authCtx.isLoggedIn && (
          <li onClick={signOutHandler} className={styles.options}>
            Sign Out
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
