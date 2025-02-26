"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "..";
import { colors, fonts } from "@/themes";
import { useCartStore } from "@/stores/cartStore";
import { ItemCardProps } from "@/Interface/itemCard";

const ItemCard: React.FC<ItemCardProps> = ({
  documentId,
  name,
  description,
  price,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ documentId, name, price, image, quantity: 1 });
  };

  const handleNavigateToDetail = () => {
    router.push(`/detail/${documentId}`);
  };

  return (
    <article
      style={{
        position: "relative",
        width: "285px",
        height: "446px",
        background: "#F4F5F7",
        overflow: "hidden",
        cursor: "pointer",
        marginBottom: "32px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigateToDetail}
    >
      <Image
        src={image}
        alt={name}
        width={285}
        height={300}
        style={{ objectFit: "cover" }}
      />

      <div style={{ padding: "16px" }}>
        <p
          style={{
            color: colors.secondary.black,
            fontWeight: fonts.weight.semiBold,
            fontSize: fonts.size.lg,
            marginBottom: "8px",
          }}
        >
          {name}
        </p>
        <p
          style={{
            color: colors.secondary.splight,
            fontWeight: fonts.weight.medium,
            fontSize: fonts.size.xs,
            marginBottom: "8px",
          }}
        >
          {description}
        </p>
        <p
          style={{
            color: colors.secondary.black,
            fontWeight: fonts.weight.semiBold,
            fontSize: fonts.size.md,
          }}
        >
          Rp {price.toLocaleString("id-ID")}
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: colors.secondary.black,
          opacity: isHovered ? 0.72 : 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s ease",
          pointerEvents: isHovered ? "auto" : "none",
        }}
      >
        <Button variant="secondary" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </article>
  );
};

export default ItemCard;
