import { Layout } from "@/app/components";
import React from "react";

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default CartLayout;
