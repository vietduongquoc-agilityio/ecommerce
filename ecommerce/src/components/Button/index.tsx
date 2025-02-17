"use client";

import { colors, fonts } from "@/themes";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "disabled"
    | "primaryXs";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "sm",
  fullWidth = false,
}: ButtonProps) => {
  const styles = {
    base: {
      padding:
        size === "sm"
          ? "12px 52px"
          : size === "lg"
          ? "14px 24px"
          : size === "md"
          ? "12px 36px"
          : "10px 20px",
      fontSize:
        size === "sm"
          ? fonts.size.sm
          : size === "lg"
          ? fonts.size.lg
          : fonts.size.md,
      fontWeight: fonts.weight.semiBold,
      textAlign: "center" as const,
      width: fullWidth ? "100%" : "auto",
      cursor: variant === "disabled" ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      border: "none",
    },
    variants: {
      primary: {
        backgroundColor: colors.primary.yellow,
        color: colors.white,
      },
      primaryXs: {
        backgroundColor: colors.primary.yellow,
        color: colors.white,
        fontSize: fonts.size.xs,
      },
      secondary: {
        backgroundColor: colors.white,
        color: colors.primary.yellow,
      },
      outline: {
        backgroundColor: "transparent",
        border: `2px solid ${colors.primary.yellow}`,
        color: colors.primary.yellow,
      },
      ghost: {
        backgroundColor: "transparent",
        color: colors.secondary.black,
        cursor: "not-allowed",
        fontSize: fonts.size.xs,
        padding: "1px",
        fontWeight: fonts.weight.medium,
      },
      disabled: {
        backgroundColor: colors.secondary.splight,
        color: colors.white,
        opacity: 0.6,
      },
    },
  };

  return (
    <button
      onClick={variant !== "disabled" ? onClick : undefined}
      style={{ ...styles.base, ...styles.variants[variant] }}
    >
      {children}
    </button>
  );
};

export default Button;
