import React from "react";
import Schedule from "../../assets/images/Schedule.png";
import Button from "../../components/button/Button";
import "./ThirdSection.scss";
import FadeIn from "../../components/animation/fadein/FadeIn";
export default function ThirdPage() {
  return (
    <section id="third-section">
      <FadeIn>
        <div className="row">
          <div className="row__column">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              ullamcorper id tristique tincidunt. Tincidunt feugiat at mi
              feugiat hendrerit. Ac faucibus accumsan, quis lacus, lectus eget
              bibendum. At praesent quisque sollicitudin fusce.
            </p>
          </div>

          <div className="row__column">
            <Button label="Add task" />
            <img src={Schedule} alt="working schedule tracker" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
