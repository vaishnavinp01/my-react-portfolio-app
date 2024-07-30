import React, { useContext } from "react";
import "../CSS/Project.css";
import { project } from "../Components/Data";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { ThemeContext } from "./ThemeContext";
const Project = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="Project" className="project">
      <h4 className={`project-heading ${theme}-mode`}>Project</h4>
      <Container className="project-container">
        <Row className="project-row">
          {project.map(({ name, image, info }, index) => {
            return (
              <Col>
                <div className="project-flip">
                  <div className="project-flipper">
                    <div className="project-front-card">
                      <img alt="" className="project-front-img" src={image} />
                      <Card.Title className="project-front-name">
                        {name}
                      </Card.Title>
                    </div>
                    <div className="project-back-card">
                      <div className="project-info">
                        <h3 className="project-back-name">{name}</h3>
                        <p className="project-back-language">MERN Stack</p>
                        <p className="project-back-info">{info}</p>
                        <div className="project-icon">
                          <a
                            href="https://github.com/vaishnavinp01"
                            target="_blank"
                            rel="noreferrer"
                            className="project-icon-small"
                          >
                            <BsGithub size={23} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Project;
