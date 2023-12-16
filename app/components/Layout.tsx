import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full min-h-screen bg-slate-200 dark:bg-black">
      <Header />
      <section className="text-black dark:text-white">{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
