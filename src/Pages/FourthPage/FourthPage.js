import React from "react";
import { ReactComponent as Group2 } from "../../assets/Group2.svg";
import "./styles/FourthPage.scss";
import FadeIn from "../../components/FadeIn";
export default function FourthPage() {
  return (
    <div id="fourth-page">
      <FadeIn>
        <h2>Dui tellus quis magna id ultricies eu sed.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu,
          aenean viverra penatibus quis. Laoreet.
        </p>

        <Group2 className="group2" />
      </FadeIn>
    </div>
  );
}
