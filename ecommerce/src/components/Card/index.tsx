"use client";
import Image from "next/image";

import { colors, fonts } from "@/themes";
import Leviosa from "@/assets/Images/Product1.png";

const ItemCard = () => {
  return (
    <article className="card">
      <Image src={Leviosa} alt={"leviosa"}></Image>
      <div>
        <p
          style={{
            color: colors.secondary.black,
            fontWeight: fonts.weight.semiBold,
            fontSize: fonts.size.lg,
          }}
        >
          Syltherine
        </p>
        <p
          style={{
            color: colors.secondary.splight,
            fontWeight: fonts.weight.medium,
            fontSize: fonts.size.xs,
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
    </article>
  );
};

export default ItemCard;
