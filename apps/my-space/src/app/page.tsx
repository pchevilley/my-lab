import { AboutMe } from "./about-me/AboutMe";
import { Career } from "./career/Career";
import { Header } from "./header/Header";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <AboutMe />
        <Career />
    </main>
  );
}
