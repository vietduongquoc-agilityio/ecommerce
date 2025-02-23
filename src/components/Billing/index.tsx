"use client";

import * as React from "react";
import Input from "../Input";
import { colors, fonts } from "@/themes";
import styles from "../CartPopover/styles.module.css";
import Button from "../Button";

const BillingForm = () => {
  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "1245px",
        margin: "0 auto",
        justifyContent: "space-between",
        padding: "100px 0 ",
      }}
    >
      <aside
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "455px",
        }}
      >
        <h2
          style={{
            fontWeight: fonts.weight.semiBold,
            fontSize: "36px",
            color: colors.black,
            marginBottom: "37px",
          }}
        >
          Billing details
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label className={styles.labelInput}>First Name</label>
            <Input
              style={{ marginBottom: "23px", marginTop: "23px" }}
              className={styles.contentInput}
              typeInput="text"
              placeholder="Enter..."
            />
          </div>
          <div>
            <label className={styles.labelInput}>Last Name</label>
            <Input
              style={{ marginBottom: "23px", marginTop: "23px" }}
              className={styles.contentInput}
              typeInput="text"
              placeholder="Enter..."
            />
          </div>
        </div>
        <label className={styles.labelInput}>Country / Region</label>
        <select className={styles.contentInput} name="Country" id="Country">
          <option value="VietNam">Viet Nam</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
        </select>
        <label className={styles.labelInput}>Street address</label>
        <Input
          className={styles.contentInput}
          typeInput="text"
          placeholder="Enter..."
        />
        <label className={styles.labelInput}>Town / City</label>
        <Input
          className={styles.contentInput}
          typeInput="text"
          placeholder="Enter..."
        />
        <label className={styles.labelInput}>ZIP code</label>
        <Input
          className={styles.contentInput}
          typeInput="text"
          placeholder="Enter..."
        />
        <label className={styles.labelInput}>Phone</label>
        <Input
          className={styles.contentInput}
          typeInput="text"
          placeholder="Enter..."
        />
        <label className={styles.labelInput}>Email address</label>
        <Input
          className={styles.contentInput}
          typeInput="text"
          placeholder="Enter..."
        />
      </aside>
      <aside style={{ width: "527px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: fonts.weight.medium,
            fontSize: fonts.size.lg,
            marginBottom: "22px",
          }}
        >
          <p>Product</p>
          <p>Subtotal</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "22px",
          }}
        >
          <p
            style={{
              fontWeight: fonts.weight.regular,
              fontSize: fonts.size.xs,
              color: colors.secondary.splight,
            }}
          >
            Asgaard sofa x 1
          </p>
          <p
            style={{
              fontWeight: "300px",
              fontSize: fonts.size.xs,
            }}
          >
            Rs. 250,000.00
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "22px",
          }}
        >
          <p
            style={{
              fontWeight: fonts.weight.regular,
              fontSize: fonts.size.xs,
              color: colors.secondary.splight,
            }}
          >
            Subtotal
          </p>
          <p
            style={{
              fontWeight: "300px",
              fontSize: fonts.size.xs,
            }}
          >
            Rs. 250,000.00
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "solid 1px #D9D9D9",
          }}
        >
          <p
            style={{
              fontWeight: fonts.weight.regular,
              fontSize: fonts.size.xs,
              color: colors.secondary.splight,
            }}
          >
            Subtotal
          </p>
          <p
            style={{
              fontWeight: fonts.weight.bold,
              fontSize: fonts.size.lg,
              color: colors.primary.yellow,
              marginBottom: "25px",
            }}
          >
            Rs. 520,000.00
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontWeight: "300",
              fontSize: fonts.size.xs,
              marginTop: "56px",
              marginBottom: "26px",
            }}
          >
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <Button
            variant="outline"
            style={{
              padding: "18px 102px",
              borderRadius: fonts.borderRadius.md,
              width: "318px",
            }}
          >
            Place order
          </Button>
        </div>
      </aside>
    </section>
  );
};

export default BillingForm;
