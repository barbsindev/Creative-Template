import React, { useRef } from "react";
import "./OpenMenu.scss";

import OutsideClick from "../Navigation/OutsideClick";
import Arrow from "./arrow/Arrow";
export default function OpenMenu() {
  const dropdownRef = useRef();
  const [isActive, setIsActive] = OutsideClick(false);

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
        <Arrow toggle={isActive} />
      </div>
    </>
  );
}
