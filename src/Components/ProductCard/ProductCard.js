import React from "react";
import RatingStar from "../RatingStar/RatingStar";
import "./ProductCard.css";

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
      <button className="card-btn-wishlist">
        <i className="btn-icon fa-regular fa-heart"></i>
      </button>
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
          <button className="btn btn-primary">Add to cart</button>
          {/* <button className="btn btn-outline-primary">Add to wishlist</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
