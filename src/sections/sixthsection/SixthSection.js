import React from "react";
import "./SixthSection.scss";
import { ReactComponent as Rectangles } from "../../assets/images/Rectangles.svg";
import { ReactComponent as Hero } from "../../assets/images/Hero.svg";
import FadeIn from "../../components/animation/fadein/FadeIn";
export default function SixthPage() {
  return (
    <section id="sixth-section">
      <FadeIn>
        <div className="row">
          <div className="row__column">
            <Hero className="hero" />
          </div>
          <div className="row__column">
            <p>Viverra enim diam gravida risus nisl.</p>
            <p>Lectus eu.</p>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              enim vel.
            </h4>
            <a href="#first-section" className="underline">
              Ut convallis massa.
            </a>
            <Rectangles className="rectangles" />
            <a href="#first-section" className="underline">
              Read Customers Story.
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
