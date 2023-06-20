import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="relative flex min-h-screen w-screen flex-col justify-between
    "
    >
      <header>
        <Header />
      </header>
      <main className="min-h-screen bg-white text-black">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
