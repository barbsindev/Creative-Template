import React, { useState, useEffect } from "react";
import Button from "../../button/Button";
import "./SideNav.scss";
import Burger from "../burger/Burger";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  function toggleBurger() {
    setOpen(!open);
  }
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [open]);

  return (
    <>
      <div className={open ? "sidenav open" : "sidenav"}>
        <ul>
          <li>Cras.</li>
          <li>Cras.</li>
          <li>Fringilla.</li>
          <li>Enim Dolor.</li>
          <li>Log in</li>
          <li>
            <Button label="Request a demo" />
          </li>
        </ul>
      </div>
      <div className="burger" onClick={toggleBurger}>
        <Burger isOpen={open} />
      </div>
    </>
  );
};

export default SideNav;
