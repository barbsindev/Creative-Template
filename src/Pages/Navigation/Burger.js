import "./Burger.scss";
import React from "react";
const Burger = ({ isOpen }) => {
  console.log(isOpen, "isopen");
  return (
    <>
      <div className={isOpen ? " line1 open" : ""}></div>
      <div className={isOpen ? "line2 open" : ""}></div>
      <div className={isOpen ? "line3 open" : ""}></div>
    </>
  );
};

export default Burger;
