import { Theme } from "@radix-ui/themes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Theme>
      <div className={styles.page}>
        <main className={styles.main}></main>
        <h1>VIETDAY</h1>
        <footer className={styles.footer}></footer>
      </div>
    </Theme>
  );
}
