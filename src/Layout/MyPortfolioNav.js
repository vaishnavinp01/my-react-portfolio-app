import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import Resume from "../Images/online-resume.png";
import "../CSS/MyPortfolioNav.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ThemeContext } from "../Components/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const MyPortfolioNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      className={`myportfolionav-navbar ${theme}-mode`}
      fixed="top"
      expand="lg"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="myportfolionav-brand">
          <img src={Resume} alt="Resume" />
          <span className="myportfolionav-logo">Vaishnawi</span>
          <button className="myportfolionav-switch" onClick={toggleTheme}>
            {theme === "light" ? (
              <MdDarkMode style={{ color: "black" }} />
            ) : (
              <MdLightMode style={{ color: "white" }} />
            )}
          </button>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="myportfolionav-nav ms-auto">
            {[
              "Home",
              "Experience",
              "Project",
              "Skill",
              "Education",
              "Contact",
            ].map((section) => (
              <Nav.Link key={section}>
                <Link
                  className="myportfolionav-link"
                  activeClass="active"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setExpanded(!expanded)}
                >
                  {section}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyPortfolioNav;
