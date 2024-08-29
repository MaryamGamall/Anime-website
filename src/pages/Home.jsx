import React, { Fragment } from "react";
import Header from "../Companent/Header/Header";
import Film from "./Film";
import "./Film.css";
import Section1 from "../Companent/Section1/Section1";
import Section2 from "../Companent/Section2/Section2";

const Home = (props) => {
  const best = props.mymovies.slice(3, 4).map((momo) => {
    return (
      <div>
        <Film
          title={momo.title}
          poster={momo.poster}
          score={momo.score}
          eps={momo.episodes}
        />
      </div>
    );
  });

  const filmitem = props.mymovies.map((movie) => {
    return (
      <Film
        title={movie.title}
        poster={movie.poster}
        score={movie.score}
        eps={movie.episodes}
      />
    );
  });

  return (
    <Fragment>
      <Header />
      <section className="upcoming div-home">
        <div className="overlay">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 most">
                <br />
                <br />
                <br />

                <h2>Most Popular </h2>
              </div>
            </div>
            <div className="row">{filmitem}</div>
          </div>
        </div>
      </section>

      <Section1 />

      <section className="upcoming div-home ">
        <div className="overlay">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 most">
                <br />
                <br />

                <h2>Top Ranked </h2>
              </div>
            </div>
            <div className="row ">{best}</div>
          </div>
        </div>
      </section>
      <Section2 />
    </Fragment>
  );
};

export default Home;
