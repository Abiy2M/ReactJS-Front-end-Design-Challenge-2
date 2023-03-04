import React from "react";
import LandingCarousel from "../UI/LandingCarousel";
import Navbar from "../UI/Navbar";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing">
      <div className="carousel">
        <Navbar />
        <LandingCarousel />
        <div className="body_content">
          {/* <div className="content one">
            <p className="vertical_text">SALE UP TO 50% OFF</p>{" "}
            <div className="inner">
              <div className="background_div"></div>
              <img
                src={require("../../assets/images/sofa.png")}
                alt="sofa"
                className="shelf_items"
              />
              <p className="item_title text">Chairs & Sofas</p>
            </div>
          </div> */}

          <br />
          <br />

          <div className="content one">a</div>
          <div className="content two">b</div>
          <div className="content three">c</div>
          <div className="content four">d</div>
          <div className="content five">e</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
