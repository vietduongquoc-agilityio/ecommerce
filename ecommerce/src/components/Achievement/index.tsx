"use client";

import { fonts, colors } from "@/themes";
import Image, { StaticImageData } from "next/image";
import Quality from "@/assets/Images/Shop-quality.png";
import Protection from "@/assets/Images/Shop-protection.png";
import Shipping from "@/assets/Images/Shop-shipping.png";
import Support from "@/assets/Images/Shop-support.png";

interface ItemCardProps {
  image: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const AchievementItem: React.FC<ItemCardProps> = ({ image, alt, title, description }) => (
  <li style={achievementItemStyle}>
    <Image src={image} alt={alt} />
    <div>
      <p style={achievementTitleStyle}>{title}</p>
      <p style={achievementDescriptionStyle}>{description}</p>
    </div>
  </li>
);

const achievementItemStyle = {
  display: "flex",
  gap: "14px",
  alignItems: "center",
};

const achievementTitleStyle = {
  fontSize: fonts.size.lg,
  fontWeight: fonts.weight.semiBold,
};

const achievementDescriptionStyle = {
  fontSize: fonts.size.md,
  fontWeight: fonts.weight.medium,
  color: colors.secondary.splight,
};

const Achievement = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "auto",
        background: colors.secondary.linen,
        marginBottom: "-32px",
      }}
    >
      <ul
        style={{
          padding: "100px 53px",
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AchievementItem
          image={Quality}
          alt={"quality"}
          title={"High Quality"}
          description={"crafted from top materials"}
        />
        <AchievementItem
          image={Protection}
          alt={"protection"}
          title={"Warranty Protection"}
          description={"Over 2 years"}
        />
        <AchievementItem
          image={Shipping}
          alt={"shipping"}
          title={"Free Shipping"}
          description={"Order over 150 $"}
        />
        <AchievementItem
          image={Support}
          alt={"support"}
          title={"24 / 7 Support"}
          description={"Dedicated support"}
        />
      </ul>
    </section>
  );
};

export default Achievement;
