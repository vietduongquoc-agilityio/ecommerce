import Image from "next/image";
import living from "@/assets/Images/Living.jpg";
import { colors, fonts } from "@/themes";

const DescriptionProduct = () => {
  return (
    <section
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "35px 0 61px 0",
        borderTop: "solid 1px #D9D9D9",
        borderBottom: "solid 1px #D9D9D9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "1025px" }}>
        <h2
          style={{
            fontSize: fonts.size.lg,
            fontWeight: fonts.weight.medium,
            justifyContent: "center",
            display: "flex",
          }}
        >
          Description
        </h2>
        <p
          style={{
            fontWeight: fonts.weight.regular,
            fontSize: fonts.size.xs,
            color: colors.secondary.splight,
            padding: "35px 0",
          }}
        >
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p
          style={{
            fontWeight: fonts.weight.regular,
            fontSize: fonts.size.xs,
            color: colors.secondary.splight,
          }}
        >
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div style={{ width: "1240px", display: "flex", marginTop: "55px" }}>
        <Image
          src={living}
          alt={"living1"}
          style={{
            width: "605px",
            height: "348px",
            borderRadius: "10px",
            marginRight: "30px",
          }}
        ></Image>
        <Image
          src={living}
          alt={"living2"}
          style={{ width: "605px", height: "348px", borderRadius: "10px" }}
        ></Image>
      </div>
    </section>
  );
};

export default DescriptionProduct;
