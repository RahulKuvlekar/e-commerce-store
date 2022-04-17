import React from "react";
import "./ProductFilters.css";

const ProductFilters = () => {
  return (
    <div className="sidebar">
      {/*  Using 'list' className name and 'list-collapsable' for creating nested list */}
      <ul className="list">
        <div className="list-header">
          <div className="list-title">Filters</div>
          <button id="clear-rating" className="h4 btn-link link-primary">
            Clear
          </button>
        </div>
        <br />
        <hr />
        <br />
        <li className="list-collapsable">
          <div className="h4">Ratings</div>
          <ul>
            <li>
              <input type="radio" name="star-rating" id="star-5" value="5" />
              <label htmlFor="star-5">
                &nbsp;
                <i htmlFor="rate-5" className="fas fa-star star-rating" />
                &nbsp; 5 & Above
              </label>
            </li>
            <li>
              <input type="radio" name="star-rating" id="star-4" value="4" />
              <label htmlFor="star-4">
                &nbsp;
                <i htmlFor="rate-4" className="fas fa-star star-rating" />
                &nbsp; 4 & Above
              </label>
            </li>
            <li>
              <input type="radio" name="star-rating" id="star-3" value="3" />
              <label htmlFor="star-3">
                &nbsp;
                <i htmlFor="rate-3" className="fas fa-star star-rating" />
                &nbsp; 3 & Above
              </label>
            </li>
            <li>
              <input type="radio" name="star-rating" id="star-2" value="2" />
              <label htmlFor="star-2">
                &nbsp;
                <i htmlFor="rate-2" className="fas fa-star star-rating" />
                &nbsp; 2 & Above
              </label>
            </li>
            <li>
              <input type="radio" name="star-rating" id="star-1" value="1" />
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
          <div className="h4">Brand</div>
          <ul>
            <li className="filter-checkbox">
              <input type="checkbox" name="Nike" id="brand-nike" value="Nike" />
              <label htmlFor="brand-nike"> Nike</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="Adidas"
                id="brand-adidas"
                value="Nike"
              />
              <label htmlFor="brand-adidas"> Adidas</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="Reebok"
                id="brand-reebok"
                value="Nike"
              />
              <label htmlFor="brand-reebok"> Reebok</label>
            </li>
            <li className="filter-checkbox">
              <input type="checkbox" name="Puma" id="brand-puma" value="Nike" />
              <label htmlFor="brand-puma"> Puma</label>
            </li>
            <li className="filter-checkbox">
              <input
                type="checkbox"
                name="Converse"
                id="brand-converse"
                value="Nike"
              />
              <label htmlFor="brand-converse"> Converse</label>
            </li>
          </ul>
        </li>
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
              />
              <label htmlFor="price-low"> Low to High</label>
            </li>
            <li>
              <input
                type="radio"
                name="price"
                id="price-high"
                value="price-high"
              />
              <label htmlFor="price-high"> High to Low</label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ProductFilters;
