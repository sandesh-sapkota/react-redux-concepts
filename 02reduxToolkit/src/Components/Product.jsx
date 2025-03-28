import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card w-[16rem] m-5 bg-white border-2 border-gray-300 rounded shadow-md overflow-hidden sm:hover:scale-105 transition-transform duration-300">
      <img
        className="card-img-top w-full h-40 object-cover"
        src={props.image}
        alt={props.productName}
      />
      <div className="card-body p-3 text-center">
        <h5 className="card-title text-lg font-semibold text-gray-800">
          {props.productName}
        </h5>
        <p className="card-text text-gray-600 text-md font-medium mt-1">
          Rs. {props.price}
        </p>
        <button
          onClick={(e) => dispatch(addItem(props))}
          className="btn cursor-pointer mt-3 w-40 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
