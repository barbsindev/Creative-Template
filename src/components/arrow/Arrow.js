import React from "react";
import "./Arrow.scss";
export default function Arrow({ toggle }) {
  return (
    <>
      <div className={toggle ? "arrow active" : "arrow"}></div>
    </>
  );
}
