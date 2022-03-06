import React from "react";
import { ReactComponent as Statistics } from "../../assets/images/Statistics.svg";
import "./FourthSection.scss";
import FadeIn from "../../components/animation/FadeIn";
export default function FourthSection() {
  return (
    <section id="fourth-section">
      <FadeIn>
        <h2>Dui tellus quis magna id ultricies eu sed.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu,
          aenean viverra penatibus quis. Laoreet.
        </p>
        <Statistics className="statistics" />
      </FadeIn>
    </section>
  );
}
