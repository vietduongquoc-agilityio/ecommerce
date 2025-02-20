"use client";

import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";

// Images
import dining from "@/assets/Images/Dining.jpg";
import living from "@/assets/Images/Living.jpg";
import bed from "@/assets/Images/Bed-room.jpg";
import { colors, fonts } from "@/themes";

const Category = () => {
  return (
    <Box width="100%">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <Text
          style={{
            fontSize: fonts.size.xl,
            fontWeight: fonts.weight.bold,
            color: colors.secondary.black,
          }}
        >
          Browse The Range
        </Text>
        <Text
          style={{
            fontSize: fonts.size.md,
            fontWeight: fonts.weight.regular,
            color: colors.secondary.splight,
            marginTop: "10px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          width: "1183px",
          justifyContent: "space-between",  
          margin: "0 auto",
        }}
      >
        {[
          { src: dining, label: "Dining" },
          { src: living, label: "Living" },
          { src: bed, label: "Bedroom" },
        ].map((item) => (
          <Box
            key={item.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: fonts.size.lg,
              fontWeight: fonts.weight.semiBold,
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image
              src={item.src}
              alt={`${item.label}-icon`}
              style={{
                width: "375px",
                height: "480px",
                borderRadius: "10px",
                alignItems: "center",
                marginBottom: "25px"
              }}
            />
            <p>{item.label}</p>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default Category;
