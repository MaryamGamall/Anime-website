import React from "react";
import "./Section1.css";
import { GrPlay } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import imgsec1 from "../../Aseets/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg";
const Section1 = () => {
  return (
    <div>
      <div className="line"></div>

      <div className=" sec1">
        <div className="col-lg-8 ">
          <br />
          <br />
          <br />
          <img src={imgsec1} className=" seca" />
        </div>
        <div className="col-lg-4 text-sec1">
          <h2 className="hattack">
            Attack on Titan
            <br /> The Final Season{" "}
          </h2>

          <h4>
            It's been four years since the scout
            <br /> Regiment reached the shoreline , and the
            <br />
            world looks different now . Things are
            <br /> heating up as the fact of the scout
            <br /> Regiment- and the the people of paradis -are
            <br />
            determind at last - However , Eren is
            <br />
            missing . will he reappear before age-old
            <br />
            tensions between Marleyans and Eldians
            <br />
            result int the war of allwars ?{" "}
          </h4>
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

export default Section1;
