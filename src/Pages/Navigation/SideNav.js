import React, { useState, useRef, useContext, useEffect } from "react";
import { userContext } from "../../components/Context/UserContext";
import Button from "../../components/Button";
import "./SideNav.scss";
import Burger from "./Burger";
import OutsideClick from "./OutsideClick";

const SideNav = () => {
  // const { user, changeUser } = useContext(userContext);

  const dropdownRef = useRef(null);
  // const [isActive, setIsActive] = OutsideClick(dropdownRef, false);
  // const handleClick = () => {
  //   setIsActive(!isActive);
  //   changeUser();
  //   console.log(user);
  // };
  const [open, setOpen] = useState(false);
  function toggleBurger(event) {
    setOpen(!open);
    console.log(event, "ferew");
  }
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  }, [open]);

  return (
    <>
      <div ref={dropdownRef} className={open ? "sidenav open" : "sidenav"}>
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
