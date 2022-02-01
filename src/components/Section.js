import React from "react";

import "./Section.scss";
function Section(props) {
  return (
    <>
      <h2>{props.header}</h2>
      <p>{props.paragraph}</p>
      <a href="#">Learn more</a>
    </>
  );
}
export default Section;
