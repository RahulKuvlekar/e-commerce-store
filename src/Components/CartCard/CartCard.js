import React from "react";
import "./CartCard.css";
import useCartContext from "../../Hooks/useCartContext";
import { removeFromMyCart, updateMyCart } from "../../Utils/MyCart";
import useAuthContext from "../../Hooks/useAuthContext";
import { addToMyWishlist } from "../../Utils/MyWishlist";
import { useWishlistContext } from "../../Hooks/useWishlistContext";

const CartCard = ({ product }) => {
  const {
    _id,
    title,
    subtitle,
    Description,
    image,
    featured,
    qty,
    price,
    discount,
    discountedPrice,
  } = product;

  const {
    authState: { token },
  } = useAuthContext();

  const {
    cartState: { loadingCart },
    cartDispatch,
  } = useCartContext();

  const { dispatchWishlist } = useWishlistContext();

  const incrementQuantity = () => {
    updateMyCart(cartDispatch, token, _id, "increment");
  };

  const decrementQuantity = () => {
    if (qty <= 1) {
      removeFromMyCart(cartDispatch, token, _id);
    }
    updateMyCart(cartDispatch, token, _id, "decrement");
  };

  const removeFromCartHandler = () =>
    removeFromMyCart(cartDispatch, token, _id);

  const movetoWishlistHandler = () => {
    addToMyWishlist(dispatchWishlist, token, product);
    removeFromCartHandler();
  };

  return (
    <div className="card-container card-horizontal">
      <img className="card-img" src={image} alt={title} />
      {featured && <div className="card-badge card-badge-danger">Trending</div>}
      <button className="card-btn-dismiss" onClick={removeFromCartHandler}>
        <i className="btn-icon fa-solid fa-trash-can"></i>
      </button>
      <div className="card-content">
        {title && <h3 className="card-title text-grey-dk">{title}</h3>}
        {subtitle && (
          <p className="card-text">
            {subtitle} {Description ? `| ${Description}` : null}.
          </p>
        )}

        <div className="card-price">
          {price && (
            <span className="price-now text-grey-dk">
              Rs. {discountedPrice}
            </span>
          )}
          <span className="price-before"> Rs. {price} </span>
          {discount && (
            <span className="price-discount"> ({discount}% OFF) </span>
          )}
        </div>
        <div className="btn-container">
          <div className="btn-quantity">
            <button
              className="btn btn-outline-primary btn-noShadow"
              onClick={decrementQuantity}
              disabled={loadingCart}
            >
              <i className="fas fa-minus"></i>
            </button>

            <span>{qty}</span>
            <button
              className="btn btn-outline-primary btn-noShadow"
              onClick={incrementQuantity}
              disabled={loadingCart}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button
            className="btn btn-outline-primary"
            onClick={movetoWishlistHandler}
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
