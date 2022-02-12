import React, { useState, useRef, useEffect } from "react";
import "./FadeIn.scss";
export default function FadeIn(props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);
  return (
    <div className={`fade-in-section ${visible ? "is-visible" : ""}`} ref={ref}>
      {props.children}
    </div>
  );
}
