import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";

// Images
import funiro from "@/assets/Images/Funiro.png";
import { colors, fonts } from "@/themes";

const Funiro = () => {
  return (
    <Box width="100%">
      <div
        style={{
          display: "flex",
            justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: fonts.size.md,
            fontWeight: fonts.weight.semiBold,
            color: colors.secondary.splight,
          }}
        >
          Share your setup with
        </Text>
        <Text
          style={{
            marginTop: "10px",
            fontSize: fonts.size.xxl,
            fontWeight: fonts.weight.bold,
            color: colors.secondary.black,
          }}
        >
          #FuniroFurniture
        </Text>
      </div>
      <Image src={funiro} alt="banner-funiro" />
    </Box>
  );
};

export default Funiro;
