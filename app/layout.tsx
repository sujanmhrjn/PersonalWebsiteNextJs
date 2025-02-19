import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Fjalla_One } from "next/font/google";

import "./globals.css";

const poppins = Poppins({ weight: '400', subsets:['latin'],  variable:'--font-poppins'});
const fjallaOne = Fjalla_One({ weight: '400', subsets:['latin'], variable:'--font-fjalla'});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${fjallaOne.variable}`}>{children}</body>
    </html>
  );
}
