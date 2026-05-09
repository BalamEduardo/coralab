import { Manrope } from "next/font/google";

// Satoshi assets are not present in the repo yet. Manrope keeps the site on a
// single premium sans family without introducing broken local font paths.
export const sans = Manrope({
  variable: "--font-coralab-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
