"use client";

import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { colors, fonts } from "@/themes";

// Images
import logo from "@/assets/Images/Logo.png";

// Components
import { CartPopover } from "..";

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
        height:"100px",
        margin: "0 auto",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height:"100%"
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

        <CartPopover />
      </section>
    </Box>
  );
};

export default Header;
