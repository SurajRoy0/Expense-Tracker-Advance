import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./UserProfile.module.css";
import axios from "axios";
import AuthContext from "../../Store/AuthContext";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const authCtx = useContext(AuthContext);

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const getDataHandler = async () => {
    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD-vOPcurI7hmCvWd4tS1jCqd71PTwut_M`,
        {
          idToken: authCtx.token,
        }
      );
      // Access the response data from res.data
      setName(res.data.users[0].displayName);
      setImage(res.data.users[0].photoUrl);
    } catch (error) {
      console.error(error);
      toast.error("Failed! Reload Again", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    getDataHandler();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD-vOPcurI7hmCvWd4tS1jCqd71PTwut_M`,
        {
          idToken: authCtx.token,
          displayName: name,
          photoUrl: image,
          returnSecureToken: true,
        }
      );
      toast.success("Updated Successfully", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
      setName("");
      setImage("");
      getDataHandler();
      console.log(res);
    } catch (error) {
      toast.error("Faild! Please Try Again", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    }
  };
  return (
    <div className={styles.container}>
      <ToastContainer />
      <h2 className={styles.title}>Update Profile</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Image URL</label>
          <input
            className={styles.input}
            type="tex"
            value={image}
            onChange={handleImageChange}
            required
          />
        </div>

        <button className={styles.button} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
