import React from "react";
import "./styles/SixthPage.scss";
import { ReactComponent as Rectangles } from "../../assets/Rectangles.svg";
import { ReactComponent as Hero } from "../../assets/Hero.svg";

export default function SixthPage() {
  return (
    <div className="sixth-page">
      <div className="row">
        <div className="column">
          <Hero className="hero" />
        </div>
        <div className="column">
          <section>
            <p>Viverra enim diam gravida risus nisl.</p>
            <p>Lectus eu.</p>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              enim vel.
            </h4>
            <p className="underline">Ut convallis massa.</p>
            <Rectangles className="reactangles" />
          </section>
        </div>
      </div>
    </div>
  );
}