import ItemCard from "../UI/ItemCard";
import React from "react";
import LandingCarousel from "../UI/LandingCarousel";
import Navbar from "../UI/Navbar";
import "./Landing.css";
import Footer from "../UI/Footer";
const Landing = (props) => {
  return (
    <div className="landing">
      <div className="carousel">
        <Navbar />
        <LandingCarousel />
        <div className="body_content">
          <div className="content one">
            <ItemCard
              class="up"
              sideText="SALE UPTO 50% OFF"
              imgurl={require("../../assets/images/sofa3.png")}
              title="Loveseats"
            />
          </div>
          <div className="content two">
            <ItemCard
              class="up"
              sideText="SALE UPTO 50% OFF"
              imgurl={require("../../assets/images/board2.png")}
              title="TV boards"
              alignment="right"
            />
          </div>
          <div className="content three">
            <ItemCard
              sideText="SALE UPTO 50% OFF"
              imgurl={require("../../assets/images/sofa6.png")}
              title="Chairs & Sofas"
            />
          </div>
          <div className="content four">
            <ItemCard
              sideText="SALE UPTO 50% OFF"
              imgurl={require("../../assets/images/sofa.png")}
              title="Wood Decors"
              alignment="right"
            />
          </div>
          <div className="content five">
            <ItemCard
              sideText="SALE UPTO 50% OFF"
              imgurl={require("../../assets/images/sofa.png")}
              title="Light collections"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
