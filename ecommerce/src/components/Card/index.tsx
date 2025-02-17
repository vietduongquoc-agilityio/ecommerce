"use client";

import Image from "next/image";
import { useState } from "react";
import { colors, fonts } from "@/themes";
import Leviosa from "@/assets/Images/Product1.png";
import Button from "../Button";

const ItemCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      style={{
        position: "relative",
        width: "285px",
        height: "446px",
        background: "#F4F5F7",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Image
        src={Leviosa}
        alt="leviosa"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      {/* Product Details */}
      <div style={{ padding: "16px"}}>
        <p
          style={{
            color: colors.secondary.black,
            fontWeight: fonts.weight.semiBold,
            fontSize: fonts.size.lg,
            marginBottom: "8px",
          }}
        >
          Syltherine
        </p>
        <p
          style={{
            color: colors.secondary.splight,
            fontWeight: fonts.weight.medium,
            fontSize: fonts.size.xs,
            marginBottom: "8px",
          }}
        >
          Stylish cafe chair
        </p>
        <p
          style={{
            color: colors.secondary.black,
            fontWeight: fonts.weight.semiBold,
            fontSize: fonts.size.md,
          }}
        >
          Rp 2.500.000
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
        }}
      >
         <Button variant="secondary">Add to Cart</Button>
      </div>
    </article>
  );
};

export default ItemCard;
