import React from "react";
import "./NavigationBar.css";
import { NavIconMenus, NavMenus } from "./menus";
import { Link } from "react-router-dom";

const RenderMenus = ({ name, pathname }, idx) => {
  return (
    <li className="list-inline-item" key={`menus-${name}-${idx}`}>
      <Link to={pathname} className="link-no-style">
        {name}
      </Link>
    </li>
  );
};
const RenderIconMenus = ({ name, pathname, icon, dropdown }, idx) => {
  return dropdown ? (
    <li
      className="profile-btn-icon list-inline-item"
      key={`IconMenu-${name}-${idx}`}
    >
      {dropdown ? (
        <div className="nav-icon-btn">
          <span className="nav-icon">{icon}</span>
          <span className="nav-icon-text">
            {name} <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      ) : (
        <Link to={pathname} className="nav-icon-btn">
          <span className="nav-icon">{icon}</span>
          <span className="nav-icon-text">
            {name} <i className="fa-solid fa-angle-down"></i>
          </span>
        </Link>
      )}

      {/* DROPDOWN  */}
      <ul className="list profile-dropdown">
        {dropdown.map(({ name, pathname }, idx) => (
          <li key={`dropdown-${name}-${idx}`}>
            <Link to={pathname}>{name}</Link>
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <li className="list-inline-item" key={`IconMenu-${name}-${idx}`}>
      <Link to={pathname} className="nav-icon-btn">
        <span className="nav-icon">{icon}</span>
        <span className="nav-icon-text"> {name} </span>
      </Link>
    </li>
  );
};

const NavigationBar = () => {
  return (
    <>
      <header className="nav-bar">
        <nav className="nav-bar-container">
          <div className="nav-section">
            <div className="burger-menu">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>

            {/* Brand logo goes here  */}
            {/* <div className="nav-logo">
              <Link className="link-no-style" to="/">
                <img src="https://picsum.photos/100/100" alt="Logo" />
              </Link>
            </div> */}

            {/* Brand title goes here  */}
            <div className="nav-logo-title">
              <Link className="link-no-style" to="/">
                {" "}
                Title{" "}
              </Link>
            </div>

            {/* Navigation links goes here  */}

            <ul className="nav-pill nav-menu">
              {NavMenus && NavMenus.map(RenderMenus)}
            </ul>
          </div>

          {/* search bar  */}

          <div className="nav-section">
            <label className="search-bar">
              <span className="search-bar-btn" type="submit">
                <i className="fa fa-search"> </i>
              </span>
              <input
                className="search-bar-input"
                type="text"
                placeholder="Type to search"
                name="search"
              />
            </label>

            {/* section to show button icons and text below it on nav bar  */}

            <ul className="nav-pill nav-btn-icons">
              {NavIconMenus && NavIconMenus.map(RenderIconMenus)}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
