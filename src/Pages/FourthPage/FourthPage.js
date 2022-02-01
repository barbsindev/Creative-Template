import React, { useState } from "react";
import { ReactComponent as Group2 } from "../../assets/Group2.svg";
import "./styles/FourthPage.scss";

export default function FourthPage() {
  const [scroll, setScroll] = useState(false);
  // function handleAnimation() {}
  return (
    <div
      className={scroll ? "reveal.active fourth-page" : "reveal fourth-page"}
    >
      <h2>Dui tellus quis magna id ultricies eu sed.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
        vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu, aenean
        viverra penatibus quis. Laoreet.
      </p>
      <Group2 className="group2" />
    </div>
  );
}
