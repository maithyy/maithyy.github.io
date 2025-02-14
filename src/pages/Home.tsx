import styles from "../styles/global.module.css";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>Maithy Le</h1>
      <div className={styles.gridContainer}>
        <div>
          <p>
            Hi, I'm Maithy (pronounced "my-tee"), and I'm a{" "}
            <strong>first-gen</strong> college student studying Computer Science{" "}
            at UC Irvine!
          </p>
          <p>
            I love finding ways to use technology to{" "}
            <strong>help people</strong> and building software that has a{" "}
            <strong>meaningful impact</strong>.
          </p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/maithy_1.jpeg`}
          alt="Maithy Le"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Home;
