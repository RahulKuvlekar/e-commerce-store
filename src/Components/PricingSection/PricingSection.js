import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <div className="price-section">
      <h1 className="price-title">Price Details</h1>
      <br />
      <hr />
      <br />

      {/* list   */}
      <ul className="list">
        <li className="price-list text-grey-md">
          <span>Item Name -1</span>
          <span>99Rs * 2</span>
        </li>

        <li className="price-list text-grey-md">
          <span>Item Name -2</span>
          <span>199Rs * 3</span>
        </li>

        <li className="price-list text-grey-md">
          <span>Item Name -3</span>
          <span>299Rs * 5</span>
        </li>
      </ul>

      <br />
      <hr />
      <br />

      <ul className="list">
        <li className="price-list text-grey-md">
          <span>Total MRP</span>
          <span>6699Rs</span>
        </li>

        <li className="price-list text-grey-md">
          <span>Discount on MRP</span>
          <span>-699Rs</span>
        </li>

        <li className="price-list text-grey-md">
          <span>Convenience Fee</span>
          <span>
            <span className="text-strike">99Rs</span>
            <span className="text-success">FREE</span>
          </span>
        </li>

        <br />
        <hr />
        <br />
        <div className="price-list">
          <span className="h3 text-grey-dk">Total Amount</span>
          <span className="h3 text-grey-dk">6299Rs</span>
        </div>
      </ul>
      <br />
      <hr />
      <button className="btn btn-success btn-place-order">Place Order</button>
    </div>
  );
};

export default PricingSection;
