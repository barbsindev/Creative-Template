import React from "react";
import "./styles/Footer.scss";
export default function Footer() {
  return (
    <section id="footer">
      <div className="column">
        <p>Duis aute irure dolor in reprehenderit</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="column links">
        <ul>
          <li>Ultrices posuere. </li>
          <li>Ac blandit.</li>
          <li>Ut hac et.</li>
        </ul>
      </div>
    </section>
  );
}
