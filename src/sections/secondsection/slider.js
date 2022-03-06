import React, { useEffect, useState } from "react";

export default function Slider() {
  const [offsetLeft, setOffsetLeft] = useState(0);
  function slider() {
    setOffsetLeft(offsetLeft + "px");
  }
  setInterval(() => {
    slider();
  }, 1000);

  return (
    <>
      <p
        style={{
          position: "absolute",
          transform: `translateX(${offsetLeft})`,
        }}
      >
        {" "}
        dfedffrffrfrfer
      </p>
    </>
  );
}
