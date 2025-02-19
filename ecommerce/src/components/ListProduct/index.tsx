"use client";

import { useEffect, useState } from "react";
import productService, { Product } from "@/services/productService";

import { colors } from "@/themes";
import { ItemCard } from "..";


export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await productService.getAll();
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(285px, 1fr))",
        gap: "20px",
        padding: "20px",
        backgroundColor: colors.white,
        justifyItems: "center",
      }}
    >
      {products.map((product) => (
        <ItemCard
          key={product.id}
          name={product.productName}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
