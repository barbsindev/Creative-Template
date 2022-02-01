import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as MenuIcon } from "../assets/Burger.svg";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import Button from "../components/Button";
import "./Navigation.scss";
export default function Navigation() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  function handleHover(e) {
    e.target.style.textDecoration = "underline";
    console.log("e");
  }

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <ul
          className={
            click ? "navbar__left__links.active" : "navbar__left__links"
          }
        >
          <li>
            <Logo style={{ width: "100%", height: "auto" }} className="logo" />
          </li>
          <li onMouseOver={handleHover}>Cras.</li>
          <li onMouseOver={handleHover}>Cras.</li>
          <li onMouseOver={handleHover}>Fringilla.</li>
          <li onMouseOver={handleHover}>Enim Dolor.</li>
        </ul>
      </div>
      <div className="navbar__right">
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
        <ul className="navbar__right__links">
          <li>Log in</li>
          <Button label="Request a demo" />
        </ul>
      </div>
    </nav>
  );
}
