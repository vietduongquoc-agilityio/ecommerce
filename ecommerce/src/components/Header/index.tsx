"use client";

import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import logo from "@/assets/Images/Logo.png";
import styles from "./style.module.css";
import Link from "next/link";
import cart from "@/assets/Images/Cart.png"

export default function Header() {
  return (
    <Box width="100%" maxWidth="1286px">
      <Flex align="center" justify="between">
        <Box>
          <Image src={logo} alt="logo" className={`${styles.image} ${styles.logo}`} />
        </Box>
        <Flex align="center" justify="between" width="430px">
          <Link href="" className={styles.link}>Home</Link>
          <Link href="" className={styles.link}>Shop</Link>
          <Link href="" className={styles.link}>About</Link>
          <Link href="" className={styles.link}>Contact</Link>
        </Flex>
        <Image src={cart} width="25" height="22" alt="cart-icon" className={`${styles.image} ${styles.cart}`} />
      </Flex>
    </Box>
  );
}
