import React from "react";

import "./Text.scss";
function Section({ header, paragraph }) {
  return (
    <div className="section">
      <h2>{header}</h2>
      <p>{paragraph}</p>
      <a href="#">Learn more</a>
    </div>
  );
}
export default Section;
