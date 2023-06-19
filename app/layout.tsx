import "./globals.css";
import { Poppins } from "next/font/google";

const poppPoppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Tokoku",
  description: "Simple e-commerce app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppPoppins.className}>{children}</body>
    </html>
  );
}
