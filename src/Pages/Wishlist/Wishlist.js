import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useWishlistContext } from "../../Hooks/useWishlistContext";
import "./Wishlist.css";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const {
    wishlistState: { wishlist },
  } = useWishlistContext();
  const navigate = useNavigate();

  const startShoppingHandler = () => navigate("/products");

  return (
    <div>
      <h1 className="page-title page-title-center">My Wishlist</h1>
      <div className="wishlist grid">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <ProductCard
              product={product}
              key={`WishlistCard-${product?.title}`}
            />
          ))
        ) : (
          <div className="cart-empty">
            <h1>Oops! Your Wishlist is empty :(</h1>
            <button
              className="btn-link link-primary"
              onClick={startShoppingHandler}
            >
              Start Shopping ?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
