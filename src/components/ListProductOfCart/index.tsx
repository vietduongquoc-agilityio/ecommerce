"use client";

import { colors, fonts } from "@/themes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import living from "@/assets/Images/Living.jpg";
import deleteIcon from "@/assets/Images/DeleteIcon.png";
import Button from "../Button";

const ListProductOfCart = () => {
  const router = useRouter();
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1240px",
        margin: "0 auto",
        backgroundColor: colors.white,
        padding: "72px 0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <aside
        style={{
          width: "100%",
          maxWidth: "817px",
        }}
      >
        <div
          style={{
            background: colors.primary.dark,
            padding: "15px 135px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.medium,
            color: colors.black,
            marginBottom: "100px",
          }}
        >
          <p style={{ width: "39.1%" }}>Product</p>
          <p style={{ width: "21.7%" }}>Price</p>
          <p style={{ width: "12.9%" }}>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.regular,
            display: "flex",
            width: "100%",
            maxWidth: "817px",
            justifyContent: "space-around",
          }}
        >
          <Image
            src={living}
            alt={"living"}
            style={{
              width: "108px",
              height: "105px",
              borderRadius: "10px",
            }}
          />
          <p style={{ color: colors.secondary.splight }}>Asgaard sofa</p>
          <p style={{ color: colors.secondary.splight }}>Rs. 250,000.00</p>
          <Button
            variant="outline"
            style={{
              width: "32px",
              height: "32px",
              padding: 0,
              borderRadius: "5px",
            }}
          >
            1
          </Button>
          <p>Rs. 250,000.00</p>
          <Image src={deleteIcon} alt={"deleteIcon"} />
        </div>
      </aside>
      <aside
        style={{
          width: "100%",
          maxWidth: "393px",
          background: colors.primary.dark,
          padding: "15px 75px 80px 75px",
        }}
      >
        <h2
          style={{
            fontWeight: fonts.weight.semiBold,
            fontSize: fonts.size.xl,
          }}
        >
          Cart Totals
        </h2>
        <div
          style={{
            display: "flex",
            marginTop: "61px",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontWeight: fonts.weight.medium,
              fontSize: fonts.size.xs,
              color: colors.black,
            }}
          >
            Subtotal
          </p>
          <p
            style={{
              fontWeight: fonts.weight.regular,
              fontSize: fonts.size.xs,
              color: colors.secondary.splight,
            }}
          >
            Rs. 250,000.00
          </p>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "31px",
            marginBottom: "42px",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontWeight: fonts.weight.medium,
              fontSize: fonts.size.xs,
              color: colors.black,
            }}
          >
            Total
          </p>
          <p
            style={{
              fontWeight: fonts.weight.medium,
              fontSize: fonts.size.md,
              color: colors.primary.yellow,
            }}
          >
            Rs. 250,000.00
          </p>
        </div>
        <Button
          variant="outline"
          style={{ padding: "14px 58px", borderRadius: fonts.borderRadius.md }}
          onClick={() => router.push("/checkout")}
        >
          Check Out
        </Button>
      </aside>
    </section>
  );
};

export default ListProductOfCart;
