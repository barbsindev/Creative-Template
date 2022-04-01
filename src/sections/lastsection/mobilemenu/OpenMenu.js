import React, { useRef, useState } from "react";
import "./OpenMenu.scss";

import Arrow from "../../../components/arrow/Arrow";
export default function OpenMenu() {
  const dropdownRef = useRef();
  const [isActive, setIsActive] = useState(false);

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
