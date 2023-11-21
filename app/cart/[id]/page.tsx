import { CartProduct } from "@/app/components";
import React from "react";

const Cart = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <CartProduct />
    </div>
  );
};

export default Cart;
