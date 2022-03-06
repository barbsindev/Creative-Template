import React from "react";
import { ReactComponent as Vector } from "../../assets//images/Vector.svg";
import "./FifthSection.scss";
import Text from "../../components/text/Text";
import FadeIn from "../../components/animation/FadeIn";
export default function FifthSection() {
  return (
    <section id="fifth-section">
      <FadeIn>
        <div className="row">
          <div className="row__column">
            <Text
              paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              neque dignissim morbi lacinia volutpat est. Pulvinar scelerisque
              at urna elit quisque pellentesque. Quam cursus"
              header="Ultrices euismod curabitur"
            />
          </div>
          <div className="row__column">
            <Vector className="vector-compilation" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
