import { Theme } from "@radix-ui/themes";
import styles from "../page.module.css";
import { getProductById } from "@/services/productService";

// Components
import {
  DescriptionProduct,
  Footer,
  Header,
  InformationProduct,
  RelatedProduct,
  RoutingDetailPage,
} from "@/components";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) return <>Loading...</>;

  return (
    <Theme className={styles.page}>
      <Header />
      <main className={styles.main}>
        <RoutingDetailPage product={product} />
        <InformationProduct
          name={product.productName}
          description={product.description}
          price={product.price}
          image={product.image}
          documentId={product.documentId}
        />
        <DescriptionProduct />
        <RelatedProduct />
      </main>
      <Footer />
    </Theme>
  );
};

export default ProductDetailPage;
