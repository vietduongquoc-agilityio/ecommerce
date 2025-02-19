import Banner from "@/assets/Images/Banner.png";
import Image from "next/image";
import arrowDown from "@/assets/Images/Arrow-down.png";
import { fonts } from "@/themes";

const ShopBanner = () => {
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
          alignItems: "center",
          position: "absolute",
          top: "121px",
          right: "658px",
          flexDirection: "column",
        }}
      >
        <h2 style={{ fontSize: "48px", fontWeight: fonts.weight.medium }}>
          Shop
        </h2>
        <div
          style={{
            display: "flex",
            height: "24px",
            width: "121px",
          }}
        >
          <p
            style={{
              fontSize: fonts.size.xs,
              fontWeight: fonts.weight.medium,
              display: "flex",
              alignItems: "center",
            }}
          >
            Home
            <span style={{ padding: "8px", marginTop: "7px" }}>
              <Image src={arrowDown} alt={"arrowDown"} />
            </span>
          </p>
          <p
            style={{
              fontSize: fonts.size.xs,
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
            }}
          >
            Shop
          </p>
        </div>
      </div>
      <Image
        src={Banner}
        alt={"shop-banner"}
        style={{
          height: "auto",
          display: "block",
        }}
      />
    </section>
  );
};

export default ShopBanner;
