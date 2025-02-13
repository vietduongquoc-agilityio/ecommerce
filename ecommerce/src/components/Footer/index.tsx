"use client";

import { Flex, Text } from "@radix-ui/themes";
import { colors, fonts } from "@/themes";

export default function Footer() {
  return (
    <footer className="footer">
      <Flex
        width="100%"
        maxWidth="1134px"
        style={{ borderBottom: "solid 1px #D9D9D9", paddingBottom: "10px" }}
      >
        <Flex direction="column" mr="136px">
          <Text
            className="heading"
            style={{ fontSize: fonts.size.lg, fontWeight: fonts.weight.bold }}
          >
            Funiro.
          </Text>
          <Text
            className="address"
            style={{
              width: "285px",
              fontSize: fonts.size.xs,
              fontWeight: fonts.weight.regular,
              color: colors.secondary.splight,
              marginTop: "50px",
            }}
          >
            400 University Drive Suite 200 Coral Gables,
            <div>FL 33134 USA </div>
          </Text>
        </Flex>
        <Flex
          direction="column"
          mr="144px"
          gap="46px"
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.medium,
          }}
        >
          <Text className="address" style={{ color: colors.secondary.splight }}>
            Links
          </Text>
          <p className="link">Home</p>
          <p className="link">Shop</p>
          <p className="link">About</p>
          <p className="link">Contact</p>
        </Flex>
        <Flex
          direction="column"
          mr="72px"
          gap="46px"
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.medium,
          }}
        >
          <Text
            className="address"
            style={{ color: colors.secondary.splight, width: "140px" }}
          >
            Help
          </Text>
          <p className="link">Payment Options</p>
          <p className="link">Returns</p>
          <p className="link">Privacy Policies</p>
        </Flex>
        <Flex
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.medium,
          }}
          direction="column"
          gap="46px"
          width="100%"
          maxWidth="286px"
        >
          <Text className="address" style={{ color: colors.secondary.splight }}>
            Newsletter
          </Text>
          <form className="form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input"
              style={{
                border: "none",
              }}
            />
            <button
              className="button"
              style={{
                padding: "8px 16px",
                background: "none",
                border: "none",
                cursor: "not-allowed",
              }}
            >
              Subscribe
            </button>
          </form>
        </Flex>
      </Flex>
      <div
        className="copyright"
        style={{ paddingTop: "20px", paddingBottom: "40px" }}
      >
        2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
}
