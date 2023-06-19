import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="wrapper flex min-h-screen w-screen flex-col justify-between
    "
    >
      <header>
        <Header />
      </header>
      <main className="min-h-screen bg-white text-black">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
