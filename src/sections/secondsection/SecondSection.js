import React, { useEffect, useRef, useState } from "react";
import "./SecondSection.scss";
import { ReactComponent as Gorgias } from "../../assets/images/Gorgias.svg";
import { ReactComponent as Dark } from "../../assets/images/Logo-dark1.svg";
import { ReactComponent as Prezly } from "../../assets/images/Prezly.svg";
import { ReactComponent as Segment } from "../../assets/images/Segment.svg";
import { ReactComponent as Zapier } from "../../assets/images/Zapier.svg";
import { ReactComponent as Product } from "../../assets/images/Product.svg";
import FadeIn from "../../components/animation/FadeIn";
import Profilemob from "../../assets/images/Profile-mobile.png";
import Profile from "../../assets/images/Profile.png";
import Section from "../../components/text/Text";
import Marquee from "react-fast-marquee";
export default function SecondSection() {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const listRef = useRef(null);

  useEffect(
    (e) => {
      setInterval((e) => {
        console.log("function is run");
        setOffsetLeft((offsetLeft -= 10));

        if (window.pageXOffset > window.innerWidth) {
          console.log("off screen");
        }
      }, 1000);
    },
    [offsetLeft]
  );

  return (
    <section id="second-section" className="container">
      <FadeIn>
        <section className="container__logo">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant.
          </h3>
          <ul
            style={{
              left: `${setOffsetLeft}px`,
            }}
          >
            <Marquee>
              <li ref={listRef}>
                <Segment />
              </li>
              <li ref={listRef}>
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
            </Marquee>
          </ul>
          <a href="#first-section" className="underline">
            Ut eleifend
          </a>
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

        <section className="container__img">
          <img
            src={Profilemob}
            alt="second page hero responsive"
            className="container__img--responsive"
          />
          <img
            src={Profile}
            alt="second page hero"
            className="container__img--default"
          />
        </section>
      </FadeIn>
    </section>
  );
}
