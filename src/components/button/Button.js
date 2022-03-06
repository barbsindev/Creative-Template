import React, { useState } from "react";
import "./Button.scss";

export default function Button(props) {
  const [background, setBackground] = useState("");
  const [font, setFont] = useState("");
  const setStyle = (background, font) => {
    setBackground(background);
    setFont(font);
  };
  const styles = {
    backgroundColor: background,
    color: font,
    transition: "0.5s",
  };

  return (
    <button
      style={styles}
      onMouseOver={() => setStyle("#fff", "#134ae9")}
      onMouseLeave={() => setStyle("")}
    >
      {props.label}
    </button>
  );
}
