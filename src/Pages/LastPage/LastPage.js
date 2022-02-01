import React from "react";
import "./styles/LastPage.scss";
import { ReactComponent as Arrow1 } from "../../assets/arrowup.svg";
import { ReactComponent as Arrow } from "../../assets/arrow-up.svg";
import Button from "../../components/Button";
import FormInput from "../../components/Input";
import List from "../../components/List";
import Footer from "../Footer";
export default function LastPage() {
  return (
    <div className="footer">
      <section className="footer__text">
        <h2>Tristique tempus tincidunt.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form className="footer__form">
          <FormInput placeholder="Enter your email address" />
          <Button label="Get a demo" />
        </form>
      </section>

      <section className="footer__row">
        <div className="footer__row__column">
          <List />
        </div>

        <div className="footer__row__column">
          <List />
        </div>
        <div className="footer__row__column">
          <div className="mobile">
            <h4>Est </h4>
            <Arrow1 className="arrow" />
          </div>
          <p>Vitae nec.</p>
          <p>Vitae nec.</p>
          <p>Vitae nec.</p>
          <p>Vitae nec.</p>
        </div>
        <div className="footer__row__column">
          <div className="mobile">
            <h4>Est </h4>
            <Arrow1 className="arrow" />
          </div>
          <p>Vitae nec.</p>
          <p>Vitae nec.</p>
          <p>Vitae nec.</p>
          <p>Vitae nec.</p>
        </div>
        <div className="footer__row__column ">
          <p className="box">
            <Arrow className="arrow-up" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            arcu hendrerit eleifend ullamcorper. Ut fermentum.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
