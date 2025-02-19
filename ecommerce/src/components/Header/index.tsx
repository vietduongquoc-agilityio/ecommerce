"use client";

import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

// Images
import logo from "@/assets/Images/Logo.png";
import cart from "@/assets/Images/Cart.png";

import { colors, fonts } from "@/themes";

const Header = () => {
  return (
    <Box width="100%" maxWidth="1286px">
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box>
          <Image
            src={logo}
            alt="logo"
            style={{
              width: "170px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Box>

        {/* Navigation Links */}
        <Flex align="center" justify="between" width="430px">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href=""
              style={{
                fontSize: fonts.size.xs,
                fontWeight: fonts.weight.medium,
                padding: "0 10px",
                textDecoration: "none",
                color: colors.secondary.black,
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = colors.primary.yellow)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = colors.secondary.black)
              }
            >
              {item}
            </Link>
          ))}
        </Flex>

        {/* Cart Icon */}
        <Image
          src={cart}
          width={25}
          height={22}
          alt="cart-icon"
          style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </section>
    </Box>
  );
};

export default Header;
