import { useState, useEffect } from "react";

export default function OutsideClick(element, initialState) {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const windowClick = (e) => {
      console.log(e);
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("mousedown", windowClick);
    }
    return () => {
      window.removeEventListener("mousedown", windowClick);
    };
  }, [isActive, element]);
  return [isActive, setIsActive];
}
