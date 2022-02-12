import React, { useState, useRef } from "react";
import "./OpenMenu.scss";
import { ReactComponent as Arrow1 } from "../../assets/arrowup.svg";
import { ReactComponent as Arrow2 } from "../../assets/arrow.svg";
import OutsideClick from "../Navigation/OutsideClick";
export default function OpenMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = OutsideClick(dropdownRef, false);
  // const [open, setOpen] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <>
      <div ref={dropdownRef} className={isActive ? "list open" : "list"}>
        <ul>
          <li>Vitae nec.</li>
          <li>Vitae nec.</li>
          <li>Vitae nec.</li>
          <li>Vitae nec.</li>
        </ul>
      </div>
      <div onClick={handleClick}>
        {isActive ? <Arrow2 className="arrow" /> : <Arrow1 className="arrow" />}
      </div>
    </>
  );
}
