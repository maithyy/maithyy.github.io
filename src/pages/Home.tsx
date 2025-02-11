import styles from "../styles/global.module.css";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>Maithy Le</h1>
      <div className={styles.gridContainer}>
        <p>Welcome to my portfolio!</p>
      </div>
    </div>
  );
};

export default Home;
