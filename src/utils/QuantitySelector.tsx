"use client";

import { Button } from "@/components";
import { colors } from "@/themes";
import { useState } from "react";

const QuantitySelector = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "123px",
        height: "65px",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant={count === 0 ? "disabled" : "outline"}
        onClick={() => setCount((prev) => Math.max(0, prev - 1))}
        style={{
          color: colors.black,
          padding: "1px",
          backgroundColor: count === 0 ? colors.white : "transparent",
          border: "none",
          opacity: count === 0 ? 0.5 : 1,
          cursor: count === 0 ? "not-allowed" : "pointer",
        }}
      >
        -
      </Button>
      <span style={{ fontSize: "18px", fontWeight: "bold" }}>{count}</span>
      <Button
        variant="outline"
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          color: colors.black,
          padding: "1px",
          backgroundColor: colors.white,
          border: "none",
        }}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
