import React from "react";
import { Col, Row } from "antd";
import "./LandingCarousel.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip, Space } from "antd";
const LandingCarousel = () => {
  return (
    <div className="landing_carousel">
      <span className="sofa">Sofa Collection 2022</span>
      <Row className="carousel_row">
        <Col span={10} className="left_div">
          <p className="page_count">01</p>
          <div className="text_portion">
            <p className="title">Wood Cloth Sofa</p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              reprehenderit assumenda dolorem, eum consectetur inventore quia at
              adipisci neque illum.
            </p>

            <Button type="text" className="text explore">
              Explore Now &gt;
            </Button>
          </div>
        </Col>
        <Col span={12} className="right_div">
          <img
            src={require("../../assets/images/sofa.png")}
            alt="sofa"
            className="sofa_1"
          />
        </Col>
      </Row>
    </div>
  );
};

export default LandingCarousel;
