import React from "react";
import CartListing from "../../Components/CartListing/CartListing";
import PricingSection from "../../Components/PricingSection/PricingSection";
import useCartContext from "../../Hooks/useCartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartState: { cartList },
  } = useCartContext();
  const navigate = useNavigate();

  const startShoppingHandler = () => navigate("/products");

  return (
    <div>
      <h1 className="page-title page-title-center">
        My Cart ({cartList.length})
      </h1>
      {cartList.length > 0 ? (
        <div className="cart grid">
          <CartListing />
          <PricingSection />
        </div>
      ) : (
        <div className="cart-empty">
          <h1>Oops! Your cart is empty :(</h1>
          <button
            className="btn-link link-primary"
            onClick={startShoppingHandler}
          >
            Start Shopping ?
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
