import React, { useRef } from "react";
import "./OpenMenu.scss";

import OutsideClick from "../../../components/navigation/OutsideClick";
import Arrow from "../arrow/Arrow";
export default function OpenMenu() {
  const dropdownRef = useRef();
  const [isActive, setIsActive] = OutsideClick(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <>
      <div ref={dropdownRef} className="openmenu">
        <ul className={isActive ? "list open" : "list close"}>
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
