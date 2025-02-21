import { Theme } from "@radix-ui/themes";
import styles from "./page.module.css";

// Components
import {
  DescriptionProduct,
  Footer,
  Header,
  InformationProduct,
  RelatedProduct,
  RoutingDetailPage,
} from "@/components";

const ProductDetailPage = () => {
  return (
    <Theme className={styles.page}>
      <Header />
      <main className={styles.main}>
        <RoutingDetailPage />
        <InformationProduct />
        <DescriptionProduct />
        <RelatedProduct />
      </main>
      <Footer />
    </Theme>
  );
};

export default ProductDetailPage;
