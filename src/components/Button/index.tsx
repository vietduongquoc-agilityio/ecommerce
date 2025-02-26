"use client";

import { useState } from "react";
import { colors, fonts } from "@/themes";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "disabled"
    | "primaryXs"
    | "pagination";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  fullHeight?: boolean;
  style?: React.CSSProperties;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "sm",
  fullWidth = false,
  fullHeight = false,
  style = {},
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    padding:
      size === "sm" ? "12px 52px" : size === "lg" ? "14px 24px" : "12px 36px",
    fontSize:
      size === "sm"
        ? fonts.size.sm
        : size === "lg"
        ? fonts.size.lg
        : fonts.size.md,
    fontWeight: fonts.weight.semiBold,
    textAlign: "center",
    width: fullWidth ? "100%" : "auto",
    height: fullHeight ? "100%" : "auto",
    cursor: variant === "disabled" ? "not-allowed" : "pointer",
    transition: "all 0.3s ease",
    border: "none",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: isHovered ? "#E6B800" : colors.primary.yellow,
      color: colors.white,
    },
    primaryXs: {
      backgroundColor: isHovered ? "#E6B800" : colors.primary.yellow,
      color: colors.white,
      fontSize: fonts.size.xs,
    },
    secondary: {
      backgroundColor: isHovered ? "#FFF5CC" : colors.white,
      color: colors.primary.yellow,
    },
    outline: {
      backgroundColor: isHovered ? colors.white : "transparent",
      border: isHovered ? `1px solid ${colors.secondary.splight}` :`1px solid ${colors.black}`,
      color: isHovered ? colors.secondary.splight : colors.black,
    },
    ghost: {
      backgroundColor: "transparent",
      color: colors.secondary.black,
      fontSize: fonts.size.xs,
      padding: "1px",
      fontWeight: fonts.weight.medium,
    },
    disabled: {
      backgroundColor: colors.secondary.splight,
      color: colors.white,
      opacity: 0.6,
    },
    pagination: {
      padding: "20px 25px",
      borderRadius: "10px",
      backgroundColor: isHovered ? "#B88E2F" : colors.primary.dark,
      color: isHovered ? "#FFFFFF" : colors.secondary.black,
    },
  };

  return (
    <button
      onClick={variant !== "disabled" ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...baseStyle, ...variantStyles[variant], ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
