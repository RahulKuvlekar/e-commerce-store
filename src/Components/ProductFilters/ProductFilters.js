import React from "react";
import { filterTypes } from "../../Constants/constants";
import { useProductContext } from "../../Hooks/useProductContext";
import "./ProductFilters.css";

const ProductFilters = () => {
  const { productState, dispatchProduct } = useProductContext();
  const {
    categoryList,
    price,
    rating,
    category,
    brand,
    outOfStock,
    fastDelivery,
  } = productState;
  const {
    SORT_BY_PRICE,
    SORT_BY_RATING,
    SORT_BY_CATEGORY,
    SORT_BY_BRAND,
    INCLUDE_OUT_OF_STOCK,
    INCLUDE_FAST_DELIVERY,
    CLEAR_FILTERS,
  } = filterTypes;

  const dispatchProductHandler = (type, data) =>
    dispatchProduct({
      type: type,
      payload: data,
    });

  return (
    <div className="sidebar">
      {/*  Using 'list' className name and 'list-collapsable' for creating nested list */}
      <ul className="list">
        <div className="list-header">
          <div className="list-title">Filters</div>
          <button
            id="clear-rating"
            className="h4 btn-link link-primary"
            onClick={() => dispatchProductHandler(CLEAR_FILTERS, "")}
          >
            Clear
          </button>
        </div>
        <br />
        <hr />
        <br />
        <li className="list-collapsable">
          <div className="h4">Price</div>
          <ul>
            <li>
              <input
                type="radio"
                name="price"
                id="price-low"
                value="price-low"
                checked={price === "Low to High" ? true : false}
                onChange={() =>
                  dispatchProductHandler(SORT_BY_PRICE, "Low to High")
                }
              />
              <label htmlFor="price-low"> Low to High</label>
            </li>
            <li>
              <input
                type="radio"
                name="price"
                id="price-high"
                value="price-high"
                checked={price === "High to Low" ? true : false}
                onChange={() =>
                  dispatchProductHandler(SORT_BY_PRICE, "High to Low")
                }
              />
              <label htmlFor="price-high"> High to Low</label>
            </li>
          </ul>
        </li>
        <br />
        <hr />
        <br />
        <li className="list-collapsable">
          <div className="h4">Ratings</div>
          <ul>
            <li>
              <input
                type="radio"
                name="star-rating"
                id="star-5"
                value="5"
                checked={rating === 5 ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_RATING, 5)}
              />
              <label htmlFor="star-5">
                &nbsp;
                <i htmlFor="rate-5" className="fas fa-star star-rating" />
                &nbsp; 5 & Above
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="star-rating"
                id="star-4"
                value="4"
                checked={rating === 4 ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_RATING, 4)}
              />
              <label htmlFor="star-4">
                &nbsp;
                <i htmlFor="rate-4" className="fas fa-star star-rating" />
                &nbsp; 4 & Above
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="star-rating"
                id="star-3"
                value="3"
                checked={rating === 3 ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_RATING, 3)}
              />
              <label htmlFor="star-3">
                &nbsp;
                <i htmlFor="rate-3" className="fas fa-star star-rating" />
                &nbsp; 3 & Above
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="star-rating"
                id="star-2"
                value="2"
                checked={rating === 2 ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_RATING, 2)}
              />
              <label htmlFor="star-2">
                &nbsp;
                <i htmlFor="rate-2" className="fas fa-star star-rating" />
                &nbsp; 2 & Above
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="star-rating"
                id="star-1"
                value="1"
                checked={rating === 1 ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_RATING, 1)}
              />
              <label htmlFor="star-1">
                &nbsp;
                <i htmlFor="rate-1" className="fas fa-star star-rating" />
                &nbsp; 1 & Above
              </label>
            </li>
          </ul>
        </li>
        <br />
        <hr />
        <br />
        <li className="list-collapsable">
          <div className="h4">Category</div>
          <ul>
            {categoryList.length > 0 &&
              categoryList.map((item) => (
                <li
                  key={`filter-${item?.categoryName}`}
                  className="filter-checkbox"
                >
                  <input
                    type="checkbox"
                    name={item?.categoryName}
                    id={`brand-${item?.categoryName}`}
                    value={item?.categoryName}
                    checked={
                      category.includes(item?.categoryName) ? true : false
                    }
                    onChange={() =>
                      dispatchProductHandler(
                        SORT_BY_CATEGORY,
                        item?.categoryName
                      )
                    }
                  />
                  <label htmlFor={`brand-${item?.categoryName}`}>
                    {" "}
                    {item?.categoryName}
                  </label>
                </li>
              ))}
          </ul>
        </li>
        <br />
        <hr />
        <br />
        <li className="list-collapsable">
          <div className="h4">Brand</div>
          <ul>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="H&M"
                id="brand-H&M"
                value="H&M"
                checked={brand.includes("H&M") ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_BRAND, "H&M")}
              />
              <label htmlFor="brand-H&M"> H&M</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="Zara"
                id="brand-Zara"
                value="Zara"
                checked={brand.includes("Zara") ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_BRAND, "Zara")}
              />
              <label htmlFor="brand-Zara"> Zara</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="Nike"
                id="brand-Nike"
                value="Nike"
                checked={brand.includes("Nike") ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_BRAND, "Nike")}
              />
              <label htmlFor="brand-Nike"> Nike</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="GShock"
                id="brand-GShock"
                value="GShock"
                checked={brand.includes("GShock") ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_BRAND, "GShock")}
              />
              <label htmlFor="brand-GShock"> GShock</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="Fastrack"
                id="brand-Fastrack"
                value="Fastrack"
                checked={brand.includes("Fastrack") ? true : false}
                onChange={() =>
                  dispatchProductHandler(SORT_BY_BRAND, "Fastrack")
                }
              />
              <label htmlFor="brand-Fastrack"> Fastrack</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="Other"
                id="brand-Other"
                value="Other"
                checked={brand.includes("Other") ? true : false}
                onChange={() => dispatchProductHandler(SORT_BY_BRAND, "Other")}
              />
              <label htmlFor="brand-Other"> Other</label>
            </li>
          </ul>
        </li>
        <br />
        <hr />
        <br />
        <li className="list-collapsable">
          <div className="h4">Other</div>
          <ul>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="FreeShipping"
                id="other-FreeShipping"
                value="FreeShipping"
                checked={fastDelivery ? true : false}
                onChange={() =>
                  dispatchProductHandler(INCLUDE_FAST_DELIVERY, "FreeShipping")
                }
              />
              <label htmlFor="other-FreeShipping"> Fast Shipping</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="OutOfStock"
                id="other-OutOfStock"
                value="OutOfStock"
                checked={outOfStock ? true : false}
                onChange={() =>
                  dispatchProductHandler(INCLUDE_OUT_OF_STOCK, "OutOfStock")
                }
              />
              <label htmlFor="other-OutOfStock"> Out of Stock</label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ProductFilters;
