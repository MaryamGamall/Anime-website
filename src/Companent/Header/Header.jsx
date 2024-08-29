import React, { Fragment } from "react";
import imgheader from "../../Aseets/demon-slayer1-nezuko-and-tanjiro-kamado-wallpaper-1440x900_4.jpg";
import imgheader2 from "../../Aseets/AttackonTitan_FinalSeasonKeyVisualEren-1.jpg";
import imgheader3 from "../../Aseets/JJK-header-mobile2.jpg";

import { GrPlay } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import "./Header.css";
import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel className="sec-header">
      <Carousel.Item>
        <img
          className="d-block w-100 img-header"
          src={imgheader}
          alt="First slide"
        />
        <div className="filter"></div>
        <Carousel.Caption className="div-header">
          <h1>Demon Slayer: Kimetsu no Yaiba</h1>
          <p>
            <h5>
              A family is attacked by demons and only two members survive -
              Tanjiro and his sister Nezuko,
              <br />
              who is turning into a demon slowly. Tanjiro sets out to become
              <br /> a demon slayer to avenge his family and cure his sister.
            </h5>
          </p>
          <button>
            <GrPlay className="watch-icon" /> Watch Now{" "}
          </button>
          <span>
            <IoMdAdd className="list-icon" />
            Add to List
          </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-header"
          src={imgheader2}
          alt="First slide"
        />
        <div className="filter"></div>
        <Carousel.Caption className="div-header">
          <h1>Attack on Titan</h1>
          <p>
            <h5>
              After his hometown is destroyed and is traumatized, young Eren
              Jaeger vows to <br /> cleanse the earth of the giant humanoid
              Titans that have <br />
              brought humanity to the brink of extinction.
            </h5>
          </p>
          <button>
            <GrPlay className="watch-icon" /> Watch Now
          </button>
          <span>
            <IoMdAdd className="list-icon" />
            Add to List
          </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-header"
          src={imgheader3}
          alt="First slide"
        />
        <div className="filter"></div>
        <Carousel.Caption className="div-header">
          <h1>Jujutsu Kaisen</h1>
          <p>
            <h5>
              A boy swallows a cursed talisman - the finger of a demon and
              becomes cursed himself. <br /> He enters a shaman's school to be
              able to locate the demon's <br />
              other body parts and thus exorcise himself.
            </h5>
          </p>
          <button>
            <GrPlay className="watch-icon" /> Watch Now
          </button>
          <span>
            <IoMdAdd className="list-icon" />
            Add to List
          </span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
