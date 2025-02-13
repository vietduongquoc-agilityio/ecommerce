import { NextConfig } from "next";

const config: NextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "@/**",
        search: "",
      },
    ],
  },
};

export default config;
