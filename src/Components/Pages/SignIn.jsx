import React, { useContext, useState } from "react";
import styles from "./SignIn.module.css";
import axios from "axios";
import AuthContext from "../../Store/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const goToSignUpHandler = () => {
    navigate("/sign-up");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.trim().length < 8) {
      setIsPasswordValid(true);
      return;
    }

    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-vOPcurI7hmCvWd4tS1jCqd71PTwut_M`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      authCtx.isLogin(res.data.idToken);
      toast.success("Login Successfull", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      toast.error("Login Failed! Please Try Again", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <h2 className={styles.title}>Sign In</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {isPasswordValid && (
            <p className={styles["wrong-password"]}>
              Minimum 8 caracters required
            </p>
          )}
        </div>

        <button className={styles.button} type="submit">
          Sign In
        </button>
      </form>
      <p onClick={goToSignUpHandler} className={styles["change-auth"]}>
        Don't have any account? Create New Account
      </p>
    </div>
  );
};

export default SignIn;
