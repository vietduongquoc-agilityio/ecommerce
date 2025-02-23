import Banner from "@/assets/Images/Banner.png";
import Image from "next/image";
import arrowDown from "@/assets/Images/Arrow-down.png";
import LogoDetail from "@/assets/Images/LogoDetail.png";
import { fonts } from "@/themes";

const CheckOutBanner = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "20%",
          left: "50%",
          flexDirection: "column",
        }}
      >
        <Image
          src={LogoDetail}
          alt={"LogoDetail"}
          style={{
            width: "77px",
            height: "77px",
            marginBottom: "-15px",
          }}
        />
        <h2 style={{ fontSize: "48px", fontWeight: fonts.weight.medium }}>
          Checkout
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
            Checkout
          </p>
        </div>
      </div>
      <Image
        src={Banner}
        alt={"shop-banner"}
        style={{
          width: "100%",
        }}
      />
    </section>
  );
};

export default CheckOutBanner;
