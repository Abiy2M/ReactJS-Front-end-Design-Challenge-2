import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu">
        <MenuOutlined className="hamburger"/>
        <p>Menu</p>
      </div>
      <p className="brand_name">Lux Furniture</p>
      <p>More</p>
    </div>
  );
};

export default Navbar;
