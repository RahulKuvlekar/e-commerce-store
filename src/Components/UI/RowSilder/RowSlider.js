import React from "react";
import "./RowSlider.css";
import { Link } from "react-router-dom";

const RowSlider = ({ title, data, card }) => {
  return (
    <div className={`row-slider ${card && "card-slider"}`}>
      <h1 className="row-slider-heading">{title}</h1>
      <ul className="row-slider-container">
        {data &&
          data.map(({ categoryName, categoryImage }) => (
            <Link
              to="/products"
              key={`${categoryName}-Row-Slider`}
              className="row-slider-wrapper"
            >
              <img src={categoryImage} alt="" className="row-slider-img" />
              <h1 className="row-slider-title">{categoryName}</h1>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default RowSlider;
