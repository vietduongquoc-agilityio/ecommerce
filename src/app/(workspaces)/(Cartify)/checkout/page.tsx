import { Theme } from "@radix-ui/themes";
import styles from "./page.module.css";

// Components
import {
  Header,
  Footer,
  Achievement,
  CheckOutBanner,
  BillingForm,
} from "@/components";

const Cart = () => {
  return (
    <Theme className={styles.page}>
      <Header />
      <main className={styles.main}>
        <CheckOutBanner />
        <BillingForm />
        <Achievement /> 
      </main>
      <Footer />
    </Theme>
  );
};

export default Cart;
