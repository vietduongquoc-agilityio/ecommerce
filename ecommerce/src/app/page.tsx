import { Theme } from "@radix-ui/themes";
import styles from "./page.module.css";

// Components
import {
  // Category,
  Footer,
  // Funiro,
  Header,
  // Hero,
  // OurProduct,
  // Slider,
} from "@/components";

const Home = () => {
  return (
    <Theme className={styles.page}>
      <Header />
      {/* <main className={styles.main}>
        <Hero />
        <Category />
        <OurProduct />
        <Slider />
        <Funiro />
      </main> */}
      <Footer />
    </Theme>
  );
};

export default Home;
