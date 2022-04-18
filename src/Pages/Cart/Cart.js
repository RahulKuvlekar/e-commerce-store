import React from "react";
import PricingSection from "../../Components/PricingSection/PricingSection";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <h1 className="page-title page-title-center">My Cart</h1>
      <div className="cart grid">
        <div className="cart-section"></div>
        <PricingSection />
      </div>
    </div>
  );
};

export default Cart;
