"use client";

import { useEffect, useState } from "react";
import productService, { Product } from "@/services/productService";
import { colors } from "@/themes";
import { ItemCard } from "..";
import Pagination from "@/components/Pagination";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

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

  const pageCount = Math.ceil(products.length / pageSize);

  const displayedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <section style={{ width: "100%", maxWidth: "1260px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(285px, 1fr))",
          paddingTop: "65px",
          backgroundColor: colors.white,
        }}
      >
        {displayedProducts.map((product) => (
          <ItemCard
            key={product.id}
            name={product.productName}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          pageCount={pageCount}
        />
      </div>
    </section>
  );
}
