"use client";

import { colors, fonts } from "@/themes";
import Image from "next/image";
import Button from "../Button";
import Product1 from "@/assets/Images/Product1.png";
import Product2 from "@/assets/Images/Product2.png";
import Product3 from "@/assets/Images/Product3.png";
import Product4 from "@/assets/Images/Product4.png";
import QuantitySelector from "@/utils/QuantitySelector";
import { useCartStore } from "@/stores/cartStore";
import { ItemCardProps } from "@/Interface/itemCard";

const InformationProduct = ({
  documentId,
  name,
  price,
  image,
}: ItemCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ documentId, name, price, image, quantity: 1 });
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "55px 0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <aside
        style={{
          display: "flex",
          width: "555px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "424px",
            justifyContent: "space-between",
          }}
        >
          {[Product1, Product2, Product3, Product4].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              width={80}
              height={85}
              style={{ borderRadius: fonts.borderRadius.sm }}
            />
          ))}
        </div>
        <Image
          src={image}
          alt={name}
          width={423}
          height={506}
          style={{ borderRadius: "10px" }}
        />
      </aside>
      <aside
        style={{
          width: "425px",
          height: "500px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          <h2
            style={{
              color: colors.black,
              fontWeight: fonts.weight.regular,
              fontSize: fonts.size.xxl,
            }}
          >
            {name}
          </h2>
          <p
            style={{
              color: colors.secondary.splight,
              fontWeight: fonts.weight.medium,
              fontSize: fonts.size.lg,
            }}
          >
            Rs. {price.toLocaleString("id-ID")}
          </p>
        </div>
        <div>
          <p
            style={{
              color: colors.black,
              fontWeight: fonts.weight.regular,
              fontSize: "13px",
              marginBottom: "22px",
            }}
          >
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div>
            <p
              style={{
                color: colors.secondary.splight,
                fontWeight: fonts.weight.regular,
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              Size
            </p>
            {["L", "XL", "XS"].map((size) => (
              <Button
                key={size}
                variant="pagination"
                style={{
                  width: "30px",
                  height: "30px",
                  fontSize: "13px",
                  borderRadius: "5px",
                  marginRight: "16px",
                  fontWeight: fonts.weight.regular,
                  padding: "0",
                }}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <QuantitySelector />
          <Button
            variant="outline"
            style={{
              borderRadius: "10px",
              fontSize: fonts.size.md,
              fontWeight: fonts.weight.regular,
              height: "65px",
              marginLeft: "20px",
            }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </div>
      </aside>
    </section>
  );
};

export default InformationProduct;
