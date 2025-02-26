"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import CartIcon from "@/assets/Images/CartIcon.png";
// import Product1 from "@/assets/Images/Product1.png";
// import Product2 from "@/assets/Images/Product2.png";
import { colors, fonts } from "@/themes";
import DeleteVector from "@/assets/Images/DeleteVector.png";
import Button from "../Button";
import { useCartStore } from "@/stores/cartStore";

const CartPopover = () => {
  const router = useRouter();
  const { cart } = useCartStore();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost">🛒 Cart ({cart.length})</Button>
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
                alt="CartIcon"
                className={styles.closeButton}
              />
            </Dialog.Close>
          </div>

          <div style={{ padding: "40px" }}>
            {/* Cart Items */}
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.documentId}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "30px",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={105}
                    height={105}
                    style={{ borderRadius: fonts.borderRadius.sm }}
                  />
                  <div style={{ width: "130px" }}>
                    <p
                      style={{
                        fontWeight: fonts.weight.regular,
                        fontSize: fonts.size.xs,
                        color: colors.black,
                      }}
                    >
                      {item.name}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "15px",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ fontWeight: "300", fontSize: fonts.size.xs }}>
                        {item.quantity}
                      </p>
                      <p style={{ fontWeight: "300", fontSize: "12px" }}>X</p>
                      <p
                        style={{
                          fontWeight: fonts.weight.medium,
                          fontSize: "12px",
                          color: colors.primary.yellow,
                        }}
                      >
                        Rs. {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                  <Image
                    className={styles.cartIcon}
                    src={DeleteVector}
                    alt="DeleteVector"
                  />
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Your cart is empty.
              </p>
            )}

            {/* Subtotal */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
                marginTop: "20px",
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
                Rs. {calculateSubtotal().toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
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
              onClick={() => router.push("/cart")}
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
              onClick={() => router.push("/checkout")}
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
