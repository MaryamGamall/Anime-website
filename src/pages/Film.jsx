import React from "react";
import "./Film.css";
import { FaStar } from "react-icons/fa";
const Film = (props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="box">
        <div className="img-box">
          <img src={props.poster} alt={props.title} />
        </div>
        <div className="text">
          <div className="text-header">
            <a href="">{props.title}</a>
          </div>
          <div className="text-footer">
            <span>
              <FaStar className="star" /> {props.score}
            </span>
            <span>
              <span className="eps">episodes :</span> {props.eps}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
