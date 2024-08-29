import React from "react";
import "./Footer.css";
import { NavLink } from "react-bootstrap";
import { IoHeartCircleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="footer-2">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-12">
                <h2> AM </h2>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-12">
                <h4>Navigation</h4>
                <NavLink to="/home" className="link-nav">
                  {" "}
                  Home
                </NavLink>
                <NavLink to="/recommended" className="link-nav">
                  {" "}
                  Recommended
                </NavLink>
                <NavLink to="/new" className="link-nav">
                  {" "}
                  New
                </NavLink>
                <NavLink to="/list" className="link-nav">
                  {" "}
                  List
                </NavLink>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-12">
                <h4>About </h4>
                <a href="">Privacy policy</a>
                <a href="">Disclaimer</a>
                <a href="">Help</a>
                <a href="">FAQ</a>
              </div>
              <div class="col-lg-3 col-md-12 col-sm-12">
                <h4>Contact Us</h4>
                <a
                  href="https://twitter.com/_Maryam_Gamal_?t=dJfwT3Pp4whbcFCDvGlAFg"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  href="https://www.facebook.com/mimy.gamal.7?mibextid=ZbWKwL"
                  target="_blank"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/_maryam.gamal_?igsh=bnF5dm05MmIzY2sy"
                  target="_blank"
                >
                  Instgram
                </a>
                <a
                  href="https://www.linkedin.com/in/maryam-el-eraky-984106211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="footer-2">
            <div class="row">
              <div class="col-lg-8 col-md-6 col-sm-12">
                <p className="div-ma">
                  Copyright ©2024 All rights reserved | This is made with
                </p>
                by <IoHeartCircleOutline className="heart" />
                <span class="maryam"> Maryam Gamal</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="filter2"></div>
    </div>
  );
};

export default Footer;
