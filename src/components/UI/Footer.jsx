import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import React from "react";
import "./Footer.css";
const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="first">
        <p>
          Coded by - &nbsp;
          <a href="https://www.linkedin.com/in/abiyme/">Abiy Menberu</a>,{" "}
          {currentDate}
        </p>
        <p></p>
      </div>
      <div>
        <p></p>
        <p>
          Credit: <a href="https://www.pinterest.com/">Pinterest</a>
        </p>
      </div>
      <div className="socials">
        <p>My Socials: </p>
        <div className="socials_list">
          <p>
            <LinkedinOutlined className="logo" />
            <a href="https://www.linkedin.com/in/abiyme/">LinkedIn</a>
          </p>
          <p>
            <GithubOutlined className="logo" />
            <a href="https://github.com/Abiy2M">Github</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
