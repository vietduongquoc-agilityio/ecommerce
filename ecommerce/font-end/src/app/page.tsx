import { Theme } from "@radix-ui/themes";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Theme>
      <div className={styles.page}>
        <main className={styles.main}></main>
        <Header />
        <footer className={styles.footer}></footer>
      </div>
    </Theme>
  );
}
