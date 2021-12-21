import React from "react";
import FooterData from "./FooterData";
import { IconContext } from "react-icons";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer-container">
      <ul className="mapping-content">
        {FooterData.map((item, index) => {
          return (
            <IconContext.Provider value={{ size: "2rem", color: "white" }}>
              <div className="mapping-wrapper">
                <a href={item.link}>
                  <li key={index}>{item.socialIcon}</li>
                </a>
              </div>
            </IconContext.Provider>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
