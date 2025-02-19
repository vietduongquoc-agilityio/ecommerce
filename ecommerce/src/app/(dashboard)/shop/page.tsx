import { Theme } from "@radix-ui/themes";
import styles from "@/app/page.module.css";

// Components
import {
  Achievement,
  FilterShowing,
  Footer,
  Header,
  // ProductList,
  ShopBanner,
} from "@/components";

const Shop = () => {
  return (
    <Theme className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ShopBanner />
        <FilterShowing />
        {/* <ProductList /> */}
        <Achievement />
      </main>
      <Footer />
    </Theme>
  );
};

export default Shop;
