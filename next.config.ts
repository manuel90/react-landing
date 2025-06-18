import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  sassOptions: {
    //includePaths: ["./src"],
    includePaths: [path.join(__dirname, "styles")], // Optional: Add your styles directory to include paths
    prependData: `@import "./src/styles/variables";`, // Adjust the path to your variables file
  },
};

export default nextConfig;
