import { colors, fonts } from "@/themes";
import Link from "next/link";

const NotFound = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "200px",
    }}
  >
    <h2
      style={{
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size.xxxl,
        color: colors.primary.yellow,
      }}
    >
      Not Found
    </h2>
    <p
      style={{
        fontWeight: fonts.weight.semiBold,
        fontSize: fonts.size.lg,
        color: colors.secondary.splight,
      }}
    >
      Could not find requested resource
    </p>
    <Link
      style={{
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size.xl,
        color: colors.black,
      }}
      href="/"
      className="underline"
    >
      Return Home
    </Link>
  </div>
);

export default NotFound;
