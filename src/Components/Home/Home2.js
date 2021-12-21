import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../images/myavatar.png";

function Home2() {
  return (
    <Container fluid className="home-two-container" style={{ height: "120vh" }}>
      <Row>
        <Col xs={12}>
          <div style={{ marginTop: "190px" }} className="home-two-introduction">
            <div className="introduction-container">
              <h1 className="introduction-name">
                LET ME <span className="purple"> INTRODUCE </span> MYSELF,
              </h1>
              <br />
              <p className="paragraph">
                I am currently studying{" "}
                <span className="purple">Software Engineering</span> at{" "}
                <span className="purple">Monmouth University</span>, <br />I
                fell inlove with programing the moment i came across te subject.
                <br /> I've always been fascinated with how video games, Web
                Apps
                <br /> and everything else on the a computer works. I am
                proficcient in <br />
                <span className="purple">Javascript, Python and C++</span>
              </p>
            </div>
            <img className="myavatar" src={Avatar} alt="myself" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
