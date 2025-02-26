import Image from "next/image";
import { fonts, colors } from "@/themes";
import arrowDown from "@/assets/Images/Arrow-down.png";
import line from "@/assets/Images/Line.png";
import { Product } from "@/Interface/product";

interface RoutingDetailPageProps {
  product: Product;
}

const RoutingDetailPage = ({ product }: RoutingDetailPageProps) => {
  return (
    <section
      style={{
        width: "100%",
        height: "auto",
        background: colors.primary.dark,
        padding: "30px 100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "350px",
          height: "37px",
          alignItems: "center",
          fontSize: fonts.size.xs,
          fontWeight: fonts.weight.regular,
        }}
      >
        <p
          style={{
            color: colors.secondary.splight,
          }}
        >
          Home
        </p>
        <Image src={arrowDown} alt={"arrowDown"} />
        <p
          style={{
            color: colors.secondary.splight,
          }}
        >
          Shop
        </p>
        <Image src={arrowDown} alt={"arrowDown"} />
        <Image src={line} alt={"line"} />
        <p
          style={{
            color: colors.black,
          }}
        >
          {product.productName}
        </p>
      </div>
    </section>
  );
};

export default RoutingDetailPage;
