"use client";

import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Images
import logo from "@/assets/Images/Logo.png";
import cart from "@/assets/Images/Cart.png";

import { colors, fonts } from "@/themes";

const Header = () => {
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box
      width="100%"
      maxWidth="1286px"
      style={{
        padding: "30px 0",
        margin: "0 auto",
      }}
    >
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
            onClick={() => router.push("/")}
          />
        </Box>

        {/* Navigation Links */}
        <Flex align="center" justify="between" width="430px">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => router.push(item.path)}
              style={{
                fontSize: fonts.size.xs,
                fontWeight: fonts.weight.medium,
                padding: "0 10px",
                textDecoration: "none",
                color: colors.secondary.black,
                transition: "color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = colors.primary.yellow)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = colors.secondary.black)
              }
            >
              {item.name}
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
