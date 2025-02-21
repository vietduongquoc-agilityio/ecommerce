"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Cart from "@/assets/Images/Cart.png";
import styles from "./styles.module.css";
import CartIcon from "@/assets/Images/CartIcon.png";
import Product1 from "@/assets/Images/Product1.png";
import Product2 from "@/assets/Images/Product2.png";
import { colors, fonts } from "@/themes";
import DeleteVector from "@/assets/Images/DeleteVector.png";
import Button from "../Button";

const CartPopover = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Image
          src={Cart}
          width={25}
          height={22}
          alt="cart-icon"
          className={styles.cartIcon}
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className={styles.overlay} />

        {/* Cart Popover Content */}
        <Dialog.Content className={styles.content}>
          <div className={styles.header}>
            <Dialog.Title className={styles.title}>Shopping cart</Dialog.Title>

            {/* Close Button */}
            <Dialog.Close asChild>
              <Image
                src={CartIcon}
                alt={"CartIcon"}
                className={styles.closeButton}
              ></Image>
            </Dialog.Close>
          </div>
          <div style={{ padding: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "30px",
                justifyContent: "space-between",
              }}
            >
              <Image
                src={Product1}
                alt={"Product1"}
                style={{
                  width: "105px",
                  height: "105px",
                  fontWeight: fonts.weight.regular,
                  fontSize: fonts.size.xs,
                  color: colors.black,
                  borderRadius: fonts.borderRadius.sm,
                }}
              />
              <div style={{ width: "130px" }}>
                <p
                  style={{
                    fontWeight: fonts.weight.regular,
                    fontSize: fonts.size.xs,
                    color: colors.black,
                  }}
                >
                  Asgaard sofa
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "300",
                      fontSize: fonts.size.xs,
                    }}
                  >
                    1
                  </p>
                  <p
                    style={{
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    X
                  </p>
                  <p
                    style={{
                      fontWeight: fonts.weight.medium,
                      fontSize: "12px",
                      color: colors.primary.yellow,
                    }}
                  >
                    Rs. 250,000.00
                  </p>
                </div>
              </div>
              <Image
                className={styles.cartIcon}
                src={DeleteVector}
                alt={"DeleteVector"}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                src={Product2}
                alt={"Product2"}
                style={{
                  width: "105px",
                  height: "105px",
                  fontWeight: fonts.weight.regular,
                  fontSize: fonts.size.xs,
                  color: colors.black,
                  borderRadius: fonts.borderRadius.sm,
                }}
              />
              <div style={{ width: "130px" }}>
                <p
                  style={{
                    fontWeight: fonts.weight.regular,
                    fontSize: fonts.size.xs,
                    color: colors.black,
                  }}
                >
                  Living lamp
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "300",
                      fontSize: fonts.size.xs,
                    }}
                  >
                    1
                  </p>
                  <p
                    style={{
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    X
                  </p>
                  <p
                    style={{
                      fontWeight: fonts.weight.medium,
                      fontSize: "12px",
                      color: colors.primary.yellow,
                    }}
                  >
                    Rs. 250,000.00
                  </p>
                </div>
              </div>
              <Image
                className={styles.cartIcon}
                src={DeleteVector}
                alt={"DeleteVector"}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
                marginTop: "250px",
              }}
            >
              <p
                style={{
                  fontWeight: fonts.weight.regular,
                  fontSize: fonts.size.xs,
                  color: colors.black,
                }}
              >
                Subtotal
              </p>
              <p
                style={{
                  fontWeight: fonts.weight.semiBold,
                  fontSize: fonts.size.xs,
                  color: colors.primary.yellow,
                }}
              >
                Rs. 520,000.00
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "32px 40px",
              borderTop: "solid 1px #d9d9d9",
            }}
          >
            <Button
              variant="outline"
              style={{
                padding: "6px 30px",
                borderRadius: "50px",
                fontWeight: fonts.weight.regular,
                fontSize: "12px",
                marginRight: "20px",
              }}
            >
              Cart
            </Button>
            <Button
              variant="outline"
              style={{
                padding: "6px 30px",
                borderRadius: "50px",
                fontWeight: fonts.weight.regular,
                fontSize: "12px",
              }}
            >
              Checkout
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CartPopover;
