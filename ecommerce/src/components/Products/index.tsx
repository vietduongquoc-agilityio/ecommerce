"use client";

import ItemCard from "@/components/Card";
import { colors, fonts } from "@/themes";

const OurProduct = () => {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1236px",
        margin: "auto",
      }}
    >
      <h2
        style={{
          color: colors.secondary.black,
          textAlign: "center",
          fontWeight: fonts.weight.bold,
          fontSize: fonts.size.xxl,
          marginBottom: "32px",
        }}
      >
        Our Products
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <ItemCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default OurProduct;
