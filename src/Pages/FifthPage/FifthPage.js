import React from "react";
import { ReactComponent as Vector } from "../../assets/Vector.svg";
import "./styles/FifthPage.scss";
import Section from "../../components/Section";
import FadeIn from "../../components/FadeIn";
export default function FifthPage() {
  return (
    <div id="fifth-page">
      <FadeIn>
        <div className="row">
          <div className="column">
            <div className="column__text">
              <Section
                paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              neque dignissim morbi lacinia volutpat est. Pulvinar scelerisque
              at urna elit quisque pellentesque. Quam cursus"
                header="Ultrices euismod curabitur"
              />
            </div>
          </div>

          <div className="column">
            <Vector className="vector" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
