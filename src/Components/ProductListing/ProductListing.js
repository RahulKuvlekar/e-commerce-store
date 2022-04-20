import React from "react";
import "./ProductListing.css";
import ProductCard from "../ProductCard/ProductCard";
import { useProductContext } from "../../Hooks/useProductContext";
import {
  sortByPrice,
  sortByRating,
  sortByBrand,
  sortByCategory,
  sortbyFastDelivery,
  includeOutOfStock,
} from "../../Utils/Products";

const ProductListing = () => {
  const { productState } = useProductContext();
  const {
    productList,
    price,
    rating,
    brand,
    category,
    outOfStock,
    fastDelivery,
  } = productState;

  const sortedProduct = sortByPrice(productList, price);
  const ratedProduct = sortByRating(sortedProduct, rating);
  const categoryProduct = sortByCategory(ratedProduct, category);
  const brandedProduct = sortByBrand(categoryProduct, brand);
  const fastDeliveryProduct = sortbyFastDelivery(brandedProduct, fastDelivery);
  const outOfStockProduct = includeOutOfStock(fastDeliveryProduct, outOfStock);

  const displayProducts = outOfStockProduct;

  return (
    <div className="products-section">
      <h3 className="page-title h2 text-grey-md">
        Showing Products ({displayProducts.length})
      </h3>
      <div className="main-section grid">
        {displayProducts.length > 0 &&
          displayProducts.map((product) => (
            <ProductCard
              product={product}
              key={`product-card-${product._id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductListing;
