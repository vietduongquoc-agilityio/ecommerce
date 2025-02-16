import { Theme } from "@radix-ui/themes";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Category from "@/components/Category";
import Funiro from "@/components/Funiro";
import Hero from "@/components/Hero";
import OurProduct from "@/components/Products";

export default function Home() {
  return (
    <Theme className={styles.page}>
      <Header />
        <main className={styles.main}>
          <Hero />
          <Category />
          <OurProduct />
          <Funiro />
        </main>
      <Footer />
    </Theme>
  );
}
