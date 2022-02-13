import React from "react";
import IMG3 from "../../assets/image3.png";
import Button from "../../components/Button";
import "./styles/ThirdPage.scss";
import FadeIn from "../../components/FadeIn";
export default function ThirdPage() {
  return (
    <div id="third-page">
      <FadeIn>
        <div className="row">
          <div className="column">
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

          <div className="column">
            <Button label="Add task" />
            <img src={IMG3} alt="image3" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
