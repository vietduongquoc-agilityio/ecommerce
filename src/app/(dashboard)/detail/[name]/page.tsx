import { Theme } from "@radix-ui/themes";
import styles from "@/app/page.module.css";
import productService from "@/services/productService";
import {
  DescriptionProduct,
  Footer,
  Header,
  InformationProduct,
  RelatedProduct,
  RoutingDetailPage,
} from "@/components";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const product = await productService.getById(Number(id));
  console.log(">>>>>>>>>>>>>>>>>",product);

  if (!product) {
    return <h1>Product not found</h1>;
  }

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
}
