import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import SideNav from "./burger/sidenav/SideNav";
import Button from "../button/Button";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Logo
          style={{ width: "100%", height: "auto", position: "relative" }}
          className="logo"
        />
        <ul className="navbar__left__links">
          <li>
            <a href="#second-page">Cras.</a>
          </li>
          <li>
            <a href="#third-page">Cras.</a>
          </li>
          <li>
            <a href="#fourth-page">Fringilla.</a>
          </li>
          <li>
            <a href="#fifth-page">Enim Dolor.</a>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        {/* <SideNav /> */}
        <ul className="navbar__right__links">
          <li>
            <a href="#">Log in</a>
          </li>
          <Button label="Request a demo" />
        </ul>
      </div>
    </nav>
  );
}
