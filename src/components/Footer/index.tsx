import { Text } from "@radix-ui/themes";
import { colors, fonts } from "@/themes";

// Components
import { Button } from "..";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        width: "100%",
        borderTop: "solid 1px #D9D9D9",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1133px",
          display: "flex",
          margin: "0 auto",
          padding: "48px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "136px",
          }}
        >
          <Text
            className="heading"
            style={{ fontSize: fonts.size.lg, fontWeight: fonts.weight.bold }}
          >
            Funiro.
          </Text>
          <Text
            className="address"
            style={{
              width: "285px",
              fontSize: fonts.size.xs,
              fontWeight: fonts.weight.regular,
              color: colors.secondary.splight,
              marginTop: "50px",
            }}
          >
            400 University Drive Suite 200 Coral Gables,
            <div>FL 33134 USA </div>
          </Text>
        </div>
        <div
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.medium,
            display: "flex",
            flexDirection: "column",
            marginRight: "144px",
            gap: "46px",
          }}
        >
          <Text className="address" style={{ color: colors.secondary.splight }}>
            Links
          </Text>
          <p className="link">Home</p>
          <p className="link">Shop</p>
          <p className="link">About</p>
          <p className="link">Contact</p>
        </div>
        <div
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.medium,
            display: "flex",
            flexDirection: "column",
            marginRight: "72px",
            gap: "46px",
          }}
        >
          <Text
            className="address"
            style={{ color: colors.secondary.splight, width: "140px" }}
          >
            Help
          </Text>
          <p className="link">Payment Options</p>
          <p className="link">Returns</p>
          <p className="link">Privacy Policies</p>
        </div>
        <div
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.medium,
            display: "flex",
            flexDirection: "column",
            gap: "46px",
          }}
        >
          <Text className="address" style={{ color: colors.secondary.splight }}>
            Newsletter
          </Text>
          <form className="form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input"
              style={{
                border: "none",
              }}
            />
            <Button variant="ghost">Subscribe</Button>
          </form>
        </div>
      </div>
      <div
        className="copyright"
        style={{
          paddingTop: "20px",
          paddingBottom: "40px",
          borderTop: "solid 1px #D9D9D9",
          maxWidth: "1240px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
