import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

const Cart = () => {
  const items = useSelector(getItemsSelector);

  const total = items.reduce((acc, curr) => (acc + curr.price), 0);

  return (
    <div className="p-5 bg-green-100 sticky top-0 ">
      <h3 className="text-center text-2xl text-green-800 font-medium">
        Total Items: {items.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;
