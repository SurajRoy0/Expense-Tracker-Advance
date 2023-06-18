import styles from "./Home.module.css";
import AddExpense from "../UI/AddExpense";
import ShowItems from "../UI/ShowItems";
const Home = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to expense tracker</h2>
      <div className={styles["expense-form"]}>
        <AddExpense />
        <ShowItems />
      </div>
    </div>
  );
};

export default Home;
