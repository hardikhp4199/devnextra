import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import FloatingActions from "./components/ui/FloatingActions";

config.autoAddCss = false;

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "DevNextra — Build What's Next",
    template: "%s | DevNextra",
  },
  description:
    "DevNextra builds scalable web, mobile, and software solutions for restaurants, retail, healthcare, real estate, education, and fitness businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={`${poppins.variable} ${inter.variable} antialiased`}>
      <FloatingActions />
      {children}
      <StructuredData />
    </body>
    </html>
  );
}