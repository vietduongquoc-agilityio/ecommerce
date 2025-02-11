"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const linkStyle = {
    fontSize: "16px",
    fontWeight: "500",
    color: "var(--foreground)",
    textDecoration: "none",
    padding: "0 10px",
  };

  return (
    <Link href={href} style={linkStyle}>
      {children}
    </Link>
  );
};

export default NavLink;
