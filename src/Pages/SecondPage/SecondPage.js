import React from "react";
import "./styles/SecondPage.scss";
import { ReactComponent as Gorgias } from "../../assets/Gorgias.svg";
import { ReactComponent as Dark } from "../../assets/logo-dark1.svg";
import { ReactComponent as Prezly } from "../../assets/Prezly.svg";
import { ReactComponent as Segment } from "../../assets/Segment.svg";
import { ReactComponent as Zapier } from "../../assets/Zapier.svg";
import { ReactComponent as Product } from "../../assets/Product.svg";
import FadeIn from "../../components/FadeIn";
import IMG2 from "../../assets/image2.png";
import IMGResp from "../../assets/img.png";
import Section from "../../components/Section";
export default function SecondPage() {
  return (
    <div id="second-page">
      {" "}
      <FadeIn>
        <section>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant.
          </h3>

          <div className="container__logo">
            <ul>
              <li>
                <Segment />
              </li>
              <li>
                <Zapier />
              </li>
              <li>
                <Gorgias />
              </li>
              <li>
                <Product />
              </li>
              <li>
                <Dark />
              </li>
              <li>
                <Prezly />
              </li>
            </ul>
          </div>

          <p className="underline"> Ut eleifend</p>
        </section>
        <section className="container__text">
          <Section
            header="Sem enim cursus orci at"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, vitae
          et, vitae et cursus amet tincidunt feugiat nulla. Senectus maecenas
          diam risus sodales dictum eu. Eget cursus sit bibendum pulvinar
          faucibus vitae nam sed. Faucibus vel laoreet."
          />
        </section>
        <section>
          <img src={IMGResp} alt="secondresp" className="resp-img img" />
          <img src={IMG2} alt="second" />
        </section>
      </FadeIn>
    </div>
  );
}
