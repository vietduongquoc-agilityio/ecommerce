import Image from "next/image";
import { Text } from "@radix-ui/themes";
import { colors, fonts } from "@/themes";

// Images
import hero from "@/assets/Images/Hero.png";

// Components
import { Button } from "..";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          background: colors.primary.light,
          width: "645px",
          padding: "62px 43px 37px 39px",
          position: "absolute",
          top: "155px",
          right: "58px",
          height: "445px",
          borderRadius: fonts.borderRadius.sm,
        }}
      >
        <Text
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.semiBold,
            color: colors.secondary.dark,
          }}
        >
          New Arrival
        </Text>
        <Text
          style={{
            fontSize: fonts.size.xxxl,
            fontWeight: fonts.weight.bold,
            color: colors.primary.yellow,
            width: "400px",
          }}
        >
          Discover Our New Collection
        </Text>
        <Text
          style={{
            fontSize: fonts.size.sm,
            fontWeight: fonts.weight.medium,
            color: colors.secondary.dark,
            width: "546px",
            marginBottom: "45px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </Text>
        <div
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.bold,
            width: "225px",
            height: "75px",
          }}
        >
          <Button variant="primary" fullWidth fullHeight>
            BY NOW
          </Button>
        </div>
      </div>
      <Image
        src={hero}
        alt="hero"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </section>
  );
};

export default Hero;
