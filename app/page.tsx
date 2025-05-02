import styles from "./page.module.css";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <h1>Hello This is my blogg</h1>
      </div>
    </>
  );
}
