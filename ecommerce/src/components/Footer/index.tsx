"use client";

import { Flex, Text } from "@radix-ui/themes";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Flex width="100%" maxWidth="1134px">
        <Flex direction="column" mr="136px">
          <Text
            style={{
              fontWeight: "700",
              fontSize: "24px",
              height: "36px",
              width: "85px",
              marginBottom: "50px",
            }}
            className={styles.heading}
          >
            Funiro.
          </Text>
          <Text
            className={styles.address}
            style={{
              width: "285px",
            }}
          >
            400 University Drive Suite 200 Coral Gables,
            <div>FL 33134 USA </div>
          </Text>
        </Flex>
        <Flex direction="column" mr="144px" gap="46px">
          <Text className={styles.address}>Links</Text>
          <p className={styles.link}>Home</p>
          <p className={styles.link}>Shop</p>
          <p className={styles.link}>About</p>
          <p className={styles.link}>Contact</p>
        </Flex>
        <Flex direction="column" mr="72px" gap="46px">
          <Text className={styles.address}>Help</Text>
          <p
            className={styles.link}
            style={{
              width: "140px",
            }}
          >
            Payment Options
          </p>
          <p className={styles.link}>Returns</p>
          <p className={styles.link}>Privacy Policies</p>
        </Flex>
        <Flex direction="column" gap="46px" width="100%" maxWidth="286px">
          <Text className={styles.address}>Newsletter</Text>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.input}
            />
            <p className={styles.link}>Subscribe</p>
          </form>
        </Flex>
      </Flex>
      <div className={styles.copyright}>2023 funiro. All rights reserved.</div>
    </footer>
  );
}
