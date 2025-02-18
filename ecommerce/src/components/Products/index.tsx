"use client";

import { colors, fonts } from "@/themes";

// Components
import { ItemCard } from "..";

const OurProduct = () => {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1300px",
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
          gap: "32px",
          justifyContent: "center",
          paddingLeft:"15px"
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
