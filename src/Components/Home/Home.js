import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Type from "./Type";
import homeLogo from "../images/home-main.svg";
import Home2 from "./Home2";
import Nav from "./Nav";

function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  }, []);

  return (
    <Container fluid className="home-section">
      <Nav />
      <Container>
        <Row>
          <Col xs={6}>
            <h1 data-aos="flip-left" className="welcome">
              <strong>
                Hello!<span className="wave">👋</span>
              </strong>
              <br />
              <div className="my-name">I'm William Botbyl</div>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}></div>
            <Type />
          </Col>
          <Col>
            <div className="home-picture">
              <img src={homeLogo} alt="coding-logo" />
            </div>
          </Col>
        </Row>
      </Container>
      <Home2 />
    </Container>
  );
}

export default Home;
