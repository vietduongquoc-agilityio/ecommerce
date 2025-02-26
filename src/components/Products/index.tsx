"use client";

import { useEffect, useState } from "react";
import { colors, fonts } from "@/themes";

// Services
import { getAllProducts } from "@/services/productService";

// Components
import { ItemCard } from "..";
import { Product } from "@/Interface/product";

const OurProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1260px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          color: colors.secondary.black,
          textAlign: "center",
          fontWeight: fonts.weight.bold,
          fontSize: fonts.size.xxl,
          marginBottom: "32px",
          marginTop: "56px",
        }}
      >
        Our Products
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(285px, 1fr))",
          justifyContent: "space-between",
          marginLeft: "20px",
        }}
      >
        {products.slice(0, 8).map((product) => (
          <ItemCard
            id={product.id}
            key={product.id}
            name={product.productName}
            description={product.description}
            price={product.price}
            image={product.image}
            documentId={product.documentId}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProduct;
