import React from "react";
import "./LastSection.scss";
import { ReactComponent as Arrow } from "../../assets/images/Arrow-left-top.svg";
import FormInput from "../../components/input/Input";
import Footer from "../../components/footer/Footer";
import OpenMenu from "./mobilemenu/OpenMenu";

export default function LastSection() {
  const n = 4;
  const list = [...Array(n)].map((e, i) => (
    <div className="row__column" key={i}>
      <div className="row__column--underline">
        <h4>Est </h4>
        <OpenMenu />
      </div>
      <p>Vitae nec.</p>
      <p>Vitae nec.</p>
      <p>Vitae nec.</p>
      <p>Vitae nec.</p>
    </div>
  ));

  return (
    <section id="last-section">
      <div className="text">
        <h2>Tristique tempus tincidunt.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <FormInput placeholder="Enter your email address" label="Get a demo" />
      </div>
      <div className="row">
        {list}
        <div className="row__column ">
          <p className="row__column__box">
            <Arrow className="arrow-up" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            arcu hendrerit eleifend ullamcorper. Ut fermentum.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
