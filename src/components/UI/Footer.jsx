import React from "react";
import "./Footer.css";
const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
        <hr />
      <div>TERMS & CONDITION</div>
      <div>
        <p>Coded by Abiy Menberu {currentDate}</p>
        <p>Credit: pinterst</p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
