import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { DiGitBranch } from "react-icons/di";
import { IconContext } from "react-icons";
import Name from "../images/wb.png";
import AOS from "aos";
import "aos/dist/aos.css";

function NavBar() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  }, []);

  return (
    <IconContext.Provider value={{ size: "1.7em" }}>
      <Navbar
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        sticky="top"
        variant="dark"
        className="navbar-nav"
      >
        <Container>
          <Navbar.Brand>
            <img className="nav-int" src={Name} alt="me" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="nav-text">
              <p>Home</p>
            </Nav.Link>
            <Nav.Link href="#" className="nav-text">
              <p>Projects</p>
            </Nav.Link>
            <Nav.Link href="#" className="nav-text">
              <p>Contact</p>
            </Nav.Link>
            <Nav.Link
              href="#"
              style={{ paddingBottom: "1rem" }}
              className="nav-text"
            >
              <DiGitBranch />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
}

export default NavBar;
