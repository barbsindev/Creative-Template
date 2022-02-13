import React, { useState } from "react";
import "./styles/FirstPage.scss";
import Button from "../../components/Button";
import FormInput from "../../components/Input";
import IMG from "../../assets/image.png";
import IMG1 from "../../assets/Firstpage1.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navigation from "../Navigation/Navigation";

export default function FirstPage() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const { text } = useTypewriter({
  //   words: ["quis", "fringilla", "hendrerit"],
  //   loop: 0,
  // });
  console.log("xxx");
  // function hover(e) {
  //   e.target.style.textDecoration = "underline";
  //   console.log("underline");
  // }
  return (
    <div className="first-page">
      <div className="top-text">
        <p>
          Vel quis feugiat pharetra diam vivera quis.
          <a href="#">Take me there</a>
        </p>
      </div>
      <header>
        <Navigation />
      </header>
      <div className="row">
        <div className="column">
          <h1>
            Vel quis feugiat pharetra diam viverra{" "}
            <span className="typing-effect text-danger">
              {/* {text} */}
              {/* <Cursor cursorStyle="_" /> */}
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus
            hendrerit dignissim duis fringilla sit. Lacus porttitor neque ipsum.
          </p>
          <form className="column__form">
            <FormInput placeholder="Enter your email address" />
            <Button label="Request a demo" />
          </form>
        </div>
        <div className="column">
          <img src={IMG} alt="email form" />
          <img src={IMG1} alt="email form" className="mobile-img" />
        </div>
      </div>
    </div>
  );
}
