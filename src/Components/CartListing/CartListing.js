import React from "react";
import "./CartListing.css";
import useCartContext from "../../Hooks/useCartContext";
import CartCard from "../CartCard/CartCard";

const CartListing = () => {
  const {
    cartState: { cartList },
  } = useCartContext();
  return (
    <div className="cart-section">
      {cartList.map((product) => (
        <CartCard product={product} key={`CartCard-${product?.title}`} />
      ))}
    </div>
  );
};

export default CartListing;
