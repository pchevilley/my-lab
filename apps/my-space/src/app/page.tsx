import { AboutMe } from "./about-me/AboutMe";
import { Header } from "./header/Header";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <AboutMe />
    </main>
  );
}
