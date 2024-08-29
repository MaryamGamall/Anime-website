import React from "react";
import "./Section2.css";
import { GrPlay } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import imgsec2 from "../../Aseets/Jujutsu_Kaisen-cover.jpg";
const Section2 = () => {
  return (
    <div>
      <div className="line"></div>

      <div className=" sec1">
        <div className="col-lg-7">
          <br />
          <br />
          <img src={imgsec2} />
        </div>
        <div className="col-lg-5 text-sec1">
          <br />
          <br />
          <h2>Jujutsu Kaisen </h2>
          <br />

          <br />
          <h4>
            A boy swallows a cursed talisman -
            <br /> the finger of a demon - and becomes
            <br /> cursed himself. He enters a shaman's
            <br /> school to be able to locate the demon's
            <br /> other body parts and thus
            <br /> exorcise himself.
          </h4>
          <br />
          <br />

          <button className="btn-sec">
            <GrPlay className="watch-icon" /> Watch Now
          </button>
          <span>
            {" "}
            <IoMdAdd className="list-icon" />
            Add to List
          </span>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Section2;
