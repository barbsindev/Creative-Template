import React from "react";
import { ReactComponent as Vector } from "../../assets/Vector.svg";
import "./styles/FifthPage.scss";
import Section from "../../components/Section";
export default function FifthPage() {
  return (
    <div className="fifth-page">
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
    </div>
  );
}
