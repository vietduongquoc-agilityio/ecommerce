"use client";

import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import logo from "../../../public/Images/logo.png";
import cart from "../../../public/Images/cart.png";
import NavLink from "../NavLink";
import styles from "./index.module.css";

export default function Header() {
  return (
    <Box width="100%" maxWidth="1286px">
      <Flex align="center" justify="between">
        <Box>
          <Image src={logo} alt="logo" className={`${styles.image} ${styles.logo}`} />
        </Box>
        <Flex align="center" justify="between" width="430px">
          <NavLink href="">Home</NavLink>
          <NavLink href="">Shop</NavLink>
          <NavLink href="">About</NavLink>
          <NavLink href="">Contact</NavLink>
        </Flex>
        <Image src={cart} width="25" height="22" alt="cart-icon" className={`${styles.image} ${styles.cart}`} />
      </Flex>
    </Box>
  );
}
