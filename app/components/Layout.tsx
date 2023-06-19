import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="wrapper min-h-screen w-screen flex justify-between flex-col
    "
    >
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
