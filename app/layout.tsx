import ProviderStore from "./components/ProviderStore";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppin = Poppins({ subsets: ["latin"], weight: "400" });

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
      <body className={poppin.className}>
        <ProviderStore>{children}</ProviderStore>
      </body>
    </html>
  );
}
