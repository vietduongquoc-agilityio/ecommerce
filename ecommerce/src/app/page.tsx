import { Theme } from "@radix-ui/themes";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Category from "@/components/Category";

export default function Home() {
  return (
    <Theme className={styles.page}>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <Category />
        </main>
      </div>
      <Footer />
    </Theme>
  );
}
