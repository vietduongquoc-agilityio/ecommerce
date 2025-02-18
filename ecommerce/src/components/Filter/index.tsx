"use client";

import Image from "next/image";
import { fonts, colors } from "@/themes";
import filterIcon from "@/assets/Images/Filter.png";
import line from "@/assets/Images/Line.png";

const FilterShowing = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "auto",
        background: colors.primary.dark,
        padding: "22px 100px",
        marginTop: "-35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "350px",
          height: "37px",
          alignItems: "center",
        }}
      >
        <Image
          src={filterIcon}
          alt={"filterIcon"}
          style={{ width: "75px", height: "28px", cursor: "not-allowed" }}
        />
        <Image src={line} alt={"line"} />
        <p
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.regular,
          }}
        >
          Showing 1–16 of 32 results
        </p>
      </div>
      <div
        style={{
          fontSize: fonts.size.md,
          fontWeight: fonts.weight.regular,
          display: "flex",
          justifyContent: "space-between",
          width: "450px",
        }}
      >
        <div style={{ display: "flex", gap: "17px", alignItems: "center" }}>
          <p>Show</p>
          <p
            style={{
              background: colors.white,
              padding: "12px 17px",
              color: colors.secondary.splight,
            }}
          >
            16
          </p>
        </div>
        <div style={{ display: "flex", gap: "17px", alignItems: "center" }}>
          <p>Short by</p>
          <p
            style={{
              background: colors.white,
              color: colors.secondary.splight,
              padding: "12px 86px 13px 30px",
            }}
          >
            Default
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilterShowing;
