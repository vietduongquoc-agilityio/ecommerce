import Link from "next/link";

const NotFound = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding:"200px"
    }}
  >
    <h2>Not Found</h2>
    <p>Could not find requested resource</p>
    <Link href="/" className="underline">
      Return Home
    </Link>
  </div>
);

export default NotFound;
