import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";

const outfitBold = localFont({
  src: "./fonts/OutfitBold.woff",
  variable: "--font-outfit-bold",
  weight: "100 900",
});
const poppinsRegular = localFont({
  src: "./fonts/PoppinsRegular.woff",
  variable: "--font-PoppinsRegular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lilli",
  description: "Last Graded Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitBold.variable} ${poppinsRegular.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
