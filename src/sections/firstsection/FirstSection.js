import React from "react";
import "./FirstSection.scss";
import FormInput from "../../components/input/Input";
import MainImg from "../../assets/images/Main-img.png";
import MainImgMob from "../../assets/images/Main-img-mobile.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navigation from "../../components/navigation/Navigation";

export default function FirstSection() {
  const { text } = useTypewriter({
    words: ["quis", "fring", "hendr"],
    loop: 1,
  });

  return (
    <section id="first-section">
      <div className="top-text">
        <p>Vel quis feugiat pharetra diam vivera quis. </p>
        <a href="#first-section">Take me there</a>
      </div>
      <header>
        <Navigation />
      </header>
      <div className="row">
        <div className="row__column">
          <h1>
            Vel quis feugiat pharetra diam viverra
            {""} {text}
            <Cursor cursorStyle="_" />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus
            hendrerit dignissim duis fringilla sit. Lacus porttitor neque ipsum.
          </p>
          <FormInput
            placeholder="Enter your email address"
            label="Request a demo"
          />
        </div>
        <div className="row__column">
          <img
            src={MainImg}
            alt="irst page email form"
            className="row__column__img"
          />
          <img
            src={MainImgMob}
            alt="first page email form responsive"
            className="row__column__img--responsive"
          />
        </div>
      </div>
    </section>
  );
}
