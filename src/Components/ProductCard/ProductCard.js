import React from "react";
import RatingStar from "../RatingStar/RatingStar";
import "./ProductCard.css";
import useAuthContext from "../../Hooks/useAuthContext";
import { addToMyCart } from "../../Utils/MyCart";
import useCartContext from "../../Hooks/useCartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useWishlistContext } from "../../Hooks/useWishlistContext";
import { addToMyWishlist, removeFromMyWishlist } from "../../Utils/MyWishlist";

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    subtitle,
    Description,
    image,
    featured,
    inStock,
    price,
    discount,
    discountedPrice,
    rating,
    fastDelivery,
  } = product;

  const {
    authState: { isAuthenticated, token },
  } = useAuthContext();

  const {
    cartState: { cartList, loadingCart },
    cartDispatch,
  } = useCartContext();

  const {
    wishlistState: { wishlist, loadingWishlist },
    dispatchWishlist,
  } = useWishlistContext();

  const location = useLocation();
  const navigate = useNavigate();

  const productIsFound = cartList.find((product) => product["_id"] === _id);
  const productInWishlist = wishlist.find((product) => product["_id"] === _id);

  const wishlistHandler = () => {
    !isAuthenticated
      ? navigate("/login", {
          state: { from: location },
          replace: true,
        })
      : addToMyWishlist(dispatchWishlist, token, product);
  };
  const removeWishlistHandler = () =>
    removeFromMyWishlist(dispatchWishlist, token, _id);

  const cartHandler = () => {
    if (!isAuthenticated) {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    } else {
      addToMyCart(cartDispatch, token, product);
      // if (productInWishlist) {
      //   removeWishlistHandler();
      // }
    }
  };
  const goToCartHandler = () => {
    navigate("/cart");
  };

  return (
    <div
      className={`card-container ${!inStock ? "card-overlay" : null}`}
      id={`product-card-${_id}`}
    >
      {!inStock && (
        <div className="card-overlay-content">
          <h1>Out Of Stock</h1>
        </div>
      )}
      <img className="card-img" src={image} alt={title} />
      {featured && <div className="card-badge card-badge-danger">Trending</div>}
      {productInWishlist ? (
        <button
          className="card-btn-wishlist"
          onClick={removeWishlistHandler}
          disabled={loadingWishlist}
        >
          <i className="btn-icon fa-solid fa-heart fa-pink"></i>
        </button>
      ) : (
        <button
          className="card-btn-wishlist"
          onClick={wishlistHandler}
          disabled={loadingWishlist}
        >
          <i className="btn-icon fa-regular fa-heart"></i>
        </button>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && (
          <p className="card-text">
            {subtitle} {Description ? `| ${Description}` : null}.
          </p>
        )}
        <div className="card-price">
          <span className="price-now"> Rs.{discountedPrice} </span>
          <span className="price-before"> Rs.{price} </span>
          {discount && (
            <span className="price-discount"> ({discount}% OFF) </span>
          )}
        </div>
        <div className="card-other">
          <RatingStar rating={rating} />
          <p className="text-grey-lt text-md">
            {fastDelivery ? "Fast Delivery" : "Upto 7 days"}
          </p>
        </div>
        <div className="btn-container">
          {productIsFound ? (
            <button className="btn btn-success" onClick={goToCartHandler}>
              Go to cart
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={cartHandler}
              disabled={loadingCart}
            >
              Add to cart
            </button>
          )}
          {/* <button className="btn btn-outline-primary">Add to wishlist</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
