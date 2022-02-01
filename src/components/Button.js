import React, { useState } from "react";
import "./Button.scss";
// import "../scss/variables.scss";
export default function Button(props) {
  const [hover, setHover] = useState("false");
  const handleMouseIn = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "blue";
    e.target.style.transition = "0.5s";
  };
  const handleMouseOut = (e) => {};
  return (
    <button onMouseOver={handleMouseIn} onMouseLeave={handleMouseOut}>
      {props.label}
    </button>
  );
}
