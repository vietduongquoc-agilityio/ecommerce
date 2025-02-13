"use client";

import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import dining from "@/assets/Images/Dining-room.png";
import living from "@/assets/Images/Living-room.png";
import bed from "@/assets/Images/Bed-room.png";
import styles from "./style.module.css";

export default function Category() {
  return (
    <Box width="100%" maxWidth="1183px">
      <Flex align="center" justify="between" direction="column">
        <h1 className={styles.heading}>Browse The Range</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Flex>
      <Flex align="center" justify="between" gap="40px" mt="50px">
        <Box className={styles.title}>
          <Image src={dining} alt="dining-room" />
          <p>Dining</p>
        </Box>
        <Box className={styles.title}>
          <Image src={living} alt="living-icon" />
          <p>Living</p>
        </Box>
        <Box className={styles.title}>
          <Image src={bed} alt="bed-icon" />
          <p>Bedroom</p>
        </Box>
      </Flex>
    </Box>
  );
}
