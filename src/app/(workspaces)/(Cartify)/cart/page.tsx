import { Theme } from "@radix-ui/themes";
import styles from "./page.module.css";

// Components
import {
  Achievement,
  CartBanner,
  Footer,
  Header,
  ListProductOfCart,
} from "@/components";

const Cart = () => {
  return (
    <Theme className={styles.page}>
      <Header />
      <main className={styles.main}>
        <CartBanner />
        <ListProductOfCart />
        <Achievement />
      </main>
      <Footer />
    </Theme>
  );
};

export default Cart;
